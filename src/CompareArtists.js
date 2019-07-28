import React, { useState } from "react";
import ArtistSearchBox from "./ArtistSearchBox";
import ArtistComparisonResult from "./ArtistComparisonResult";

const CompareArtists = ({ searchedArtist }) => {
  const [artist1, setArtist1] = useState(null);
  const [artist2, setArtist2] = useState(null);

  // if they came from the single artist search results page, auto-set artist 1
  if (searchedArtist.name) setArtist1(searchedArtist);

  return (
    <section className="section">
      <div className="columns">
        <div className="column">
          {!artist1 && <ArtistSearchBox setArtistData={setArtist1} />}
          {artist1 && (
            <ArtistComparisonResult
              artist={artist1}
              onBackClick={() => setArtist1(null)}
            />
          )}
        </div>
        <div className="column">
          {!artist2 && <ArtistSearchBox setArtistData={setArtist2} />}
          {artist2 && (
            <ArtistComparisonResult
              artist={artist2}
              onBackClick={() => setArtist2(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CompareArtists;
