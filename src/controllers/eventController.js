const eventService = require('../services/eventService');

exports.getAllEvents = async (req, res, next) => {
  try {
    const events = await eventService.getAllEvents();
    res.json(events);
  } catch (error) {
    next(error);
  }
};

exports.createEvent = async (req, res, next) => {
  try {
    const addEvent= await eventService.createEvent(req.body);
    res.status(201).json(addEvent);
  } catch (error) {
    next(error);
  }
};

// exports.getUserById = async (req, res, next) => {
//   try {
//     const user = await userService.getUserById(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json(user);
//   } catch (error) {
//     next(error);
//   }
// };

// exports.createUser = async (req, res, next) => {
//   try {
//     const newUser = await userService.createUser(req.body);
//     res.status(201).json(newUser);
//   } catch (error) {
//     next(error);
//   }
// };

// exports.updateUser = async (req, res, next) => {
//   try {
//     const updatedUser = await userService.updateUser(req.params.id, req.body);
//     if (!updatedUser) return res.status(404).json({ message: 'User not found' });
//     res.json(updatedUser);
//   } catch (error) {
//     next(error);
//   }
// };

// exports.deleteUser = async (req, res, next) => {
//   try {
//     const result = await userService.deleteUser(req.params.id);
//     if (!result) return res.status(404).json({ message: 'User not found' });
//     res.status(204).send();
//   } catch (error) {
//     next(error);
//   }
// };

// exports.loginUser = async (req, res, next) => {
//   try {
//     const newUser = await userService.loginUser(req.body);
//     res.status(201).json(newUser);
//   } catch (error) {
//     next(error);
//   }
// };
