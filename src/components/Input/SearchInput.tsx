const SearchInput = () => {
  return (
    <div className="bg-white p-4 rounded-md -mt-8 flex flex-row items-center shadow-soft text-dark-brown-200">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" className="outline-none w-full ms-2" placeholder="Search for Coffee" />
    </div>
  )
}

export default SearchInput