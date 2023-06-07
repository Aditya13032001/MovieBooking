import { useState, useContext } from "react";

// Context
import ShowsContext from "../context/shows/showsContext";


// Components


const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const showsContext = useContext(ShowsContext);
  const { searchShows } = showsContext;



  const onSearchHandler = (e) => {
    e.preventDefault();

    if (searchTerm === "") {
      e.preventDefault();
    } else {
      searchShows(searchTerm);
    }
  };

  return (
    <div className="searchbar">
      
      <form className="searchbar__form">
        <input
          type="text"
          placeholder="Search For Tv Show"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-block" onClick={onSearchHandler}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
