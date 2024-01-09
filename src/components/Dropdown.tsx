interface ComponentProps {
  dropdownName: string;
  options: string[];
  text: string;
}

function Dropdown({ dropdownName, options, text }: ComponentProps) {
  return (
    <>
      <form className="bg-transparent max-w-sm mx-auto">
        <label
          htmlFor={dropdownName}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {text}
        </label>
        <select
          id={dropdownName}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
        >
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </form>
    </>
  );
}

export default Dropdown;
