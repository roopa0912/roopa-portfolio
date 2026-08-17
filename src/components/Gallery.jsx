import './Gallery.css';
import useReveal from './useReveal';

const models = [
  'assembly-linkage.png',
  'assembly-puller.png',
  'cylinder-piston-linkage.png',
  'assembly-u-joint.png',
  'spur-gear.png',
  'lower-arm.png',
];

function Gallery() {
  const { ref, visible } = useReveal();

  return (
    <section className="gallery" ref={ref}>
      <p className="gallery-label">06 / gallery</p>

      <div className={`gallery-grid ${visible ? 'revealed' : ''}`}>
        {models.map((m) => (
          <div className="gallery-tile" key={m}>
            <img src={`${import.meta.env.BASE_URL}${m}`} alt={m.replace('.png', '').replace(/-/g, ' ')} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;