import React from "react";

const ArtistComparisonResult = ({ artist, onBackClick }) => {
  return (
    <div>
      Results for {artist.artistName}
      <button className="button" onClick={() => onBackClick()}>
        Clear Artist
      </button>
    </div>
  );
};

export default ArtistComparisonResult;
