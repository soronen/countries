export default function DisplayCountries({ countries }) {


  const languagesToArr = (country) => {
    return Object.keys(countries[0].languages)
  }


  if (countries.length === 1) {
    return (
      <div>
        <h1>{countries[0].name.common} {countries[0].flag}</h1>
        <img src={countries[0].flags.png} alt='Country flag'></img>
        <p>Capital: {countries[0].capital[0]}</p>
        <p>Population: {countries[0].population}</p>
        <h3>Languages: </h3>
        <ul>
          {Object.values(countries[0].languages).map(element => {
            return <li key={element}>{element}</li>
          })}
        </ul>



      </div>
    );

  } else if (countries.length <= 10) {
    return (
      <div>
        <ul>
          {' '}
          Matching countries:
          {countries.map((element) => {
            return <li>{element.name.common}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return <p>Too many mathes, specify another filter</p>;
  }
}
