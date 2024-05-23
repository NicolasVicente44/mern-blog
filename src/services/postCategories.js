import axios from "axios";

const BASE_URL = "https://mern-blog-backend-fd7k.onrender.com"; // Update with your backend URL

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/post-categories`);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
