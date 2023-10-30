import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'A', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'B', body: 'lorem ipsum...', author: 'kong', id: 2 },
    { title: 'C', body: 'lorem ipsum...', author: 'luigi', id: 3 }
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
}
 
export default Home;