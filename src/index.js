import React, { useState } from "react";
import ReactDOM from "react-dom";
import ArtistForm from "./ArtistForm";
import ArtistResults from "./ArtistResults";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [showArtistForm, setShowArtistForm] = useState(true);
  const [artistData, setArtistData] = useState();
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
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
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
