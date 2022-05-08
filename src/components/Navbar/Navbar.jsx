/**Dependencies */
import React from "react";
import { Link } from "react-router-dom";

/**Style */
import NavbarStyle from "../../styles/NavbarStyle/NavbarStyle.module.css";

/**Icons */
import PlusIcon from "../../constants/Icons/plusIcon";
import PersonIcon from "../../constants/Icons/personIcon";
import Logo from "../../img/Group 6607.png";


/**Context */
import { useAuth } from "../../context/authContext";

function Navbar() {
  const {  loggedIn } = useAuth();
  return (
    <div className={NavbarStyle.Navbar}>
      <div className={NavbarStyle.Container}>
        <div className={NavbarStyle.Logo}>
          <Link to="/">
            <img className={NavbarStyle.LogoImg} src={Logo} alt='logo' />
          </Link>
        </div>
        <div className={NavbarStyle.ButtonGroup}>
          <div className={NavbarStyle.PlusIcon}>
            <PlusIcon />
          </div>
          {/* buraya Auth koşulu eklenecek. eğer giriş yapılmış ise Hesabım butonu gösterilecek */}
          <Link to={"/productupload"}>
            <div className={NavbarStyle.AddProductButton}>Ürün Ekle</div>
          </Link>
          {loggedIn ? (
            <>
              {" "}
              <div className={NavbarStyle.PersonIcon}>
                <PersonIcon />
              </div>{" "}
              <Link to={"/account"}>
                <div className={NavbarStyle.LoginButton}>Hesabım</div>
              </Link>
            </>
          ) : (
            <Link to={"/signin"}>
              <div className={NavbarStyle.LoginButton}>Giriş Yap</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
