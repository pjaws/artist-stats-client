import React from "react";

const ArtistResults = ({ artistData, onBackClick }) => {
  console.log("artistData:");
  console.log(artistData);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-1">Stats for {artistData.artistName}</h1>
        <div className="columns">
          <div className="column has-text-centered">
            <div className="box">
              <p className="heading">Danceability</p>
              <p className="title">{artistData.danceability}</p>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <p className="heading">Energy</p>
              <p className="title">{artistData.energy}</p>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <p className="heading">Loudness</p>
              <p className="title">{artistData.loudness}</p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-centered">
            <div className="box">
              <p className="heading">Acousticness</p>
              <p className="title">{artistData.acousticness}</p>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <p className="heading">Instrumentalness</p>
              <p className="title">{artistData.instrumentalness}</p>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <p className="heading">Speechiness</p>
              <p className="title">{artistData.speechiness}</p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-centered">
            <div className="box">
              <p className="heading">Valence</p>
              <p className="title">{artistData.valence}</p>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <p className="heading">Liveness</p>
              <p className="title">{artistData.instrumentalness}</p>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <p className="heading">Tempo</p>
              <p className="title">{artistData.tempo}</p>
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
