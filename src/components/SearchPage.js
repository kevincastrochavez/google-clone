import React from "react";
import { useStateValue } from "../StateProvider";
// import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //   const { data } = useGoogleSearch(term);
  const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </Link>

        <div className="searchPage__body">
          <Search hideButtons={true} />

          <div className="searchPage__options">
            <div className="searchPage__options-left">
              <div className="searchPage__options-left-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage__options-left-option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage__options-left-option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>

              <div className="searchPage__options-left-option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>

              <div className="searchPage__options-left-option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>

              <div className="searchPage__options-left-option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage__options-right"></div>
          </div>
        </div>
      </div>

      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
