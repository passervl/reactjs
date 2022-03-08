export default function Search({ search, setSearch, handleSearch }) {
    return <div>
        {/* Have to add value attribute to the input field to avoid uncontrolled component */}
        <input type="text" name="search" placeholder="What's you're looking for?" value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            onKeyPress={e => { if (e.key === 'Enter') { handleSearch(); } }} />
        <button type="search" onClick={handleSearch}>Search</button>
    </div>;
}
