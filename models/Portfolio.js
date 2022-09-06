const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  title: String,
  description: String,
  createDate: {
    type: Date,
    default: Date.now,
  },
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
