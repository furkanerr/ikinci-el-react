import * as yup from 'yup';

const BidValidation = yup.object().shape({
 
    offerPrice: yup
     .number()
     .min(1, "En az 1 TL olmalıdır")
    .required("Teklif alanı zorunludur")
  
});

export default BidValidation;