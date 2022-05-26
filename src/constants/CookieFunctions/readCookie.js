const readCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
      
        return ca.substring(nameEQ.length, ca.length);
  };
  export default readCookie;


// this method is used to read a cookie and return the value