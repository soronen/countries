


export default function Phonebook({ persons, filter }) {

    if (filter === '') {
        return (
            <div>
                <h2>Numbers</h2>
                <ul>
                    {persons.map(person => <li key={person.name}>{person.name} - {person.number}</li>)}
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Numbers</h2>
                <ul>
                    {persons.map(person => {
                        if (person.name.toLowerCase().includes(filter.toLowerCase())) {
                            return <li key={person.name}>{person.name} - {person.number}</li>
                        }
                    })}
                </ul>
            </div>
        )
    }
}
