import React from 'react';

const ArtistComparisonResult = ({ artist, onBackClick }) => {
  return (
    <>
      <p>Results for {artist.artistName}</p>
      <div className="box has-text-centered">
        <p className="heading">Danceability</p>
        <p className="title">{artist.danceability}</p>
      </div>
      <div className="box has-text-centered">
        <p className="heading">Energy</p>
        <p className="title">{artist.energy}</p>
      </div>
      <div className="box has-text-centered">
        <p className="heading">Loudness</p>
        <p className="title">{artist.loudness}</p>
      </div>
      <div className="box has-text-centered">
        <p className="heading">Acousticness</p>
        <p className="title">{artist.acousticness}</p>
      </div>
      <div className="box has-text-centered">
        <p className="heading">Instrumentalness</p>
        <p className="title">{artist.instrumentalness}</p>
      </div>
      <div className="box has-text-centered">
        <p className="heading">Speechiness</p>
        <p className="title">{artist.speechiness}</p>
      </div>
      <div className="box has-text-centered">
        <p className="heading">Valence</p>
        <p className="title">{artist.valence}</p>
      </div>
      <div className="box has-text-centered">
        <p className="heading">Liveness</p>
        <p className="title">{artist.liveness}</p>
      </div>
      <div className="box has-text-centered">
        <p className="heading">Tempo</p>
        <p className="title">{artist.tempo}</p>
      </div>
      <button className="button" onClick={() => onBackClick()}>
        Clear Artist
      </button>
    </>
  );
};

export default ArtistComparisonResult;
