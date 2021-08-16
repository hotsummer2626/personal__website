const validate = (name, data) => {
  const value = data[name];
  const NAME_REGEXP = /^[A-Za-z]+$/;
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;

  switch (name) {
    case "firstName": {
      if (!value) {
        return "Please input your first name";
      }
      if (!NAME_REGEXP.test(value)) {
        return "Please input English alphabets only";
      }
      return "";
    }

    case "lastName": {
      if (!value) {
        return "Please input your last name";
      }
      if (!NAME_REGEXP.test(value)) {
        return "Please input English alphabets only";
      }
      return "";
    }

    case "email": {
      if (!value) {
        return "Please input your email";
      }
      if (!EMAIL_REGEXP.test(value)) {
        return "Please input a valid email";
      }
      return "";
    }

    case "project": {
      if (!value) {
        return "Please input your project";
      }
      return "";
    }

    default:
      return "";
  }
};

export default validate;
