import { useState, useEffect } from 'react';

const useInterval = (expired) => {
  const [timeInterval, setTimeInterval] = useState({
    dd: '00',
    hh: '00',
    mm: '00',
    ss: '00',
    isTimeOut: false,
  });

  useEffect(() => {
    const pad = (num) => {
      return num > 9 ? num : '0' + num;
    };

    const makeInterval = setInterval(() => {
      let tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
      let localISOTime = new Date(Date.now()).toISOString().slice(0, -1);
      let now = Date.parse(localISOTime);
      let currentExpired = new Date(expired);
      let diff = currentExpired - now;
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor(diff / (1000 * 60 * 60));
      let mins = Math.floor(diff / (1000 * 60));
      let secs = Math.floor(diff / 1000);
      let dd = days;
      let hh = hours - days * 24;
      let mm = mins - hours * 60;
      let ss = secs - mins * 60;

      if (diff < 0) {
        clearInterval(makeInterval);
        setTimeInterval({
          dd: '00',
          hh: '00',
          mm: '00',
          ss: '00',
          isTimeOut: true,
        });
      } else {
        setTimeInterval({
          dd: pad(dd),
          hh: pad(hh),
          mm: pad(mm),
          ss: pad(ss),
          isTimeOut: false,
        });
      }
    }, 1000);

    return () => clearInterval(makeInterval);
  }, [expired]);

  return timeInterval;
};

export default useInterval;
