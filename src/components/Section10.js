import React, { useEffect, useState } from 'react';
import Shape1 from './Shape1';
import Text from './Text';

const Section10 = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [is_attend, setIsAttended] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [messageList, setMessageList] = useState([]);

  const fetchMessage = async () => {
    const response = await fetch('/api/get-message', {
      method: 'GET',
    });

    const json = await response.json();

    setMessageList(json?.response?.data || []);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!submitting) {
      setSubmitting(true);
      const data = { name, message, is_attend };

      await fetch('/api/send-message', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      await fetchMessage();
      setSuccess(true);
      setSubmitting(false);
    }
  };

  const disabled = !name.trim() || !message.trim() || is_attend === null;

  useEffect(() => {
    fetchMessage();
  }, []);

  useEffect(() => {
    if (success) {
      setTimeout(() => setSuccess(false), 5000);
    }
  }, [success]);

  return (
    <section className="bg-purple-50 px-6 py-8 text-purple-900 relative overflow-hidden z-20 ">
      <div className="text-center">
        <Text className="text-2xl ">Kartu Ucapan</Text>
      </div>
      <div className="text-center mt-8 relative z-10">
        <div className="bg-white rounded-lg p-4">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col text-left text-xs">
              <label htmlFor="name">Nama</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="rounded md appearance-none border border-[#e8dbf1] mt-2"
              />
            </div>
            <div className="flex flex-col text-left text-xs mt-4">
              <label htmlFor="name">Pesan Singkat</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id="message"
                className="rounded md appearance-none border border-[#e8dbf1] mt-2"
              />
            </div>

            <div className="text-left mt-4">
              <span htmlFor="is_attend" className="text-xs text-left mt-4">
                Kehadiran
              </span>

              <div className="flex items-center space-x-4">
                <div className="flex text-left items-center text-xs mt-2 space-x-2">
                  <input
                    onChange={(e) => setIsAttended(e.target.checked)}
                    type="radio"
                    name="is_attend"
                    id="is_attend_1"
                    className="rounded md appearance-none border border-[#e8dbf1] "
                  />
                  <label htmlFor="is_attend_1">Hadir</label>
                </div>

                <div className="flex text-left items-center text-xs mt-2 space-x-2">
                  <input
                    onChange={(e) => setIsAttended(!e.target.checked)}
                    type="radio"
                    name="is_attend"
                    id="is_attend_2"
                    className="rounded md appearance-none border border-[#e8dbf1]"
                  />
                  <label htmlFor="is_attend_2">Tidak Hadir</label>
                </div>
              </div>
            </div>

            <div className="px-12 mt-4 flex flex-col justify-center relative z-10">
              <button
                disabled={disabled || submitting}
                type="submit"
                className={
                  'bg-[#b692ca] rounded-full text-sm px-4 py-2 text-white mx-auto mt-4 hover:scale-95 duration-100 ' +
                  (disabled ? 'grayscale opacity-90' : '')
                }
              >
                {submitting ? 'Sedang Mengirim' : 'Kirim Ucapan'}
              </button>
            </div>

            {success && (
              <div className="mt-4 text-sm text-green-600">
                <p>Berhasil Kirim Ucapan !!</p>
              </div>
            )}
          </form>
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

export default Section10;
