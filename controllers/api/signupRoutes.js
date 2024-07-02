const router = require('express').Router();
const { User } = require('../../models');

// GET route to render the signup form
router.get('/', (req, res) => {
  res.render('signup'); 
});

// POST route to handle form submission
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;