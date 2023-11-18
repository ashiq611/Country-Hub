
import { Link } from 'react-router-dom';

const SingleCountry = ({country}) => {

    const { name, region, ccn3 } = country;
    return (
      <div>
        <div className="single p-4 border-2 border-red-100 bg-fuchsia-500 w-44 mb-3">
          <h1>{name.common}</h1>
          <p>{region}</p>
          <Link
            to={`/countries/${ccn3}`}
            className="p-2 rounded-lg bg-black text-white inline-block mt-2"
          >
            Details
          </Link>
        </div>
      </div>
    );
};

export default SingleCountry;