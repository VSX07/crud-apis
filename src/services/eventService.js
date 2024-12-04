const Events= require('../models/eventModel');

exports.getAllEvents = async () => {
  return await Events.find();
};

exports.createEvent = async (data) => {
    const addEvent = new Events(data);
   return await addEvent.save();
  };
// exports.getUserById = async (id) => {
//   return await User.findById(id);
// };

// exports.createUser = async (data) => {
//   const newUser = new User(data);
//   return await newUser.save();
// };

// exports.updateUser = async (id, data) => {
//   return await User.findByIdAndUpdate(id, data, { new: true });
// };

// exports.deleteUser = async (id) => {
//   return await User.findByIdAndDelete(id);
// };

// exports.loginUser = async (data) => {
//       const dbdata=await User.findOne({email:data.email});
//       if(dbdata.email==data.email && dbdata.password==data.password){
//         return dbdata;
//       }
//       else{
//         return "user id or password not correct";
//       }
// };