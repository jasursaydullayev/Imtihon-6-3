import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hook/UseFetch";
import Loader from '../components/Loader'
function Card() {
  const nowPage = useParams();
  const url = `https://frontend-mentor-apis-6efy.onrender.com/countries/${nowPage.id}`;
  const { data, isPending, error } = useFetch(url);
    if(data === null){
      return <Loader />
     } else {
    const {
      borders,
      name,
      region,
      population,
      subregion,
      capital,
      flags,
      currencies,
      languages,
    } = data;
    return (
      <div className="dark:text-white pb-[108px]">
        <Link
          className="pl-[32px] h-[40px] flex gap-[10px] items-center max-w-[136px] rounded shadow text-center font-[300] text-lg dark:text-btn-color-dark dark:border-0  dark:bg-btn-dark"
          to={"/"}
        >
          <MdOutlineKeyboardBackspace /> Back
        </Link>
        <div className="flex justify-start flex-wrap gap-[110px] mt-[80px]">
          <img
            className="w-full shadow max-w-[540px] h-[381px] rounded-xl"
            src={flags.png}
            alt={name.common}
          />
          <div className="mt-[39px] w-full max-w-[598px]">
            <h1 className="mb-[23px] font-[800] text-3xl">{name.common}</h1>
            <div className="flex gap-[101px] mb-[68px]">
              <div className="flex flex-nowrap flex-col gap-2 ">
                <p className="text-sm font-[300]">
                  <span className="text-base font-semibold ">Native Name:</span>{" "}
                  {name.nativeName}
                </p>
                <p className="text-sm font-[300]">
                  <span className="text-base font-semibold ">Population:</span>{" "}
                  {population.toLocaleString('en-US')}
                </p>
                <p className="text-sm font-[300]">
                  <span className="text-base font-semibold ">Region:</span>{" "}
                  {region}
                </p>
                <p className="text-sm font-[300]">
                  <span className="text-base font-semibold ">Sub Region:</span>{" "}
                  {subregion}
                </p>
                <p className="text-sm font-[300]">
                  <span className="text-base font-semibold ">Capital:</span>{" "}
                  {capital[0]}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-[300]">
                  <span className="text-base font-semibold ">Currencies:</span>{" "}
                  {currencies}
                </p>
                <p className="flex items-center flex-wrap gap-2 text-sm font-[300]">
                  <span className="text-base font-semibold ">Languages:</span>{" "}
                  {languages.length <= 3 ? languages.map((language) => (
                    <p key={language}>{language},</p>
                  )) : languages.slice(1, 3).map((language) => (
                    <p key={language}>{language},</p>
                  ))
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-[10px] items-center">
              <h3 className="text-base font-semibold mr-[16px] ">
                Border Countries:{" "}
              </h3>
              {borders.map((border) => (
                <Link
                  className="border dark:text-btn-color-dark dark:border-0  dark:bg-btn-dark px-[14px] py-[3px]"
                  to={`/country/${border.slug}`}  
                  key={border.common}
                >
                  {border.common}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
