const readCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
      var c = ca[0];
      console.log(c);
      if(c){return c.substring(nameEQ.length, c.length);}
      return null;
  };
  export default readCookie;


// this method is used to read a cookie and return the value