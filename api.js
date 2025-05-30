import axios from "axios";

const API_URL = "http://localhost:3000/api";

//Fetch all blogs
export const getBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//Create a new blog
export const createBlog = async (blogData) => {
  const response = await axios.post(API_URL,blogData);
  return response.data;
};

//Update a Blog
export const updateBlog = async (id,blogData) => {
  const response = await axios.put(`${API_URL}/${id}`,blogData);
  return response.data;
};

//Delete a Blog 
export const deleteBlog = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}
