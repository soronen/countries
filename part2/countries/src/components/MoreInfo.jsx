

export default function MoreInfo ({country}) {
    return (
      <div>
        <h1>
          {country.name.common} {country.flag}
        </h1>
        <img src={country.flags.png} alt='Country flag'></img>
        <p>Capital: {country.capital[0]}</p>
        <p>Population: {country.population}</p>
        <h3>Languages: </h3>
        <ul>
          {Object.values(country.languages).map((element) => {
            return <li key={element}>{element}</li>;
          })}
        </ul>
      </div>
    );
  };