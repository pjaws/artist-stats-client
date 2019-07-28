import React, { useState } from "react";
import ReactDOM from "react-dom";
import ArtistForm from "./ArtistForm";
import ArtistResults from "./ArtistResults";

import "bulma/css/bulma.css";
import "./styles.css";

const App = () => {
  const [artistData, setArtistData] = useState(null);
  return (
    <div className="App">
      {!artistData && (
        <ArtistForm setArtistData={data => setArtistData(data)} />
      )}
      {artistData && (
        <ArtistResults
          artistData={artistData}
          onBackClick={() => setArtistData(null)}
        />
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
