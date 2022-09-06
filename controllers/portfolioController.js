const Portfolio = require('../models/Portfolio');

exports.getAllPortfolio = async (req, res) => {
  const portfolios = await Portfolio.find({});
  const portfolio = await Portfolio.findById(req.params.id);
  res.render('main.ejs', {
    portfolios,
    portfolio,
  });
};

exports.getPortfolio = async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);
  res.render('portfolio', {
    portfolio,
  });
};

exports.createPortfolio = async (req, res) => {
  await Portfolio.create(req.body);
  res.redirect('/')
};

exports.updatePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findOne({ _id: req.params.id });
  portfolio.title = req.body.title;
  portfolio.description = req.body.description;
  portfolio.save();

  res.redirect(`/portfolio/${req.params.id}`);
};

exports.deletePortfolio = async (req, res) => {
  await Portfolio.findByIdAndRemove({ _id: req.params.id });
  res.redirect('/');
};
