//import countries from '../countries.json';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries/';

export function CountryPage(props) {
  const [foundCountry, setfoundCountry] = useState(null);
  const { countryCode } = useParams();

  //const params = useParams();
  //console.log(coco);

  // const country = countries.filter(
  //   (current) => current.alpha3Code === params.countryCode
  // )[0];

  useEffect(() => {
    axios
      .get(apiURL + countryCode)
      .then((response) => setfoundCountry(response.data));
  }, [countryCode]);

  return (
    <div className="col-7">
      {!foundCountry && <p>Country not found</p>}
      {foundCountry && (
        <>
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {foundCountry.borders.map((element, i) => {
                      return (
                        <li key={element[i]}>
                          <Link to={`/${element}`}>{element}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
