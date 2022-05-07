import createCookie from './createCookie';
const eraseCookie = (name) => {
    createCookie(name, "", -1);
  };

  export default eraseCookie;

  // this method is used to erase a cookie