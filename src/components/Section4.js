import React from 'react';
import Graphic1 from '~icons/Graphic1';
import Text from './Text';

const Time = ({ count, unit }) => {
  return (
    <div className="text-center mt-10 text-[#b692ca]">
      <p className="font-semibold text-2xl text-purple-900">{count}</p>
      <p className="text-sm">{unit}</p>
    </div>
  );
};

const Section4 = () => {
  return (
    <section className="relative bg-purple-50 -mt-20 px-6">
      <div className="pt-24 bg-purple-50">
        <h3 className="text-center font-semibold text-2xl text-purple-900">02 Oktober 2022</h3>

        <div className="flex w-full justify-center mt-12">
          <img src="/images/save-date.png" alt="Save The Date" className="h-28" />
        </div>

        <div className="flex items-center justify-center space-x-8">
          <Time count={'05'} unit="Hari" />
          <Time count={'01'} unit="Jam" />
          <Time count={'05'} unit="Menit" />
          <Time count={'50'} unit="Detik" />
        </div>

        <div className="flex justify-center mt-20">
          <Graphic1 />
        </div>

        <div className="text-sm text-[#b692ca] text-center">
          <p className="mt-8">
            Kehadiran serta doa restu Bapak/Ibu/Saudara/i merupakan suatu kebahagiaan dan kehormatan
            bagi kami.
          </p>
          <p className="font-semibold text-purple-900 mt-2">{`Wassalamu'alaikum Warrahmatullahi Wabarrakatuh`}</p>
        </div>

        <div className="text-center font-semibold text-[#b692ca] mt-16">
          <p>Minggu</p>
          <div className="flex justify-center items-center space-x-2 mt-2">
            <p className="font-bold text-5xl">02</p>
            <div className="text-left">
              <p>Oktober</p>
              <p>2022</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-purple-900">
          <Text className="text-2xl ">Akad Nikah</Text>
          <div className="mt-4 text-lg">
            <p>09.00 - 11.00 WITA</p>
            <p>Hotel Azizah Syariah Kendari</p>
          </div>
        </div>
        <div className="mt-8 text-center text-purple-900">
          <Text className="text-2xl ">Resepsi</Text>
          <div className="mt-4 text-lg">
            <p>19.30 WITA - Selesai</p>
            <p>Hotel Azizah Syariah Kendari</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
