import React from "react";

const BlogItem = ({blog, onEdit, onDelete}) => {
    return (
        
        <li>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <small>By {blog.author}</small>
            <button id="btn1" onClick={() => onEdit(blog)}> Edit </button>
            <button id="btn2" onClick={() => onDelete(blog._id)}> Delete </button>
        </li> 
    );
};

export default BlogItem;