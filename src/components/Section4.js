import React from 'react';
import Graphic1 from '~icons/Graphic1';
import Shape1 from './Shape1';
import Text from './Text';

const Section4 = () => {
  return (
    <section className="relative bg-purple-50 -mt-20 px-6 overflow-hidden">
      <div className="pt-24 bg-purple-50">
        <div className="flex justify-center">
          <Graphic1 />
        </div>

        <div className="text-sm text-[#b692ca] text-center relative z-20">
          <p className="mt-8">
            Kehadiran serta doa restu Bapak/Ibu/Saudara/i merupakan suatu kebahagiaan dan kehormatan
            bagi kami.
          </p>
          <p className="font-semibold text-purple-900 mt-2">{`Wassalamu'alaikum Warrahmatullahi Wabarrakatuh`}</p>
        </div>

        <div className="text-center font-semibold text-[#b692ca] mt-8 relative z-10">
          <p>Minggu</p>
          <div className="flex justify-center items-center space-x-2 mt-2">
            <p className="font-bold text-5xl">02</p>
            <div className="text-left">
              <p>Oktober</p>
              <p>2022</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-purple-900 relative z-10">
          <Text className="text-2xl ">Akad Nikah</Text>
          <div className="mt-4 text-lg">
            <p>09.00 - 11.00 WITA</p>
            <p>Hotel Azizah Syariah Kendari</p>
          </div>
        </div>
        <div className="mt-8 text-center text-purple-900 relative z-10">
          <Text className="text-2xl ">Resepsi</Text>
          <div className="mt-4 text-lg">
            <p>19.30 WITA - Selesai</p>
            <p>Hotel Azizah Syariah Kendari</p>
          </div>
        </div>
      </div>

      <Shape1
        className="absolute top-[108px] right-[-105px] rotate-45 z-[0]"
        height="300"
        fill="#e8dbf1"
      />
      <Shape1
        className="absolute bottom-[109px] left-[-105px] rotate-180 z-0"
        height="300"
        fill="#e8dbf1"
      />
    </section>
  );
};

export default Section4;
