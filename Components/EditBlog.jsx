import React, {useState,useEffect} from "react";

const EditBlog = ({ blogEdit, onUpdate }) => {
    const [formData,setFormData] = useState(blogEdit || { title:"", content:"", author:"" });

    useEffect(() => {
        setFormData(blogEdit);
    },[blogEdit]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData)
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />

                <input type="text" name="content" value={formData.content} onChange={handleChange} />

                <input type="text" name="author" value={formData.author} onChange={handleChange} />

                <button id="btn1" type="submit">Update Blog</button>
            </form>
        
        </>
    )
}
export default EditBlog;