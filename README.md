# Library of Alexandria Backend
Backend repository for the Library of Alexandria

## Models

![ERD](/images/erd.png)

## Routes

| Method | Path           | File         | Description                       |
| ------ | -------------- | ------------ | --------------------------------- |
| POST   | /users/signup  | users.js     | Sign up a new user                |
| POST   | /users/login   | users.js     | Log in an existing user           |
| GET    | /users/:id     | users.js     | Display a user's data             |
| PUT    | /users/:id     | users.js     | Update a user's data              |
| DELETE | /users/:id     | users.js     | Delete a user's account           |
| GET    | /books/:id     | books.js     | View full text of a book          |
| GET    | /books/:query  | books.js     | View all books that match a query |
| POST   | /favorites/:id | favorites.js | Add a book to a reading list      |
| GET    | /favorites/:id | favorites.js | View all of a user's books        |
| DELETE | /favorites/:id | favorites.js | Remove a book from a reading list |