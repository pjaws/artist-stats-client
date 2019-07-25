import React, { useState } from "react";

async function getArtistStats(artist) {
  const response = await fetch("/artists?q=" + artist);
  const artistStats = await response.json();

  return artistStats;
}

const ArtistForm = ({ onFormSubmit, setArtistData }) => {
  const [artist, setArtist] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    getArtistStats(artist).then(artistData => {
      setArtistData(artistData);
      onFormSubmit();
    });
  };

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Get stats on your favorite Spotify artist</h1>
          <form onSubmit={handleSubmit} className="artist-search">
            <div className="field has-addons has-addons-centered">
              <div className="control">
                <input
                  className="input"
                  name="artist"
                  id="artist"
                  value={artist}
                  onChange={e => setArtist(e.target.value)}
                />
              </div>
              <div className="control">
                <button type="submit" className="button is-primary">
                  Go!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ArtistForm;
