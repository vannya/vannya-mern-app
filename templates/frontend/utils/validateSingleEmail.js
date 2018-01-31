module.exports = `// Emails passed in as single arguments. 
// Example: import validateSingleEmail from "../../utils/validateSingleEmail";
// errors.fromfield = validateSingleEmail(values.fromfield || "");

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default email => {
  email = email.trim();
  email = re.test(email) === false ? email : "";

  if (email !== "") {
    return "Email is invalid";
  } else {
    return;
  }
};
`