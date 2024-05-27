import { IoSearch } from "react-icons/io5";

const SearchBox = ({ search, setSearch, bookSearchHandler }) => {
  return (
    <div className="container mx-auto my-9 flex justify-center items-center">
      <input
        type="text"
        placeholder="Search..."
        className="bg-[#6552f4] w-[300px] p-3 rounded-xl outline-none font-medium text-white"
        value={search}
        onChange={(event) => setSearch(event.target.value.toLocaleLowerCase())}
      />
      <button className="ml-4" onClick={bookSearchHandler}>
        <IoSearch fontSize="1.7rem" />
      </button>
    </div>
  );
};

export default SearchBox;
