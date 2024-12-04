const userService = require('../services/userService');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const result = await userService.deleteUser(req.params.id);
    if (!result) return res.status(404).json({ message: 'User not found' });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const newUser = await userService.loginUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

exports.enrollUserInEvent = async (req, res, next) => {
  try {
    const newUser = await userService.enrollUserInEvent(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
  // try {
  //   // Find the user by ID and add the event ID to the user's events array
  //   const user = await User.findById(userId);
  //   if (!user) throw new Error('User not found');
    
    
  //   // Add the event to the user's events array
  //   user.events.push(eventId);  // Assuming you are using ObjectId references
  //   await user.save();  // Save the updated user
    
  //   return user;  // Return the updated user
  // } catch (error) {
  //   throw new Error(error.message);
  // }
};
