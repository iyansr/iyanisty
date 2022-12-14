import React from 'react';
import FacebookIcon from '~icons/FacebookIcon';
import InstagramIcon from '~icons/InstagramIcon';
import YoutubeIcon from '~icons/YoutubeIcon';
import Shape1 from './Shape1';

const linkIyan = [
  {
    url: 'https://www.facebook.com/iyan.scout',
    icon: <FacebookIcon height="18" />,
  },
  {
    url: 'https://www.instagram.com/iyan_saputraaa',
    icon: <InstagramIcon height="18" />,
  },
  {
    url: 'https://www.youtube.com/channel/UCNfB5ywqn0g9QZbdClrBvjQ',
    icon: <YoutubeIcon height="18" />,
  },
];
const linkIsty = [
  {
    url: 'https://www.facebook.com/isty.christyii',
    icon: <FacebookIcon height="18" />,
  },
  {
    url: 'https://www.instagram.com/istyanah',
    icon: <InstagramIcon height="18" />,
  },
  {
    url: 'https://www.youtube.com/channel/UCvPA04F47HKAXhS83hbwjQw',
    icon: <YoutubeIcon height="18" />,
  },
];

const Section3 = () => {
  return (
    <section className="relative z-10" id="pengantin">
      <img
        src="/images/flower.png"
        alt=""
        className="absolute left-0 top-0 h-40 rotate-180 z-[2]"
      />
      <div className="text-center text-fuchsia-900 overflow-hidden z-[1] py-14 pb-36 px-6 bg-[#cdb4db] relative">
        <div className="mt-8" data-aos="zoom-in-up">
          <h3
            className="text-3xl"
            style={{
              fontFamily: 'Hendycroft Signature',
            }}
          >
            Pengantin
          </h3>
          <p className="font-semibold mt-8">{`Assalamu'alaikum Warrahmatullahi Wabarrakatuh`}</p>
          <p className="mt-2 text-sm">
            Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan akad
            pernikahan putra putri kami
          </p>
        </div>

        <div className="relative z-20">
          <div className="text-center mt-8" data-aos="fade-right">
            <img src="/images/iyan.png" alt="Iyan" className="h-40 mx-auto" />
            <p className="font-bold mt-2">Iyan Saputra</p>
            <p className="text-sm">Anak pertama dari Bapak I Made Rai Adnyana</p>
            <p className="text-sm">dan Ibu Sri Mariati</p>

            <div className="flex items-center justify-center space-x-4 mt-4">
              {linkIyan.map((link, index) => (
                <a key={String(index)} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <p
            data-aos="zoom-in"
            style={{
              fontFamily: 'Hendycroft Signature',
            }}
            className="text-5xl my-8"
          >
            {'&'}
          </p>

          <div className="text-center" data-aos="fade-left">
            <img src="/images/isty.png" alt="Isty" className="h-40 mx-auto" />
            <p className="font-bold mt-2">Istianah Baharuddin, S.Ap</p>
            <p className="text-sm">Anak Ketiga dari Bapak Baharuddin Kasim, SE</p>
            <p className="text-sm">dan Ibu Dra. Nurlela</p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              {linkIsty.map((link, index) => (
                <a key={String(index)} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <img src="/images/flower.png" alt="" className="absolute right-0 bottom-0 h-40 z-10" />

        <Shape1
          className="absolute top-[108px] right-[-105px] rotate-45 -z-10"
          height="300"
          fill="#B692CA"
        />
        <Shape1
          className="absolute bottom-[109px] left-[-105px] rotate-180 -z-10"
          height="300"
          fill="#B692CA"
        />
      </div>

      <div className="relative">
        <svg
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M1440 0v300c-151.036-6.536-302.071-13.071-413-10-110.929 3.071-181.75 15.75-297 23s-274.929 9.071-404 6c-129.071-3.071-227.536-11.036-326-19V0Z"
            fill="#cdb4db"
            fillOpacity={0.4}
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          />
          <path
            d="M1440 0v200c-146.643 12.964-293.286 25.929-412 15-118.714-10.929-209.5-45.75-303-49s-189.714 25.071-311 36c-121.286 10.929-267.643 4.464-414-2V0Z"
            fill="#cdb4db"
            fillOpacity={0.53}
            className="transition-all duration-300 ease-in-out delay-150 path-1"
          />
          <path
            d="M1440 0v100c-112.071 11-224.143 22-355 15S804.5 83 675 79 436.143 92 327 99s-218.071 4-327 1V0Z"
            fill="#cdb4db"
            className="transition-all duration-300 ease-in-out delay-150 path-2"
          />
        </svg>
      </div>
    </section>
  );
};

export default Section3;
