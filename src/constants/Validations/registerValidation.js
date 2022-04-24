import * as yup from 'yup';

const RegisterValidation = yup.object().shape({
    email: yup
        .string()
        .email("Email doğru formatta değil")
        .required( "Eposta alanı zorunludur"),
    password: yup
        .string()
        .min(6, "Şifre en az 6 karakter olmalıdır")
        .max(20, "Şifre en fazla 20 karakter olmalıdır")
        .required("Şifre alanı zorunludur")
  
});

export default RegisterValidation;