/**Dependencies */
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";

/**Style */
import "../../styles/DropZoneStyle/DropZoneStyle.css";
import PageStyle from "../../styles/ProductUploadStyle/ProductUploadStyle.module.css";

/**Icons */
import Uploadıcon from "../../img/Group 6911.png";


function DropZone({ setImages }) {
  const onDrop = useCallback((acceptedFiles) => {
    
     
        setImages(acceptedFiles);
        console.log(acceptedFiles);
      
    
  }, []);
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
         onDrop, 
         multiple: false,
         maxSize:400000,
         accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
          }
        });

  return (
    <div className={clsx(PageStyle.ImageUploadContainer,
    {'ImageUploadContainer-red':isDragReject===true},{'ImageUploadContainer-blue':isDragAccept===true})} {...getRootProps()}>
      <input {...getInputProps()} />
      <div className={PageStyle.ImageUpload}>
        <div className={PageStyle.Icon}>
          <img src={Uploadıcon} className={PageStyle.ImageUploadIcon} />
        </div>
        <div className={'SurukleBirak'}>Sürükleyip bırakarak yükle</div>
        <div className={'SurukleBirak'}>veya</div>

        {isDragReject && (
          <div className={PageStyle.DragReject}>
            Bu tür dosya izin verilmiyor
          </div>
        )}

        <div className={PageStyle.InputLabel}>
          <span>Görsel Seçin</span>
        </div>
        <div className={PageStyle.ImageConstraint}>
          PNG ve JPEG Dosya boyutu: max. 400kb
        </div>
      </div>
    </div>
  );
}

export default DropZone;
