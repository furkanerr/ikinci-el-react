import * as yup from 'yup';

const AddProductValidation = yup.object().shape({
    name: yup
        .string()
       .min(3, "Ürün adı en az 3 karakter olmalıdır")
        .required( "Ürün ismi alanı zorunludur"),
    price: yup
        .number()
        .min(1, "Ürün fiyatı en az 1 TL olmalıdır")
        .required( "Ürün fiyatı alanı zorunludur"),
    
        category: yup
        .string()
        .required( "Kategori alanı zorunludur"),
    description: yup
        .string()
        .required( "Açıklama alanı zorunludur"),

        color: yup
        .string()
        .required( "Renk alanı zorunludur"),

        brand: yup
        .string()
        .required( "Marka alanı zorunludur"),
        category: yup
        .string()
        .required( "Kategori alanı zorunludur"),

    status: yup
        .string()
        .required( "Durum alanı zorunludur"),
    
});

export default AddProductValidation;
    