import React, { Component } from "react";

class ArtistForm extends Component {
  constructor(props) {
    super(props);
    this.state = { artist: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ artist: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.artist);
    this.props.onFormSubmit();
    this.props.setArtistData({ ...this.state });
  }

  render() {
    return (
      <>
        <h1>Get stats on your favorite Spotify artist</h1>
        <form onSubmit={this.handleSubmit} className="artist-search">
          <input
            className="artist-search-input"
            name="artist"
            id="artist"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn">
            Go!
          </button>
        </form>
      </>
    );
  }
}

export default ArtistForm;
