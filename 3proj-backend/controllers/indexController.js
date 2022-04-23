const indexNoContent = (req, res) => {
  try {
    res.sendStatus(204)
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const indexTeapot = (req, res) => {
  try {
    res.status(418).json("I'm a teapot !")
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { indexNoContent, indexTeapot }