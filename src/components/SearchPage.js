import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
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
  const { data } = useGoogleSearch(term);

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
                <SearchIcon className="item-icon" />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage__options-left-option">
                <DescriptionIcon className="item-icon" />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage__options-left-option">
                <ImageIcon className="item-icon" />
                <Link to="/images">Images</Link>
              </div>

              <div className="searchPage__options-left-option">
                <LocalOfferIcon className="item-icon" />
                <Link to="/shopping">Shopping</Link>
              </div>

              <div className="searchPage__options-left-option">
                <RoomIcon className="item-icon" />
                <Link to="/maps">Maps</Link>
              </div>

              <div className="searchPage__options-left-option">
                <MoreVertIcon className="item-icon" />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage__options-right">
              <div className="searchPage__options-right-option">
                <Link to="/settings">Settings</Link>
              </div>

              <div className="searchPage__options-right-option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__results-count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__results-result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && (
                  <img
                    className="searchPage__results-result-image"
                    src={
                      item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src
                    }
                    alt="Custom website image"
                  />
                )}

                {item.displayLink}
              </a>

              <a className="searchPage__results-result-title" href={item.link}>
                <h2>{item.title}</h2>
              </a>

              <p className="searchPage__results-result-snippet">
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
