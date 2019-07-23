import React from "react";

const ArtistResults = ({ artistData, onBackClick }) => {
  return (
    <>
      <h1>{artistData.artist}</h1>
      <button className="btn" onClick={onBackClick}>
        Back to Search
      </button>
    </>
  );
};

export default ArtistResults;
