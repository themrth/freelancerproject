const express = require('express');
const pageController = require('../controllers/pageController');
const router = express.Router();

router.route('/about').get(pageController.getAboutPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/portfolio/edit/:id').get(pageController.getEditPage);

module.exports = router;
