import  React from "react";

const DeleteBlog = ({ blogId, onDelete}) => {
    const handleDelete =() => {
        if (window.confirm("Are you sure you want to delete?")) {
            onDelete(blogId);
        }
    };

    return (
        <button id="btn2" onClick={handleDelete}>Delete</button> 
    );
};
export default DeleteBlog;