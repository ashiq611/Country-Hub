import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {

    const id = useParams();

    const [country, setCountry] = useState([])

    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/alpha/${id.id}`)
        .then((response) => response.json())
        .then((data) => setCountry(data));
    }, []);

    

    return (
      <div>
        <div className="main container mx-auto">
          <div className="card mt-5 mb-5 p-10 border-2 border-red-600 flex gap-5 w-[800px] mx-auto">
            <div className="left">
              <img
                src={country.at(0)?.flags.png}
                alt={country.at(0)?.name.common}
              />
            </div>
            <div className="right">
              <h2>{country.at(0)?.name.common}</h2>
              <h3>Region : {country.at(0)?.region}</h3>
              <p>Population : {country.at(0)?.population}</p>
              <p>Capital : {country.at(0)?.capital.at(0)}</p>
            </div>
          </div>
          {/* <div className="map">
            <iframe
              src={country.at(0)?.maps.googleMaps}
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div> */}
        </div>
      </div>
    );
};

export default Details;