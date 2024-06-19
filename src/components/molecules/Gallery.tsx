import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import './style/gallery.css';

const images = [
  { id: 1, src: 'https://livedemo00.template-help.com/wt_prod-10986/images/grid-gallery-1-573x800_original.jpg', category: 'paintings' , isVisible:true},
  { id: 2, src: 'https://livedemo00.template-help.com/wt_prod-10986/images/grid-gallery-2-1200x800_original.jpg', category: 'graphic-arts' , isVisible:true },
  { id: 3, src: 'https://livedemo00.template-help.com/wt_prod-10986/images/grid-gallery-3-628x800_original.jpg', category: 'sculptures' , isVisible:true },
  { id: 4, src: 'https://livedemo00.template-help.com/wt_prod-10986/images/grid-gallery-4-666x800_original.jpg', category: 'paintings' , isVisible:true },
  { id: 5, src: 'https://livedemo00.template-help.com/wt_prod-10986/images/grid-gallery-5-1200x831_original.jpg', category: 'graphic-arts' , isVisible:true },
  { id: 6, src: 'https://livedemo00.template-help.com/wt_prod-10986/images/grid-gallery-6-1200x783_original.jpg', category: 'sculptures' , isVisible:true }
];

const Gallery = () => {
  const [filter, setFilter] = useState('*');

  const handleFilterChange = (category:any) => {
    setFilter(category);
  };

  const filteredImages = filter === '*' ? images : images.filter(image => image.category === filter);
  
  const breakpoints = {
    414: 1,
    768:2,
    1200:3
  }


  return (
    <div className="App">
      <div className="filter-button-group">
        <button className={filter === '*' ? 'selectCat':''} onClick={() => handleFilterChange('*')}>All</button>
        <button className={filter === 'paintings' ? 'selectCat':''} onClick={() => handleFilterChange('paintings')}>Paintings</button>
        <button className={filter === 'graphic-arts' ? 'selectCat':''} onClick={() => handleFilterChange('graphic-arts')}>Graphic Arts</button>
        <button className={filter === 'sculptures' ? 'selectCat':''} onClick={() => handleFilterChange('sculptures')}>Sculptures</button>
      </div>

      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {filteredImages.map(image => (
           <div
           key={image.id}
           className={`grid-item ${image.isVisible ? 'fade-in' : 'fade-out'}`}
         >
           <img src={image.src} alt={`Category: ${image.category}`} />
         </div>
        ))}
      </Masonry>
    </div>
  );
}
export default Gallery;

