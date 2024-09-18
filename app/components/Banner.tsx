"use client"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Image from 'next/image';

function Banner() {
  return (
    <div className='mt-5'>
      <Carousel 
        autoPlay
        infiniteLoop
        interval={3000} 
        transitionTime={500} 
        showArrows={true}
        showThumbs={false}
      >
        <div className="relative w-full h-[500px]">
          <Image
            src="https://links.papareact.com/7ma"
            alt="Ad"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[500px]">
          <Image
            src="https://links.papareact.com/6ff"
            alt="Ad 2"
            fill
            className="object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
