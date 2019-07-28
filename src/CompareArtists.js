import React, { useState } from "react";
import ArtistSearchBox from "./ArtistSearchBox";
import ArtistComparisonResult from "./ArtistComparisonResult";

const CompareArtists = ({ searchedArtist }) => {
  const [artist1, setArtist1] = useState(null);
  const [artist2, setArtist2] = useState(null);

  if (searchedArtist.name) setArtist1(searchedArtist);

  return (
    <section className="CompareArtists">
      <div className="columns">
        <div className="column">
          {!artist1 && <ArtistSearchBox setArtistData={setArtist1} />}
          {artist1 && <ArtistComparisonResult artist={artist1} />}
        </div>
        <div className="column">
          {!artist2 && <ArtistSearchBox setArtistData={setArtist2} />}
          {artist2 && <ArtistComparisonResult artist={artist2} />}
        </div>
      </div>
    </section>
  );
};

export default CompareArtists;
