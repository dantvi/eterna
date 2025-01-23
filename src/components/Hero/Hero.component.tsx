import { useNavigate } from 'react-router-dom';
import './Hero.styles.scss';
import Button from '../button/Button.component';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className='hero'>
        <div className='hero-content'>
          <div className='hero-wrapper'>
            <h1>Welcome to Eterna</h1>
            <p>Timeless Elegance in Every Piece</p>
            <Button onClick={() => navigate('/categories')}>Shop Now</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
