/**Dependencies */
import React, { useCallback,useEffect,useState } from "react";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";

/**Style */
import "../../styles/DropZoneStyle/DropZoneStyle.css";
import PageStyle from "../../styles/ProductUploadStyle/ProductUploadStyle.module.css";

/**Icons */
import Uploadıcon from "../../img/Group 6911.png";


function DropZone({ setImages }) {
  const onDrop = useCallback((acceptedFiles,rejectedFiles) => {
    
      if(acceptedFiles.length>0){
        setImages(acceptedFiles);
      }
      if(rejectedFiles.length>0){
        setIsFileTooLargeState(true);
      }
       
        console.log(acceptedFiles);
        console.log(rejectedFiles)
      
    
  }, []);
  const { getRootProps, getInputProps, isDragAccept, isDragReject ,acceptedFiles, rejectedFiles } =
    useDropzone({
         onDrop, 
         multiple: false,
         maxSize:400000,
         accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
          }
        });
       
        const [isFileTooLargeState, setIsFileTooLargeState] = useState(false);
  useEffect(() => {
  
  }, [isFileTooLargeState]);
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
        {isFileTooLargeState && (
          <div className="text-danger mt-2">
            File was too large.
          </div>
        )}
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
