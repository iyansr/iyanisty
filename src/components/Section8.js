import Image from 'next/future/image';
import React from 'react';
import Carousel from './Carousel';
import Shape1 from './Shape1';
import Text from './Text';

const Card = ({ description, title, year, image }) => {
  return (
    <div className="bg-purple-50 rounded-md shadow-md overflow-hidden p-2 min-h-[335px]">
      <div className="flex items-center justify-center space-x-2 py-2">
        <Text>{title}</Text>
        <span>|</span>
        <span className="text-sm font-medium">{year}</span>
      </div>
      <Image src={image} className="object-cover aspect-video" width={640} height={480} />

      <div className="mt-4">
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

const images = [
  {
    url: '/images/gallery/1.jpg',
  },
  {
    url: '/images/gallery/p1.jpg',
  },
  {
    url: '/images/gallery/2.jpg',
  },
  {
    url: '/images/gallery/p2.jpg',
  },
  {
    url: '/images/gallery/3.jpg',
  },
  {
    url: '/images/gallery/p3.jpg',
  },
  {
    url: '/images/gallery/4.jpg',
  },
  {
    url: '/images/gallery/p4.jpg',
  },
  {
    url: '/images/gallery/5.jpg',
  },
  {
    url: '/images/gallery/p5.jpg',
  },
  {
    url: '/images/gallery/6.jpg',
  },
  {
    url: '/images/gallery/p6.jpg',
  },
  {
    url: '/images/gallery/14.jpg',
  },
  {
    url: '/images/gallery/p7.jpg',
  },
  {
    url: '/images/gallery/8.jpg',
  },
  {
    url: '/images/gallery/p8.jpg',
  },
  {
    url: '/images/gallery/9.jpg',
  },
  {
    url: '/images/gallery/11.jpg',
  },
  {
    url: '/images/gallery/11.jpg',
  },
  {
    url: '/images/gallery/12.jpg',
  },
  {
    url: '/images/gallery/13.jpg',
  },
];

const potraits = images.filter((f) => f.url.replace('.jpg', '').includes('p'));
const landscape = images.filter((f) => !f.url.replace('.jpg', '').includes('p'));

const Section8 = () => {
  return (
    <section className="bg-[#cdb4db] px-6 mt-8 py-8 text-purple-900 relative overflow-hidden z-20">
      <div className="text-center">
        <Text className="text-2xl ">Gallery</Text>
      </div>
      <div className="text-center mt-10 relative z-10 -mx-6">
        <Carousel slidesToScroll={2} slidesToShow={2.4} autoplay>
          {landscape.map((s, i) => (
            <div key={String(i)} className="flex items-center h-full">
              <Image
                src={s.url}
                className="object-cover h-full aspect-video"
                width={426}
                height={240}
                quality={70}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="text-center -mt-2  relative z-10 -mx-6">
        <Carousel slidesToScroll={3} slidesToShow={3.4} autoplay>
          {potraits.map((s, i) => (
            <div key={String(i)} className="flex items-center h-full">
              <Image
                src={s.url}
                className="object-cover h-full aspect-[9/16]"
                height={426}
                width={240}
                quality={70}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <Shape1
        className="absolute top-[1px] right-[-105px] rotate-45 z-[0]"
        height="300"
        fill="#e8dbf1"
      />
      <Shape1 className="absolute bottom-[-112px] left-[-89px] z-[0]" height="300" fill="#e8dbf1" />
    </section>
  );
};

export default Section8;
