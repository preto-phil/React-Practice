import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'A', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'B', body: 'lorem ipsum...', author: 'kong', id: 2 },
    { title: 'C', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete} />

    </div>
  );
}
 
export default Home;