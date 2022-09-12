import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';

const src = '/song.mp3';

const useAudio = (url) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (audio) {
      playing ? audio.play() : audio.pause();
    }
  }, [playing, audio, url]);

  useEffect(() => {
    setAudio(new Audio(url));
  }, [url]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', () => setPlaying(false));
    }
    return () => {
      if (audio) {
        audio.removeEventListener('ended', () => setPlaying(false));
      }
    };
  }, [audio, url, playing]);

  return [playing, toggle];
};

const Layout = ({ children }) => {
  const [playing, toggle] = useAudio(src);

  useEffect(() => {
    Aos.init({
      delay: 200,
      duration: 800,
    });

    // audio.play();
  }, []);

  return (
    <div className="max-w-lg mx-auto relative pb-28 bg-purple-50">
      {children}

      <div className="sticky bottom-[100px] right-0 z-40 p-4 float-right">
        <button className="rounded-full h-8 w-8 bg-purple-700 flex items-center justify-center">
          {playing ? (
            <SpeakerXMarkIcon className="h-4 w-4 text-purple-50" onClick={toggle} />
          ) : (
            <SpeakerWaveIcon className="h-4 w-4 text-purple-50" onClick={toggle} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Layout;
