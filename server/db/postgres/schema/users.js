export default (Type) => ({
  first_name: Type.STRING,
  email: {
    type: Type.STRING,
    unique: true,
    allowNull: false
  },
  password: Type.STRING,
  avatar: Type.STRING,
});
