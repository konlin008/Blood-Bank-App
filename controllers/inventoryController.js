const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");
const mongoose = require("mongoose");

const createInventoryController = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User Not Found");
    }

    // if (inventoryType === "in" && user.role !== "donar") {
    //   throw new Error("Not a donar account");
    // }

    // if (inventoryType === "out" && user.role !== "hospital") {
    //   throw new Error("Not a hospital");
    // }

    if (req.body.inventoryType == "out") {
      const requestedBloodGroup = req.body.bloodGroup;
      const requestedQuantityOfBlood = req.body.quantity;
      const organisation = new mongoose.Types.ObjectId(req.body.userId);
      //calculate Blood Quanitity
      const totalInOfRequestedBlood = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "in",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      // console.log("Total In", totalInOfRequestedBlood);
      const totalIn = totalInOfRequestedBlood[0]?.total || 0;
      //calculate OUT Blood Quanitity

      const totalOutOfRequestedBloodGroup = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "out",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      const totalOut = totalOutOfRequestedBloodGroup[0]?.total || 0;
      //in & Out Calc
      const availableQuanityOfBloodGroup = totalIn - totalOut;
      //quantity validation
      if (availableQuanityOfBloodGroup < requestedQuantityOfBlood) {
        return res.status(500).send({
          success: false,
          message: `Only ${availableQuanityOfBloodGroup}ml of ${requestedBloodGroup.toUpperCase()} is available`,
        });
      }
      req.body.hospital = user?.id;
    } else {
      req.body.donar = user?._id;
    }
    //save record
    const inventory = new inventoryModel(req.body);
    await inventory.save();

    return res.status(201).send({
      success: true,
      message: "New Blood Record Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Create Inventory API",
      error,
    });
  }
};

const getInventoryController = async (req, res) => {
  try {
    const filter = req.body.userid
      ? { organisation: mongoose.Types.ObjectId(req.body.userid) }
      : {};

    const inventory = await inventoryModel
      .find(filter)
      .populate("donar")
      .populate("hospital")
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      message: "get all records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get All Inventory",
      error,
    });
  }
};

//get donar records
const getDonarsController = async (req, res) => {
  try {
    const organisation = req.body.userId;
    //find donars
    const donarId = await inventoryModel.distinct("donar", {
      organisation,
    });
    //console.log(donarId);
    const donars = await userModel.find({ _id: { $in: donarId } });

    return res.status(200).send({
      success: true,
      message: "Donar Record Fetched Successfully",
      donars,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Donar records",
      error,
    });
  }
};

const getHospitalController =  async (req,res) => {
     try {
      const organisation = req.body.userId
      //get hospital id
      const hospitalId = await inventoryModel.distinct('hospital', {organisation})
      //find hospital
      const hospitals = await userModel.find({
        _id: {$in: hospitalId}
      })
      return res.status(200).send({
        success: true,
        message: "Hospitals Data Fetched Successfully",
        hospitals,
      });

     } catch (error) {
      console.log(error)
      return res.status(500).send({
        success:false,
        message:'Error In get Hospital API',
        error
      }) 
     }
};

module.exports = {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
};
