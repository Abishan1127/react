import React from 'react';
import '../styles/Blog.css';


const blogs = [
  { img: './src/assets/b1.jpg', title: 'Blog 1', description: 'Content for blog 1...' },
  { img: './src/assets/b2.jpg', title: 'Blog 2', description: 'Content for blog 2...' },
];

const Blog: React.FC = () => {
  return (
    <section className="blog">
      <h2>From Our Blog</h2>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-item">
            <img src={blog.img} alt={blog.title} width="400" />
            <h4>{blog.title}</h4>
            <p>{blog.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
