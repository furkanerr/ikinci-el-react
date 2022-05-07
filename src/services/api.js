/** Dependencies */
import axios from "axios";
import readCookie from '../constants/CookieFunctions/readCookie';

axios.interceptors.request.use(
	function (config) {
		const { origin } = new URL(config.url);

		const allowedOrigins = ["https://bootcamp.akbolat.net"];
		const token = readCookie("access-token");
   // console.log(token);
		if (allowedOrigins.includes(origin) && token!==null) {
			config.headers.authorization =`Bearer ${token}` ;
      //console.log(config);
		}
		return config;
    
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);
export default class Service {

    
   

  static async GetAllProducts(limit,offset) {
    try {
      const response = await axios.get(`https://bootcamp.akbolat.net/products?_limit=${limit}&_start=${offset}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async AddProduct(input) {
    try {
      const response = await axios.post("https://bootcamp.akbolat.net/products",input);
      console.log(input);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
 
  static async DeleteProduct(id) {
    try {
      const response = await axios.delete(`https://bootcamp.akbolat.net/products/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

    static async GetProductById(id) {
    try {
      const response = await axios.get(`https://bootcamp.akbolat.net/products/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async UpdateProduct(id,input) {
    try {
      const response = await axios.put(`https://bootcamp.akbolat.net/products/${id}`,input);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
   static async GetProductByCategory(category) {
    try {
      const response = await axios.get(`https://bootcamp.akbolat.net/categories?name=${category}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async Login(input) {
    try {
      const response = await axios.post("https://bootcamp.akbolat.net/auth/local", input);
      
      return response;
    } catch (error) {
      
      
      return error.response;
    }
  }

    static async Register(input) {
    try {
      const response = await axios.post("https://bootcamp.akbolat.net/auth/local/register",input);
      return response;
    } catch (error) {
      return error.response;
    }
  }

  static async GetCategories() {
    try {
      const response = await axios.get("https://bootcamp.akbolat.net/categories");
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async FetchMe() {
    try {
      const response = await axios.get("https://bootcamp.akbolat.net/users/me");
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async GetUsersProduct(id) {
    try {
      const response = await axios.get(`https://bootcamp.akbolat.net/products?users_permissions_user=${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async GetAllColor() {
    try {
      const response = await axios.get("https://bootcamp.akbolat.net/colors");
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async GetAllBrands() {
    try {
      const response = await axios.get("https://bootcamp.akbolat.net/brands");
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async GetAllUsingStatus() {
    try {
      const response = await axios.get("https://bootcamp.akbolat.net/using-statuses");
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async GetOffers(id) {
    try {
      const response = await axios.get(`https://bootcamp.akbolat.net/offers?&users_permissions_user=${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async MakeOffer(input) {
    try {
      const response = await axios.post("https://bootcamp.akbolat.net/offers",input);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async UpdateOffer(id,input) {
    try {
      const response = await axios.put(`https://bootcamp.akbolat.net/offers/${id}`,input);
      return response;
    } catch (error) {
      console.log(error);
    }
}
  static async DeleteOffer(id) {
    try {
      const response = await axios.delete(`https://bootcamp.akbolat.net/offers/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }

}
}