import React from 'react';

const Section5 = () => {
  return (
    <section className="bg-purple-50 px-6 text-purple-900">
      <div className="text-center mt-24">
        <p className="text-sm font-semibold">Hotel Azizah Syariah</p>
        <p className="text-sm mt-2">
          Depan RS. Hermina, Jl. DI Panjaitan No.100, Wundudopi, Kec. Baruga, Kota Kendari, Sulawesi
          Tenggara 93117
        </p>
      </div>

      <div className="px-12 mt-4 flex flex-col justify-center">
        <div className="border-2 border-[#b692ca] h-64 rounded-xl flex items-center justify-center text-sm">
          <p>Map Goes Here</p>
        </div>

        <button className="bg-[#b692ca] rounded-full px-4 py-2 text-white mx-auto mt-4 hover:scale-95 animate-pulse duration-100">
          Arahkan Maps
        </button>
      </div>
    </section>
  );
};

export default Section5;
