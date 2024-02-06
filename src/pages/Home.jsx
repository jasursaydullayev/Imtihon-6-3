import { useState } from "react";
import AllCards from "../components/AllCards";
import SearchCountry from "../components/SearchCountry";
import Flitered from '../components/Flitered'
import { useFetch } from "../hook/UseFetch";
function Home() {
  const [url, setUrl] = useState("https://frontend-mentor-apis-6efy.onrender.com/countries")
  const {data, isPending, error} = useFetch(url)
  return (
    <div>
      <div className="flex justify-between flex-wrap">
      <SearchCountry setUrl={setUrl}/>
      <Flitered setUrl={setUrl}/>
      </div>
      <AllCards url={url} />
    </div>
  );
}

export default Home;
