// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, username: 'IagoAlves', password: '123456', firstName: 'Iago', lastName: 'Alves' }];

module.exports = class producerService {
    authenticate = async (username,password) => {
        return await _authenticate(username,password);
    };
};

_authenticate = async (username,password) => {
   const user = users.find(u => u.username === username && u.password === password);
    if (user) {       
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
};