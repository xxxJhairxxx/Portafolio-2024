import { useState } from 'react';
import Masonry from 'react-masonry-css';
import './style/gallery.css';
import type { ICategoriesProjects } from '@interface/home';

interface props {
  categories: ICategoriesProjects[];
}

const Gallery = ({ categories }: props) => {
  const [category, setCategory] = useState(categories[0]);

  const handleFilterChange = (categoryName: string) => {
    const selectedCategory = categories.find(({ name }) => name === categoryName);
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  };

  const breakpoints = {
    default: 3,
    414: 1,
    768: 2,
    1200: 3,
  };

  return (
    <div className="App">
      <div className="filter-button-group">
        {categories.map(({ id, title, name }) => (
          <button
            key={id}
            className={category.name === name ? 'selectCat' : ''}
            onClick={() => handleFilterChange(name)}
          >
            {title}
          </button>
        ))}
      </div>

      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {(category.Proyect.length !== 0
          ? category.Proyect
          : categories.flatMap(({ Proyect }) => Proyect)
        ).map((item) => (
          <div key={item.id} className="grid-item fade-in">
            <img src={item.image} alt={`Project: ${item.id}`} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
