const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title :{
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  description:{
    type:String,
    required:true,
    trim:true,
  },
  date:{
    type:String,
    required:true,
    trim:true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Event', eventSchema);
