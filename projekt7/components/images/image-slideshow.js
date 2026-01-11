'use client'; 

import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from "./image-slideshow.module.css";


import tofuBowlImg from '@/assets/tofu-bowl.jpg';
import veggieBurgerImg from '@/assets/veggie-burger.jpg';
import buddhaBowlImg from '@/assets/buddha-bowl.jpg';
import greenPastaImg from '@/assets/green-pasta.jpg';
import quinoaSaladImg from '@/assets/quinoa-salad.jpg';
import smoothieImg from '@/assets/green-smoothie.jpg';
import hummusPlateImg from '@/assets/hummus-plate.jpg';


const images = [
  { image: tofuBowlImg, alt: 'Colorful tofu veggie bowl' },
  { image: veggieBurgerImg, alt: 'Vegan burger with fresh veggies' },
  { image: buddhaBowlImg, alt: 'Buddha bowl full of greens' },
  { image: greenPastaImg, alt: 'Pasta with creamy spinach sauce' },
  { image: quinoaSaladImg, alt: 'Quinoa salad with roasted veggies' },
  { image: smoothieImg, alt: 'Green smoothie with spinach and kiwi' },
  { image: hummusPlateImg, alt: 'Hummus with pita and fresh vegetables' },
];


export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
