interface ComponentProps {
  title: string;
  link: string;
  logo: string;
  subText: string;
}

function Footer({ title, link, logo, subText }: ComponentProps) {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 px-4 py-2">
              <a href={link} className="flex items-center">
                <img src={logo} className="h-8 me-3" alt="Study Regents Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  {title}
                </span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-sm text-gray-500 dark:text-gray-400 font-medium">
              {subText}
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
