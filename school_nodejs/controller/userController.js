const UserSvc = require("../model/userModel");
const oUserService = new UserSvc();

module.exports = class UserController {
  constructor() {
    this.authenticate = async (req, res, next) => {
      oUserService
        .authenticate(req.body.username, req.body.password)
        .then((user) =>
          user
            ? res.json(user)
            : res
                .status(400)
                .json({ message: "Username or password is incorrect" })
        )
        // eslint-disable-next-line promise/no-callback-in-promise
        .catch((err) => next(err));
    };
    this.getAll = async (req, res, next) => {
      oUserService
        .getAll()
        .then((users) => res.json(users))
        // eslint-disable-next-line promise/no-callback-in-promise
        .catch((err) => next(err));
    };
  }
};
