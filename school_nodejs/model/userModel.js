// users hardcoded for simplicity, store in a db for production applications
const users = [
  {
    id: 1,
    username: "IagoAlves",
    password: "123456",
    firstName: "Iago",
    lastName: "Alves",
  },
];

module.exports = class producerService {
  constructor() {
    this.authenticate = async (username, password) => {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        // eslint-disable-next-line n/no-unsupported-features/es-syntax
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      }
    };
  }
};
