import React from "react";
import PageStyle from "../../styles/ProductUploadStyle/ProductUploadStyle.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Uploadıcon from "../../img/Group 6911.png";
function ProductUpload() {
  return (
    <div className={PageStyle.Container}>
      <Navbar />
      <div className={PageStyle.CardContainer}>
        <div className={PageStyle.Content}>
          <div className={PageStyle.Left}>
            <div className={PageStyle.Header}>Ürün Detayları</div>
            <div className={PageStyle.ProductName}>
              <label>Ürün Adı</label>
              <input placeholder="Örnek:Iphone 12 Pro Max" />
            </div>
            <div className={PageStyle.ProductInfo}>
              <label>Ürün Bilgisi</label>
              <textarea placeholder="Ürün Açıklaması girin" />
            </div>
            <div className={PageStyle.CategoryAndBrandContainer}>
              <div className={PageStyle.Category}>
                <label>Kategori</label>
                <select>
                  <option>Kategori Seçiniz</option>
                </select>
              </div>
              <div className={PageStyle.Brand}>
                <label>Marka</label>
                <select>
                  <option>Marka Seçiniz</option>
                </select>
              </div>
            </div>
            <div className={PageStyle.ColorAndOtherContainer}>
              <div className={PageStyle.Color}>
                <label>Renk</label>
                <select>
                  <option>Renk Seçiniz</option>
                </select>
              </div>
              <div className={PageStyle.KullanimDurumu}>
                <label>Kullanım Durumu</label>
                <select>
                  <option>Kullanım Durumu Seçiniz</option>
                </select>
              </div>
            </div>
            <div className={PageStyle.PriceContainer}>
              <label>Fiyat</label>
              <input
                className={PageStyle.PriceInput}
                placeholder="Bir fiyat girin"
              />
              <div className={PageStyle.BidOption}>
                <span>Teklif opsiyonu</span>
                <label className={PageStyle.Toggle}>
                  <input type="checkbox" />
                  <span className={PageStyle.Slider}></span>
                </label>
              </div>
            </div>
          </div>
          <div className={PageStyle.Right}>
            <div className={PageStyle.RightHeader}>Ürün Görseli</div>
            <div className={PageStyle.ImageUploadContainer}>
              <div className={PageStyle.ImageUpload}>
                <div className={PageStyle.Icon}>
                  <img src={Uploadıcon} className={PageStyle.ImageUploadIcon} />
                </div>
                <div>Sürükle Bırak</div>
                <div>veya</div>

                <input type="file" id={"file"} accept="image" />
                <div className={PageStyle.InputLabel}>
                  <label for="file">Görsel Seçin</label>
                </div>
                <div className={PageStyle.ImageConstraint}>
                  PNG ve JPEG Dosya boyutu: max. 100kb
                </div>
              </div>
            </div>

            <div className={PageStyle.SubmitProductButton}>
              <button>Kaydet</button>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default ProductUpload;
