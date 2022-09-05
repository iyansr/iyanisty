import React from 'react';

const Section1 = () => {
  return (
    <div className="relative min-h-screen">
      <div className="bg-stone-700 overflow-hidden">
        <div className="absolute z-10 top-0 left-0 bottom-0 right-0 flex justify-center ">
          <div className="pt-12 text-stone-700">
            <img src="/images/logo.png" alt="Logo" className="mx-auto h-12" />
            <p
              className="text-4xl mt-20"
              style={{
                fontFamily: 'Hendycroft Signature',
              }}
            >
              Me and you, Just us Two.
            </p>
            <p className="text-right text-xs">02.10.2022</p>
          </div>
        </div>
        <img src="/images/cover/1.jpg" alt="" className="opacity-70 min-h-screen object-cover" />
      </div>
    </div>
  );
};

export default Section1;
