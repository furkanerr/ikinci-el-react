import React from "react";
import { Link } from "react-router-dom";
import RegisterStyle from "../../styles/RegisterStyle/RegisterStyle.module.css";
import İkinciElLogo from '../../constants/Icons/İkinicElLogo';
function SignUp() {
  return (
    <div className={RegisterStyle.Container}>
        <div className={RegisterStyle.Icon}>
            <İkinciElLogo/>
        </div>
      <div className={RegisterStyle.RegisterFormContainer}>
        <div className={RegisterStyle.Header}>
            <div className={RegisterStyle.UyeOlHeaderText}>Üye Ol</div>
            <div className={RegisterStyle.TextUnderHeader}>Fırsatlardan yararlanmak için üye ol!</div>
        </div>
        <div className={RegisterStyle.Form}>
            <form>
                <div className={RegisterStyle.FormElements}>
                    <div className={RegisterStyle.Email}>
                        <label className={RegisterStyle.Label} htmlFor="email">Email</label>
                        <input className={RegisterStyle.Input} type="email" name="email"  placeholder="Email@example.com" />
                    </div>
                    <div className={RegisterStyle.Password}>
                        <label className={RegisterStyle.Label} htmlFor="password">Şifre</label>
                        <input className={RegisterStyle.Input} type="password" name="password" placeholder="*****" />
                    </div>
                    <div className={RegisterStyle.RegisterButton}>
                        <button className={RegisterStyle.Button} type="submit">Üye Ol</button>
                    </div>
                </div>
            </form>

        </div>
        <div className={RegisterStyle.Footer}>
            <span className="FooterTextHesabınVarmi">Hesabın var mı?</span>
            <Link to={"/signin"}>
            <span className="FooterTextGirisYap">Giriş Yap</span>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
