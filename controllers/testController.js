const testControler = (req, res) => {
  res.status(200).send({
    message: "welcome User1",
    sucess: true,
  });
};
module.exports = {testControler};
