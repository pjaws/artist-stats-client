import React, { useState } from "react";
import ReactDOM from "react-dom";
import ArtistForm from "./ArtistForm";
import ArtistResults from "./ArtistResults";

import "normalize.css";
import "./styles.css";

const App = () => {
  const [showArtistForm, setShowArtistForm] = useState(true);
  const [artistData, setArtistData] = useState();
  return (
    <div className="App">
      {showArtistForm && (
        <ArtistForm
          onFormSubmit={() => setShowArtistForm(false)}
          setArtistData={data => setArtistData(data)}
        />
      )}
      {!showArtistForm && (
        <ArtistResults
          artistData={artistData}
          onBackClick={() => setShowArtistForm(true)}
        />
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
