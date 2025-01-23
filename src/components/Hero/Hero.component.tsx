import { useNavigate } from 'react-router-dom';
import './Hero.styles.scss';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className='hero'>
        <div className='hero-content'>
          <div className='hero-wrapper'>
            <h1>Welcome to Eterna</h1>
            <p>Timeless Elegance in Every Piece</p>
            <button
              className='cta-button'
              onClick={() => navigate('/categories')}
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
