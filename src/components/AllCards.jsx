import { Link } from "react-router-dom";
import { useFetch } from "../hook/UseFetch";
import Loader from './Loader'
function AllCards({ url }) {
  const { data, error, isPending } = useFetch(url);
  console.log(data);
  if (isPending) {
    return <Loader />
  } else {
    return (
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(264px,auto))] gap-[44px]">
        {data &&
          data.data.map((data) => {
            const { flags, name, population, region, capital } = data;
            return (
              <Link
                to={`/country/${name.slug}`}
                key={name.slug}
                className="min-w-[264px] rounded-lg dark:bg-dark-bg-nav-color dark:text-white  h-[366px] w-full bg-base-100 shadow-2xl mb-[10px]"
              >
                <figure>
                  <img
                    className="rounded-t-lg h-[160px] w-full"
                    src={flags.png}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body text-[rgba(17, 21, 23, 1)]">
                  <h2 className="font-[800] text-lg">{name.common}</h2>
                  <p className="text-sm font-[300]">
                    <span className="text-base font-semibold ">
                      Population:
                    </span>{" "}
                    {population.toLocaleString("en-US")}
                  </p>
                  <p className="text-sm font-[300]">
                    <span className="text-base font-semibold ">Region:</span>{" "}
                    {region}
                  </p>
                  <p className="text-sm font-[300]">
                    <span className="text-base font-semibold ">Capital:</span>{" "}
                    {capital[0]}
                  </p>
                </div>
              </Link>
            );
          })}
      </ul>
    );
  }
}

export default AllCards;
