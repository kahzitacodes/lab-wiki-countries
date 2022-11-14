import { Link } from 'react-router-dom';

export function CountryCard(props) {
  const { countryCode, countryFlagCode, countryName } = props;
  return (
    <Link
      style={{ padding: '.75rem 1.25rem' }}
      className="list-group-item list-group-item-action"
      to={`/${countryCode}`}
    >
      <img
        style={{ width: 15, marginRight: 5 }}
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryFlagCode.toLowerCase()}.png`}
        alt={countryName}
      />
      {countryName}
    </Link>
  );
}
