import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Home = () => {
  const data = [
    {
      alt: "image1",
      url: "/images/linux.png"
    },
    {
      alt: "image2",
      url: "/images/img2.png"
    },
  ];

  const [index, setIndex] = useState(0);

  const handleInc = () => {
    setIndex(index === data.length - 1 ? 0 : index + 1);
  }

  const handleDec = () => {
    setIndex(index === 0 ? data.length - 1 : index - 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleInc();
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="relative w-full h-screen bg-blue-500 text-white flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute inset-0">
          {data.map((image, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-500 ${index === i ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <FaChevronLeft className="cursor-pointer text-white text-3xl" onClick={handleDec} />
          <FaChevronRight className="cursor-pointer text-white text-3xl" onClick={handleInc} />
        </div>
      </div>
    </section>
  );
}

export default Home;
