import MoreInfo from './MoreInfo';

export default function DisplayCountries({ countries, shown, setShown, allCountries}) {
  const showMore = (index) => {
    const newSetShown = [...shown];
    newSetShown[index] = !shown[index]
    setShown(newSetShown);
  };

  if (countries.length === 1) {
    return <MoreInfo country={countries[0]}></MoreInfo>;
  } else if (countries.length <= 10) {
    return (
      <div>
        <ul>
          {' '}
          Matching countries:
          {countries.map((element, index) => {
            return (
              <li key={index}>
                {element.name.common}{' '}
                <button onClick={() => showMore(allCountries.indexOf(element))}>More info</button>
                <div>
                  {shown[allCountries.indexOf(element)] ? (
                    <MoreInfo country={element}></MoreInfo>
                  ) : null}{' '}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <p>Too many mathes, specify another filter</p>;
  }
}
