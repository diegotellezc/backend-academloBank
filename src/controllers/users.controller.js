const Users = require('../models/users.model');
const catchAsync = require('../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  const { name, password } = req.body;

  const accountNumber = Math.floor(Math.random() * 900000) + 100000;

  const user = await Users.create({
    name,
    accountNumber,
    password,
  });

  res.status(200).json({
    status: 'success',
    message: 'The user has been created',
    user,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'This is the login',
  });
});
