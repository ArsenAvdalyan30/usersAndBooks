
const express = require("express");
const validate = require("./validate");
const router = express.Router();
const usersDeals = require("./usersDeals.js");

router
  .route("/")
  .get((req, res) => usersDeals.getUsers(req, res))
  .post(validate.validateKeys, validate.valid_Name_surName, (req, res) =>
    usersDeals.createUser(req.body, res)
  );

router
  .route("/:userId")
  .get((req, res) => usersDeals.getUsersByID(req.params, res))
  .put((req, res) => usersDeals.updateUserById(req.body, req.params, res))
  .delete((req, res) => {
    deleteUser(req.params, res);
  });

router
  .route("/:userId/books")
  .post(validate.validNameBook, (req, res) =>
    usersDeals.createBook(req.body, req.params, res)
  )
  .get((req, res) => usersDeals.getAllBooksByUserId(req.params, res));

router
  .route("/:userId/books/:bookId")
  .get((req, res) => usersDeals.getBooksById(req.params, req.params, res))
  .put(validate.validNameBook, (req, res) =>
    usersDeals.updateBookById(req.params, res)
  )
  .delete((req, res) => usersDeals.deleteBookById(req.params, req.params, res));
module.exports = router;
