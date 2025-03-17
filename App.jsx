import React, { useEffect,useState } from "react";
import { getBlogs, createBlog, updateBlog, deleteBlog} from "./api";
import BlogList from "./Components/BlogList";
import BlogForm from "./Components/BlogForm";
import EditBlog from "./Components/EditBlog";
import './style.css';


function App() {
    const [blogs,setBlogs] = useState([]);
    const [editBlog, setEditBlog] = useState(null);


    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        const data = await getBlogs();
        setBlogs(data);
    };

    const handleCreateBlog = async (newBlog) => {
        console.log("blog created");
        await createBlog(newBlog);
        fetchBlogs();
    };

    const handleEditBlog = (blog) => {
        setEditBlog(blog);
    };

    const handleUpdateBlog = async (updatedBlog) => {
        // try {
            await updateBlog(updatedBlog._id, updatedBlog);
            setEditBlog(null);
            fetchBlogs();

        // }catch (error) {
        //     console.error("Update Failed:",error);
        // }
    };

    const handleDeleteBlog = async (blogId) => {
        await deleteBlog(blogId);
        fetchBlogs();
    };

    

    return (
        <div>
             
            <h1>My Blog Posts</h1>
                {!editBlog ? (
                    <BlogForm onCreate={handleCreateBlog} />
                ) : (

                    <EditBlog blogEdit={editBlog} onUpdate={handleUpdateBlog} />
                )}
                 
        
                <BlogList blogs={blogs} onEdit={handleEditBlog} onDelete={handleDeleteBlog} />
            
            
        </div>
    )
}
export default App;