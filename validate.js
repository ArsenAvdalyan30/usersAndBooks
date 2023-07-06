class validate {
  validateKeys(req, res, next) {
    for (let key in req.body) {
      if (
        !("name" in req.body) ||
        !("surname" in req.body) ||
        !("books" in req.body)
      ) {
        res.status(400).send("name or surname or books is missed, please add");
        return;
      }
    }
    next();
  }

  valid_Name_surName(req, res, next) {
    return typeof req.body.name !== "string"
      ? res.status(400).send("Please input a valid name")
      : typeof req.body.surname !== "string"
      ? res.status(400).send("Please input a valid surname")
      : next();
  }

  validNameBook(req, res, next) {
    if (!"bookName" in req.body) {
      return res.status(400).send("please input a correct key (bookName)");
    } else {
      return typeof req.body.bookName !== "string"
        ? res.status(400).send("Please input a valid bookName")
        : next();
    }
  }
}

module.exports = new validate();
