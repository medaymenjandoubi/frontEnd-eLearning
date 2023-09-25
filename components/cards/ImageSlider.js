import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Add this to enable center mode
  };

  return (
    <Slider {...settings}>
      <div>
        <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
          <img
            src="Slider1.png"
            alt="Slider Image 1"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div>
        <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
          <img
            src="Slider2.jpg"
            alt="Slider Image 2"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
          
        </div>
      </div>
      <div>
        <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
          <img
            src="Slider3.png"
            alt="Slider Image 3"
            style={{ width: '100%', height: '400px', objectFit: 'inherit' }}
          />
        </div>
      </div>
    </Slider>
  );
};

export default CarouselSlider;
