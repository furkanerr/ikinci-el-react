import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import SignInStyle from '../../styles/SignInStyle/SignInStyle.module.css';
import EyeIcon from '../../constants/Icons/eyeIcon';
import { useFormik } from 'formik';
import LoginValidation from '../../constants/Validations/loginValidation';
function SignIn() {

    const [passwordType,setPasswordType]=useState('password');

    const handlePasswordType=()=>{
        if(passwordType==='password'){
            setPasswordType('text');
        }else{
            setPasswordType('password');
        }
    }
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: LoginValidation,
        onSubmit: (values) => {
          console.log(values);
        },
      });

  return (
    <div className={SignInStyle.Container}>
        <div className={SignInStyle.ImageLeft}></div> 
        
      <div className={SignInStyle.FormContainer}>
      <div className={SignInStyle.Icon}>
          
           </div>
        <div className={SignInStyle.Header}>
            <div className={SignInStyle.GirisYapHeaderText}>Giriş Yap</div>
            <div className={SignInStyle.TextUnderHeader}>Fırsatlardan yararlanmak için giriş yap!</div>
        </div>
        <div className={SignInStyle.Form}>
            <form onSubmit={formik.handleSubmit}>
                <div className={SignInStyle.FormElements}>
                    <div className={SignInStyle.Email}>
                        <label className={SignInStyle.Label} htmlFor="email">Email</label>
                        <input className={SignInStyle.Input} type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                         name="email"  placeholder="Email@example.com" />
                    </div>
                    <div className={SignInStyle.Password}>
                        <label className={SignInStyle.Label} htmlFor="password">Şifre</label>
                        <input className={SignInStyle.Input} type={passwordType}
                         onChange={formik.handleChange}
                         value={formik.values.password}
                         name="password" placeholder="•••••" />
                        <div className={SignInStyle.EyeIcon} onClick={handlePasswordType}>
                            <EyeIcon/>
                            </div>
                    </div>
                    <div className={SignInStyle.PasswordRemember}>Şifremi Unuttum</div>
                    <div className={SignInStyle.RegisterButton}>
                        <button className={SignInStyle.Button} type="submit">Giriş</button>
                    </div>
                </div>
            </form>

        </div>
        <div className={SignInStyle.Footer}>
            <span className={SignInStyle.FooterTextHesabınVarmi}>Hesabın yok mu?</span>
            <Link to={"/signup"} style={{textDecoration:'none'}}>
            <span className={SignInStyle.FooterTextGirisYap}>Üye ol</span>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn