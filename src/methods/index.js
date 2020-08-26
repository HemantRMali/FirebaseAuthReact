export const isValidEmail = (email) => {
  console.log('email:', email);
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(email).toLowerCase());
};
export const isValidPassword = (password) => {
  console.log('password:', password);
  return password.trim().length > 0;
};
