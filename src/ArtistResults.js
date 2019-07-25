import React from "react";

const ArtistResults = ({ artistData, onBackClick }) => {
  console.log("artistData:");
  console.log(artistData);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-1">Stats for {artistData.artistName}</h1>
        <div className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Danceability</p>
              <p className="title">{artistData.danceability}</p>
            </div>
            <div>
              <p className="heading">Energy</p>
              <p className="title">{artistData.energy}</p>
            </div>
            <div>
              <p className="heading">Loudness</p>
              <p className="title">{artistData.loudness}</p>
            </div>
          </div>
        </div>
        <button className="button" onClick={onBackClick}>
          Back to Search
        </button>
      </div>
    </section>
  );
};

export default ArtistResults;
