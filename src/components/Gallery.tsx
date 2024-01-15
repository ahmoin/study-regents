import { useState } from "react";

function Gallery() {
  const [activeItem, setActiveItem] = useState(0);

  const carouselItems = [
    {
      src: "../chemistry-reference-tables/chemistry-reference-tables-2011-1.png",
    },
    {
      src: "../chemistry-reference-tables/chemistry-reference-tables-2011-2.png",
    },
    {
      src: "../chemistry-reference-tables/chemistry-reference-tables-2011-3.png",
    },
    {
      src: "../chemistry-reference-tables/chemistry-reference-tables-2011-4.png",
    },
    {
      src: "../chemistry-reference-tables/chemistry-reference-tables-2011-5.png",
    },
    {
      src: "../chemistry-reference-tables/chemistry-reference-tables-2011-6.png",
    },
    {
      src: "../chemistry-reference-tables/chemistry-reference-tables-2011-7.png",
    },
    {
      src: "../chemistry-reference-tables/chemistry-reference-tables-2011-8.png",
    },
    {
      src: "../chemistry-reference-tables/chemistry-reference-tables-2011-9.png",
    },
    {
      src: "../chemistry-reference-tables/chemistry-reference-tables-2011-10.png",
    },
    {
      src: "../chemistry-reference-tables/chemistry-reference-tables-2011-11.png",
    },
    {
      src: "../chemistry-reference-tables/chemistry-reference-tables-2011-12.png",
    },
  ];

  function nextSlide() {
    setActiveItem((prevItem) =>
      prevItem === carouselItems.length - 1 ? 0 : prevItem + 1
    );
  }

  function prevSlide() {
    setActiveItem((prevItem) =>
      prevItem === 0 ? carouselItems.length - 1 : prevItem - 1
    );
  }
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {" "}
          Chemistry Reference Tables
        </h1>
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative h-screen overflow-auto rounded-lg">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute duration-200 ease-in-out ${
                  index === activeItem ? "opacity-100" : "opacity-0"
                }`}
                data-carousel-item
              >
                <img src={item.src} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={prevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
