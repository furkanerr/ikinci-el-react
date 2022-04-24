import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import RegisterStyle from "../../styles/RegisterStyle/RegisterStyle.module.css";
import RegisterValidation from "../../constants/Validations/registerValidation";
function SignUp() {


    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: RegisterValidation,
        onSubmit: (values) => {
          console.log(values);
        },
      });

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
