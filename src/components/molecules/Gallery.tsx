import { useMemo, useState } from 'react';
import Masonry from 'react-masonry-css';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './style/gallery.css';
import type { ICategoriesProjects, ITechnologies } from '@interface/home';
import fetching from '@/public/data.json';

interface Props {
  categories: ICategoriesProjects[];
}

const Gallery = ({ categories }: Props) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.name ?? '*');

  const technologies = fetching.data?.listTechnologies ?? [];

  const technologyMap = useMemo(
    () => new Map<string, ITechnologies>(technologies.map((item) => [item.name, item])),
    [technologies]
  );

  const selectedCategory = categories.find(({ name }) => name === activeCategory) ?? categories[0];

  const projects = useMemo(() => {
    if (!selectedCategory || selectedCategory.name === '*') {
      return categories.flatMap(({ Proyect }) => Proyect);
    }

    return selectedCategory.Proyect;
  }, [categories, selectedCategory]);

  const breakpoints = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <section className="portfolioGallery">
      <div className="portfolioFilters" aria-label="Filtros del portafolio">
        {categories.map(({ id, title, name }) => (
          <button
            key={id}
            type="button"
            className={`portfolioFilter ${activeCategory === name ? 'is-active' : ''}`}
            onClick={() => setActiveCategory(name)}
          >
            {title}
          </button>
        ))}
      </div>

      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        selector=".portfolioLightboxItem"
        download={false}
        counter={false}
      >
        <Masonry
          breakpointCols={breakpoints}
          className="portfolioMasonry"
          columnClassName="portfolioMasonry__column"
        >
          {projects.map((item) => {
            const projectTechnologies = item.technologies.map((tech) => technologyMap.get(tech) ?? null);

            return (
              <article key={`${activeCategory}-${item.id}`} className="portfolioCard">
                <a
                  href={item.image}
                  className="portfolioCard__media portfolioLightboxItem"
                  data-sub-html={`<h4>${item.title}</h4><p>${item.text}</p>`}
                  aria-label={`Abrir captura de ${item.title}`}
                >
                  <img src={item.image} alt={item.title} />
                  <span className="portfolioCard__overlay">Ver captura</span>
                </a>

                <div className="portfolioCard__body">
                  <div className="portfolioCard__header">
                    <h3>{item.title}</h3>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      Visitar
                    </a>
                  </div>

                  <p>{item.text}</p>

                  {activeCategory !== 'ecommerce' && (
                    <div className="portfolioCard__stack" aria-label={`Tecnologias de ${item.title}`}>
                      {item.technologies.map((techName, index) => {
                        const technology = projectTechnologies[index];

                        if (!technology) {
                          return (
                            <span key={`${item.id}-${techName}`} className="portfolioTech portfolioTech--fallback">
                              {techName}
                            </span>
                          );
                        }

                        return (
                          <span key={`${item.id}-${techName}`} className="portfolioTech" title={technology.name}>
                            <img src={technology.image} alt={technology.name} loading="lazy" />
                          </span>
                        );
                      })}
                    </div>
                  )}

                  <div className="portfolioCard__meta">
                    {item.libries.split(',').map((tag) => (
                      <span key={`${item.id}-${tag.trim()}`}>{tag.trim()}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </Masonry>
      </LightGallery>
    </section>
  );
};

export default Gallery;
