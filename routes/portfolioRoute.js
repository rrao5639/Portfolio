// const express=require('express');
// const { sendEmailController } = require('../controllers/portfolioController');
// const router=express.Router();
// router.post("/sendEmail",sendEmailController);
// module.exports=router;
const express = require('express');
const { sendEmailController } = require('../controllers/portfolioController');
const router = express.Router();

router.post("/sendEmail", (req, res, next) => {
  console.log(`Received ${req.method} request on /sendEmail`);
  next();
}, sendEmailController);

module.exports = router;
