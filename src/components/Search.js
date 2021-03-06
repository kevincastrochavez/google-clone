import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (event) => {
    event.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERMS,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <MicIcon className="search__inputIcon" />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Search for Something
          </Button>
          <Button variant="outlined">I Feel Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button type="submit" onClick={search} variant="outlined">
            Search for Something
          </Button>
          <Button variant="outlined">Look</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
