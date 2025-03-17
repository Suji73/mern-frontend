import React, { useState } from "react";

const BlogForm = ({ onCreate }) => {
  const [formData,setFormData] = useState({ title:"", content:"", author:""});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDeafault();
    onCreate(formData);
    setFormData({title:"", content:"", author:""});
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <input type="text" name="title" placeholder="title" value={formData.title} onChange={handleChange} />

      <input type="text" name="content" placeholder="content" value={formData.content} onChange={handleChange} />

      <input type="text" name="author" placeholder="author" value={formData.author} onChange={handleChange} />

      <button id="btn" type="submit">Create Blog</button>

    </form>
  )
}


export default BlogForm;
