import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hook/UseFetch";
import { IoIosArrowDown } from "react-icons/io";

function Flitered({ setUrl }) {
  const [region, setRegion] = useState();
  const filteredCountries = `https://frontend-mentor-apis-6efy.onrender.com/countries?region=${region}`;

  const handleClick = (e) => {
    setRegion(e.target.textContent);
    setUrl(filteredCountries);
  };
  const handleClickAll = () => {
    setUrl('https://frontend-mentor-apis-6efy.onrender.com/countries')
  }
  return (
    <div>
      <div className="drop dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className=" rounded-lg shadow flex justify-center
        items-center gap-[30px] m-1 min-w-[200px] dark:bg-dark-bg-nav-color dark:text-white h-[58px]"
        >
          Filter by Region <IoIosArrowDown />
        </div>
        <ul className="dropdown-content dark:bg-dark-bg-nav-color  dark:text-white p-2 shadow bg-base-100 rounded-box w-[200px] cursor-pointer menu ">
        <li onClick={handleClickAll}>
            <a>All</a>
          </li>
          <li onClick={handleClick}>
            <a>Africa</a>
          </li>
          <li onClick={handleClick}>
            <a>Americas</a>
          </li>
          <li onClick={handleClick}>
            <a>Asia</a>
          </li>
          <li onClick={handleClick}>
            <a>Europe</a>
          </li>
          <li onClick={handleClick}>
            <a>Oceania</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Flitered;
