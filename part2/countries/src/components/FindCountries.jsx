export default function FindCountries({filter, onChange}) {

  return (
    <div> Find countries: 
      <input
        type="text"
        value={filter}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}