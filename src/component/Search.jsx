const Search=({value,handleFiltered})=><div className="search-container">
  search contact: <input value={value} onChange={handleFiltered} />
</div>

export default Search;