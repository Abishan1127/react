import React from 'react';
import '../styles/ Categories.css';

const categories = [
  { img: './src/assets/favicon.png', title: 'Textbooks', description: 'Content for textbooks...' },
  { img: './src/assets/cat2.png', title: 'Science', description: 'Content for science...' },
  { img: './src/assets/cat3.png', title: 'History', description: 'Content for history...' },
  { img: './src/assets/cat4.png', title: 'Biography', description: 'Content for biography...' },
  { img: './src/assets/cat5.png', title: 'Adventure', description: 'Content for adventure...' },
  { img: './src/assets/cat6.png', title: 'Duventure', description: 'Content for adventure...' }
];

const Categories: React.FC = () => {
  return (
    <section className="categories">
      <h2>Books Categories</h2>
      <p>There are many variations of passages...</p>
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <img src={category.img} alt={category.title} width="50" />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
