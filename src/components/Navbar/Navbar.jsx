import React from "react";
import NavbarStyle from "../../styles/NavbarStyle/NavbarStyle.module.css";
import PlusIcon from "../../constants/Icons/plusIcon";
import PersonIcon from "../../constants/Icons/personIcon";
import Logo from '../../img/Group 6607.png'
function Navbar() {
  return (
    <div className={NavbarStyle.Navbar}>
      <div className={NavbarStyle.Logo}>
        <img className={NavbarStyle.LogoImg} src={Logo}/>
      </div>
      <div className={NavbarStyle.ButtonGroup}>
        <div className={NavbarStyle.PlusIcon}>
          <PlusIcon />
        </div>
        {/* buraya Auth koşulu eklenecek. eğer giriş yapılmış ise Hesabım butonu gösterilecek */}
        <div className={NavbarStyle.AddProductButton}>Ürün Ekle</div>
        <div className={NavbarStyle.PersonIcon}>
          <PersonIcon />
        </div>
        <div className={NavbarStyle.LoginButton}>Giriş Yap</div>
      </div>
    </div>
  );
}

export default Navbar;
