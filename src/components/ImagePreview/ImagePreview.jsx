import React,{useState} from 'react'


function ImagePreview({file}) {

    console.log(file)
    const [imagePreview, setImagePreview] = useState(null)
   
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () =>{
        setImagePreview(reader.result)
    }

  return (
    <div>
        <img src={imagePreview} alt="preview" width={'100px'} height={'100px'} />
    </div>
  )
}

export default ImagePreview