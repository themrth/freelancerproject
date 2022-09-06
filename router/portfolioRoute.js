const express = require('express');
const portfolioController = require('../controllers/portfolioController');
const router = express.Router();

router.route('/').get(portfolioController.getAllPortfolio);
router.route('/portfolio').post(portfolioController.createPortfolio);
router.route('/portfolio/:id').get(portfolioController.getPortfolio);
router.route('/portfolio/:id').put(portfolioController.updatePortfolio);
router.route('/portfolio/:id').delete(portfolioController.deletePortfolio);
router.route('/portfolio').get(portfolioController.getPortfolio);

module.exports = router;
