export const emailChecker = value => {
  if (value) {
    if (value.includes('@') && value.includes('.'))
      return undefined;
    else
      return 'Incorrect email';
  }else {
    return 'Required'
  }
};

export const required = value => value ? undefined : 'Required'

export const composeValidators = (...validators) => value => validators.reduce((error, validator) =>
  error || validator(value), undefined);