const Portfolio = require('../models/Portfolio');

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('add-portfolio', {
    page_name: 'contact',
  });
};

exports.getEditPage = async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id)
  res.status(200).render('edit-portfolio', {
    page_name: 'edit-portfolio',
    portfolio
  });
};
