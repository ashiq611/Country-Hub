import { useEffect, useState } from "react";
import SingleCountry from "../components/SingleCountry";


const Countries = () => {

    const [countrys, setCountry] = useState([])



    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
          .then((response) => response.json())
          .then((data) => setCountry(data));
    }, [countrys])
    return (
      <div className="container mx-auto">
        <h1 className="p-4 bg-black text-white inline-block m-5">
          countries {countrys.length}
        </h1>

        <div className="flex justify-between flex-wrap gap-4">
          {countrys.map((c) => (
            // console.log(c);

            <SingleCountry key={c.ccn3} country={c} />
          ))}
        </div>
      </div>
    );
};

export default Countries;