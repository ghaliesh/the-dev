const emailRegex = /\S+@\S+\.\S+/;
const urlRegex = /^\S+\.com$/;
const validName = name => {
  if (!name) {
    return { error: true, message: 'Name field is required.' };
  } else if (name.length < 3) {
    return { error: true, message: 'Name field must be at least 2 letters.' };
  } else if (name.length > 25) {
    return {
      error: true,
      message: 'Name field cannot be more than 25 letters.'
    };
  }
};

const validEmail = email => {
  if (!email) {
    return { error: true, message: 'Email field is required.' };
  } else if (email.length < 5) {
    return { error: true, message: 'Email field must be at least 5 letters.' };
  } else if (!emailRegex.test(email)) {
    return { error: true, message: `${email} is not valid email.` };
  } else if (email.length > 50) {
    return {
      error: true,
      message: 'Email field cannot be more than 25 letters.'
    };
  }
};

const validPassword = password => {
  if (!password) {
    return { error: true, message: 'Password field is required.' };
  } else if (password.length < 5) {
    return {
      error: true,
      message: 'Password field must be at least 5 letters.'
    };
  } else if (password.length > 255) {
    return {
      error: true,
      message: 'Password field cannot be more than 255 letters.'
    };
  }
};

const validURL = url => {
  if (!url) {
    return { error: true, message: 'Url field is required.' };
  }
  if (urlRegex.test(validURL)) {
    return { error: true, message: `${url} is not valid url` };
  }
};

export { validName, validEmail, validPassword, validURL };
