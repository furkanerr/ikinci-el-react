import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import SignInStyle from '../../styles/SignInStyle/SignInStyle.module.css';
import EyeIcon from '../../constants/Icons/eyeIcon';
function SignIn() {

    const [passwordType,setPasswordType]=useState('password');

    const handlePasswordType=()=>{
        if(passwordType==='password'){
            setPasswordType('text');
        }else{
            setPasswordType('password');
        }
    }
    

  return (
    <div className={SignInStyle.Container}>
        <div className={SignInStyle.Icon}>
            {/* <İkinciElLogo/> */}
        </div>
      <div className={SignInStyle.FormContainer}>
        <div className={SignInStyle.Header}>
            <div className={SignInStyle.GirisYapHeaderText}>Giriş Yap</div>
            <div className={SignInStyle.TextUnderHeader}>Fırsatlardan yararlanmak için üye ol!</div>
        </div>
        <div className={SignInStyle.Form}>
            <form>
                <div className={SignInStyle.FormElements}>
                    <div className={SignInStyle.Email}>
                        <label className={SignInStyle.Label} htmlFor="email">Email</label>
                        <input className={SignInStyle.Input} type="email" name="email"  placeholder="Email@example.com" />
                    </div>
                    <div className={SignInStyle.Password}>
                        <label className={SignInStyle.Label} htmlFor="password">Şifre</label>
                        <input className={SignInStyle.Input} type={passwordType} name="password" placeholder="•••••" />
                        <div className={SignInStyle.EyeIcon} onClick={handlePasswordType}>
                            <EyeIcon/>
                            </div>
                    </div>
                    <div className={SignInStyle.PasswordRemember}>Şifremi Unuttum</div>
                    <div className={SignInStyle.RegisterButton}>
                        <button className={SignInStyle.Button} type="submit">Üye Ol</button>
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