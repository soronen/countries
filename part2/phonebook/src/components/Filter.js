

export default function Filter({ filter, setFilter }) {
    return (
        <div>
            <form>
                Filter names:
                <input value={filter} onChange={(event) => setFilter(event.target.value)}></input>
            </form>
        </div>
    )
}