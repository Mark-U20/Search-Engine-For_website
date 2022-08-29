const { saveBook } = require("../controllers/user-controller");
const { User } = require("../models");

const resolvers = {
  Query: {
    me: async (_, __, { req }) => {
      const user = await User.findOne({
        where: {
          id: req.userId,
        },
      });
      return user;
    },
  },
  Mutation: {
    async login(_, { email, password }) {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        console.log("No user was found");
      } else {
        const passwordAuth = await user.isCorrectPassword(password);
        if (passwordAuth) {
          const token = user.generateToken();
          return { token, user };
        }
      }
    },
    async saveBook(_, { input }, { user }) {
      const savedBook = await saveBook(input, user);
      return savedBook;
    },
  },
};

module.exports = resolvers;
