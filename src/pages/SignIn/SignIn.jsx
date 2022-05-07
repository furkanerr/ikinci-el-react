/**Dependencies */
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import { useFormik } from 'formik';
import readCookie from '../../constants/CookieFunctions/readCookie';

/**Style */
import SignInStyle from '../../styles/SignInStyle/SignInStyle.module.css';

/**Icon */
import EyeIcon from '../../constants/Icons/eyeIcon';

/**Validation */
import LoginValidation from '../../constants/Validations/loginValidation';

/**Services */
import api from '../../services/api';

/**Context */
import { useAuth } from '../../context/authContext';

/**Toastify */
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()  
function SignIn() {
    const {login} = useAuth();
    const [passwordType,setPasswordType]=useState('password');
    let navigate = useNavigate();


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
        onSubmit: async (values) => {
          try {
              const response = await  api.Login({
                    identifier: values.email,
                    password: values.password,
                });
                if( response.status!==200){
                    const notify = () => {
                      
                        toast.error("Emailiniz veya şifreniz hatalı",
                       {
                           style:{backgroundColor:' #FFE5E5',color:'#F77474'},
                        
                        autoClose: 3000,
                        draggable: false,
                        newestOnTop: true,
                        position: "top-right",
                        closeButton: false,
                        progressBar: false,
                        pauseOnHover: false,
                        hideProgressBar: true,
                        closeOnClick: true,
                        theme: "colored"
                       }
                            );
                    }
                    notify();
                }
                else{
                console.log(response)
                login(response.data);
                navigate('/');
                }
          } catch (error) {
           
            console.log(error);

          }
        },
      });

      useEffect(() => {
        const token = readCookie("access-token");
        if(token){
            navigate('/');
        }

      }, [])
      
  return (
    <div className={SignInStyle.Container}>
        <ToastContainer />
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