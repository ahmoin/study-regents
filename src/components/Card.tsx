interface ComponentProps {
  mainText: string;
  subText: string;
  logo: string;
  link: string;
}

function Card({ mainText, subText, logo, link }: ComponentProps) {
  const targetAttribute = link.includes("#") ? {} : { target: "_blank" };
  return (
    <a
      className="py-3 px-5 sm:ms-2 sm:me-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      href={link}
      {...targetAttribute}
    >
      <div className="flex flex-row">
        <p className="px-4 text-2xl">{logo}</p>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {mainText}
        </h5>
      </div>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {subText}
      </p>
    </a>
  );
}

export default Card;
