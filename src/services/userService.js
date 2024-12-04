const User = require('../models/userModel');

exports.getAllUsers = async () => {
  return await User.find();
};

exports.getUserById = async (id) => {
  return await User.findById(id);
};

exports.createUser = async (data) => {
  const newUser = new User(data);
  return await newUser.save();
};

exports.updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

exports.loginUser = async (data) => {
      const dbdata=await User.findOne({email:data.email});
      if(dbdata.email==data.email && dbdata.password==data.password){
        return dbdata;
      }
      else{
        return "user id or password not correct";
      }
};


exports.enrollUserInEvent = async (data) => {
  const UserData = await User.findOne({ _id: data.userId });

  if (!UserData) {
    throw new Error('User not found');
  }

  // Only modify the events array
  UserData.events.push(data.eventId);
  
  // Save only the necessary changes
  await UserData.save({ validateModifiedOnly: true });

  return UserData;
};