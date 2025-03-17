import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs, onEdit, onDelete}) => {
    return (
        <ul>
            
            {blogs.map((blog) => (
                <BlogItem key={blog._id}  blog={blog} onEdit={onEdit} onDelete={onDelete} />
            ))}
            
        </ul>
    );
};
export default BlogList;