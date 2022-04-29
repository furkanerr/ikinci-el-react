import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import RegisterStyle from "../../styles/RegisterStyle/RegisterStyle.module.css";
import RegisterValidation from "../../constants/Validations/registerValidation";
import api from '../../services/api';
function SignUp() {


    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: RegisterValidation,
        onSubmit: async (values) => {
          try {
          const response = await  api.Register({
              username: values.password,
              email: values.email,
              password: values.password,
            });
            



            console.log(response)
          } 
          catch (error) {
            console.log(error);
          }
          
        },
      });
    
      const createCookie = (name, value, days) => {
        var expires = "";
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
      };
      const readCookie = (name) => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === " ") c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      };
      const eraseCookie = (name) => {
        createCookie(name, "", -1);
      };


  return (
    <div className={RegisterStyle.Container}>
        <div className={RegisterStyle.ImageLeft}></div> 
        
      <div className={RegisterStyle.FormContainer}>
      <div className={RegisterStyle.Icon}>
           
           </div>
        <div className={RegisterStyle.Header}>
            <div className={RegisterStyle.UyeOlHeaderText}>Üye Ol</div>
            <div className={RegisterStyle.TextUnderHeader}>Fırsatlardan yararlanmak için üye ol!</div>
        </div>
        <div className={RegisterStyle.Form}>
            <form onSubmit={formik.handleSubmit}>
                <div className={RegisterStyle.FormElements}>
                    <div className={RegisterStyle.Email}>
                        <label className={RegisterStyle.Label} htmlFor="email">Email</label>
                        <input className={RegisterStyle.Input} 
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        type="email" name="email"  placeholder="Email@example.com" />
                    </div>
                    <div className={RegisterStyle.Password}>
                        <label className={RegisterStyle.Label} htmlFor="password">Şifre</label>
                        <input className={RegisterStyle.Input}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        type="password" name="password" placeholder="•••••" />
                    </div>
                    <div className={RegisterStyle.RegisterButton}>
                        <button className={RegisterStyle.Button} type="submit">Üye Ol</button>
                    </div>
                </div>
            </form>

        </div>
        <div className={RegisterStyle.Footer}>
            <span className={RegisterStyle.FooterTextHesabınVarmi}>Hesabın var mı?</span>
            <Link to={"/signin"} style={{textDecoration:'none'}}>
            <span className={RegisterStyle.FooterTextGirisYap}>Giriş Yap</span>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
