import React, { useState } from "react";

const ArtistForm = ({ onFormSubmit, setArtistData }) => {
  const [artist, setArtist] = useState("");

  async function getArtistData(artist) {
    try {
      const response = await fetch("/artists?q=" + artist);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const artistStats = await response.json();

      return artistStats;
    } catch (error) {
      throw error;
    }
  }

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const artistData = await getArtistData(artist);
      setArtistData(artistData);
      onFormSubmit();
    } catch (error) {
      console.log(error);
    }
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
