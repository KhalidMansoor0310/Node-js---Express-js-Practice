const filter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else {
    next();
  }
};

module.exports = filter;
