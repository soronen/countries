export default function PersonForm({newName, setNewName, newNumber, setNewNumber, addPerson}) {

    
    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={((event) => setNewName(event.target.value))} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}