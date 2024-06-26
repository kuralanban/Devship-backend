module.exports = (mongoose) => {
  const users = mongoose.model(
    "User",
    mongoose.Schema({
      email: {
        type: String,
      },
      password: {
        type: String,
      },
      firstName:  {
        type: String,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
      },
      username: {
        type: String,
      },
      password:  {
        type: String,
      },
      confirmPassword:  {
        type: String,
      },
    })
  );
  return users;
};
