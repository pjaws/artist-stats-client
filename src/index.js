import React, { useState } from "react";
import ReactDOM from "react-dom";
import SingleArtistSearch from "./SingleArtistSearch";
import CompareArtists from "./CompareArtists";

import "bulma/css/bulma.css";
import "./styles.css";

const App = () => {
  const [showSingle, setShowSingle] = useState(true);
  return (
    <div className="App">
      {showSingle && (
        <div>
          <SingleArtistSearch />
          <button className="button" onClick={() => setShowSingle(false)}>
            Want to compare artists instead?
          </button>
        </div>
      )}
      {!showSingle && (
        <div>
          <CompareArtists searchedArtist={{}} />
          <button
            className="button is-info"
            onClick={() => setShowSingle(true)}
          >
            Back to Search
          </button>
        </div>
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
