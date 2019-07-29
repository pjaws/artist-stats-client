import React, { useState } from 'react';
import ArtistForm from './ArtistForm';
import ArtistResults from './ArtistResults';

const SingleArtistSearch = () => {
  const [artistData, setArtistData] = useState(null);

  return (
    <>
      {!artistData && (
        <ArtistForm setArtistData={data => setArtistData(data)} />
      )}
      {artistData && (
        <ArtistResults
          artistData={artistData}
          onBackClick={() => setArtistData(null)}
        />
      )}
    </>
  );
};

export default SingleArtistSearch;
