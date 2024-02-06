import { useState } from "react";
import { useFetch } from "../hook/UseFetch";
import Loader from './Loader'
function SearchCountry({setUrl}) {
  const [name, setName] = useState('');
  const searchUrl = `https://frontend-mentor-apis-6efy.onrender.com/countries?search=${name}`;
  const { data, isPending, error } = useFetch(searchUrl);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setUrl(searchUrl);
    <Loader />
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" relative flex items-center dark:text-white gap-4 mb-[48px]"
    >
      <div className="absolute ml-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            className="fill-[#848484] dark:fill-white"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
          ></path>
        </svg>
      </div>
      <input
        onChange={(e) => setName(e.target.value)}
        className="font-medium text-lg w-[480px] pl-[74px] mr-[201px] py-[15px] rounded-md shadow dark:bg-dark-bg-nav-color"
        type="text"
        placeholder="Search for a country…"
      />
    </form>
  );
}

export default SearchCountry;
