import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors  = {};

  //console.log("REQ.EMAIL:" + data.email);
  if (Validator.isEmpty(data.username)) {
    errors.username = 'This fild is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'This fild is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'This fild is required';
  }
  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This fild is required';
  }
  if (!Validator.equals(data.password,data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }
  if (Validator.isEmpty(data.timezone)) {
    errors.timezone = 'This fild is required';
  }

  return {
    errors,
    isValid:  isEmpty(errors)
  }
}
