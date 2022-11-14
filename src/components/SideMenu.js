import { CountryCard } from './CountryCard';
//import countries from '../countries.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

export function SideMenu() {
  const [featching, setFeaching] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setCountries(response.data);
      setFeaching(false);
    });
  }, []);

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {featching && <p>Loading...</p>}
      <div className="list-group">
        {countries
          .sort((a, b) => {
            const countryA = a.name.common.toLowerCase();
            const countryB = b.name.common.toLowerCase();
            return countryA.localeCompare(countryB);
          })
          .map((country) => {
            return (
              <CountryCard
                key={country.alpha3Code}
                countryName={country.name.common}
                countryCode={country.alpha3Code}
                countryFlagCode={country.alpha2Code}
              />
            );
          })}
      </div>
    </div>
  );
}
