import axios from "axios";

export default class Service {
   

  static async GetAllProducts() {
    try {
      const response = await axios.get("https://bootcamp.akbolat.net/products");
      return response.data;
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
   static async GetProductByCategory(category) {
    try {
      const response = await axios.get(`https://bootcamp.akbolat.net/products?category=${category}`);
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
      console.log(error);
    }
  }

    static async Register(input) {
    try {
      const response = await axios.post("https://bootcamp.akbolat.net/auth/local/register",input);
      return response;
    } catch (error) {
      console.log(error);
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
}
