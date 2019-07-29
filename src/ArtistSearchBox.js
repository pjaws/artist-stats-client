import React, { useState } from 'react';

const ArtistSearchBox = ({ setArtistData }) => {
  const [artist, setArtist] = useState('');
  const [error, setError] = useState('');

  async function getArtistData(artist) {
    try {
      const response = await fetch(
        `https://r5gg4.sse.codesandbox.io/artists?q=${artist}`,
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const artistStats = await response.json();

      return artistStats;
    } catch (error) {
      throw error;
    }
  }

  const validateForm = input => {
    let error = '';
    if (input === '') {
      error = 'Please enter an artist name.';
    }
    setError(error);
  };

  const handleChange = event => {
    setError('');
    setArtist(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    validateForm(artist);

    if (error.length) return;

    try {
      const artistData = await getArtistData(artist);
      setArtistData(artistData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="artist-search">
      <div className="field has-addons has-addons-centered">
        <div className="control">
          <input
            className="input"
            name="artist"
            id="artist"
            value={artist}
            placeholder="Search for an artist"
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <button type="submit" className="button is-primary">
            Go!
          </button>
        </div>
      </div>
      <small className="has-text-danger">{error}</small>
    </form>
  );
};

export default ArtistSearchBox;
