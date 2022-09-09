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

const story = [
  {
    title: 'Kenalan',
    year: '2012',
    description:
      'Sebelumnya, kami pernah satu sekolah di SMPN 4 KDI. Namun memulai masa pendekatan di tahun 2012 saat kami SMA',
    image: '/images/story1.jpg',
  },
  {
    title: 'Relationship',
    year: '06 Maret 2019',
    description:
      'Pisah 7 tahun dan mendewasakan diri masing2, kami pun komitmen dan kembali menjalin hubungan di tahun 2019. Lika-liku dalam berproses di lalui bersama hingga LDR selama kurang lebih 2 tahun.',
    image: '/images/story2.jpeg',
  },
  {
    title: 'Purpose',
    year: '22 Juli 2022',
    description:
      'Tepat di tanggal 22/07/22 kami menggelar acara lamaran resmi. Mengungkapkan niat baik hingga proses akad, hal tersebut disaksikan dua keluarga besar dan kerabat dekat.',
    image: '/images/story3.jpeg',
  },
];

const Section6 = () => {
  return (
    <section className="bg-[#cdb4db] px-6 mt-8 py-8 text-purple-900 relative overflow-hidden z-20">
      <div className="text-center" data-aos="fade-down">
        <Text className="text-2xl ">Our Story</Text>
      </div>
      <div className="text-center mt-8 relative z-10 -mx-6" data-aos="fade-up">
        <Carousel>
          {story.map((s, i) => (
            <div key={String(i)} className={'pl-4 py-1 ' + (i === story.length - 1 ? 'pr-4' : '')}>
              <Card {...s} />
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

export default Section6;
