import React from 'react';
import Shape1 from './Shape1';

const Time = ({ count, unit }) => {
  return (
    <div className="text-center mt-10 text-[#b692ca]">
      <p className="font-semibold text-2xl text-purple-900">{count}</p>
      <p className="text-sm">{unit}</p>
    </div>
  );
};

const Section5 = () => {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.0113044317045!2d122.49719391504892!3d-4.018079345839869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d988da8a59f30f1%3A0xde807c63851e67fb!2sHotel%20Azizah!5e0!3m2!1sen!2sid!4v1662400198504!5m2!1sen!2sid`;
  const calendarSrc = `https://calendar.google.com/event?action=TEMPLATE&tmeid=MHYxazNhaHRsMGI1MzNlZWRkZDJvb2YyZWIgaWtoeWFuN0Bt&tmsrc=ikhyan7%40gmail.com`;
  return (
    <section className="bg-purple-50 px-6 text-purple-900 relative">
      <div className="text-center mt-16">
        <p className="text-sm font-semibold">Hotel Azizah Syariah</p>
        <p className="text-sm mt-2">
          Depan RS. Hermina, Jl. DI Panjaitan No.100, Wundudopi, Kec. Baruga, Kota Kendari, Sulawesi
          Tenggara 93117
        </p>
      </div>

      <div className="px-12 mt-4 flex flex-col justify-center relative z-10">
        <div className="border-2 border-[#b692ca] h-64 rounded-xl flex items-center justify-center text-sm overflow-hidden p-3">
          <div className="rounded-xl w-full h-full">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <button
          onClick={() => {
            window?.open(mapSrc, '_blank');
          }}
          className="bg-[#b692ca] text-sm rounded-full px-4 py-2 text-white mx-auto mt-4 hover:scale-95 animate-pulse duration-100"
        >
          Arahkan Maps
        </button>
      </div>

      <h3 className="text-center font-semibold text-2xl text-purple-900 mt-16">02 Oktober 2022</h3>

      <div className="flex w-full justify-center mt-12">
        <img src="/images/save-date.png" alt="Save The Date" className="h-28" />
      </div>

      <div className="flex items-center justify-center space-x-8">
        <Time count={'05'} unit="Hari" />
        <Time count={'01'} unit="Jam" />
        <Time count={'05'} unit="Menit" />
        <Time count={'50'} unit="Detik" />
      </div>

      <div className="px-12 mt-4 flex flex-col justify-center relative z-10">
        <button
          onClick={() => {
            window?.open(calendarSrc, '_blank');
          }}
          className="bg-[#b692ca] rounded-full text-sm px-4 py-2 text-white mx-auto mt-4 hover:scale-95 animate-pulse duration-100"
        >
          Tambah ke Kalender
        </button>
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

export default Section5;
