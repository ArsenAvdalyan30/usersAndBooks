let arr = [];

class usersDeals {
  createUser(userBody, res) {
    userBody.id = arr.length + 1;
    arr.push(userBody);
    res.status(200).send(arr);
    console.log("allUsers in createUser", arr);
  }

  createBook(bookBody, { userId }, res) {
    let foundUser = arr.find((user) => user.id.toString() === userId);
    if (foundUser) {
      bookBody.bookId = foundUser.books.length + 1;
      foundUser.books.push(bookBody);
      res.status(200).send(foundUser);
    } else {
      res.status(400).send("wrong id, user has not been found");
    }
  }

  getAllBooksByUserId({ userId }, res) {
    let foundUser = arr.find((user) => user.id.toString() === userId);
    if (foundUser) {
      res.status(200).send(foundUser.books);
    } else {
      res.status(400).send("user is not found");
    }
  }

  updateBookById(bookBody, { userId }, { bookId }, res) {
    let foundUser = arr.find((user) => user.id.toString() === userId);
    if (foundUser) {
      let foundBook = foundUser.book.find(
        (book) => book.id.toString() === bookId
      );
      if (foundBook) {
        foundBook.bookName = bookBody.bookName;
        res.status(200).send(foundBook);
      } else {
        res.status(400).send("book is not found");
      }
    }
  }

  deleteBookById({ userId }, { bookId }, res) {
    let foundUser = arr.find((user) => user.id.toString() === userId);
    if (foundUser) {
      let foundBook = foundUser.book.find(
        (book) => book.id.toString() === bookId
      );
      if (foundBook) {
        foundUser.books.splice(foundUser.books.indexOf(foundBook), 1);
        res.status(200).send("Book is deleted");
      }
    }
  }

  getUsers(req, res) {
    res.status(200).json(arr);
  }

  getUsersByID({ userId }, res) {
    let foundUser = arr.find((user) => user.id.toString() === userId);
    if (foundUser) {
      res.status(200).json(foundUser);
    } else {
      res.status(400).send("user is not found");
    }
  }

  getBooksById({ userId }, { bookId }, res) {
    let foundUser = arr.find((user) => user.id.toString() === userId);
    if (foundUser) {
      let foundBook = foundUser.books.find(
        (book) => book.bookId.toString() === bookId
      );
      if (foundBook) {
        res.status(200).json(foundBook);
      }
    }
  }

  updateUserById(userBody, { userId }, res) {
    let foundUser = arr.find((user) => user.id.toString() === userId);
    if (foundUser) {
      for (let key in userBody) {
        foundUser[key] = userBody[key];
      }
      res.status(200).json(arr);
    } else {
      res.status(400).send("user is not found");
    }
  }

  deleteUser({ userId }, res) {
    let foundUser = arr.find((user) => user.id.toString() === userId);
    if (foundUser) {
      arr.splice(arr.indexOf(foundUser), 1);
      res.status(200).send("user is deleted!");
    } else {
      res.status(400).send("such user does not exist");
    }
  }
}

module.exports = new usersDeals();
