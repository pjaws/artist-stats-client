import React from 'react';
import ArtistSearchBox from './ArtistSearchBox';

const ArtistForm = ({ setArtistData }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h1 className="title is-1 is-spaced">
                Get stats on your favorite Spotify artist
              </h1>
              <p className="subtitle">
                Is your favorite artist happy or sad? Are they danceable? Get
                these and other stats by searching for an artist below.
              </p>
              <ArtistSearchBox setArtistData={setArtistData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistForm;
