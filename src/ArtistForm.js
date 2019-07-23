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
      <div className="ArtistForm">
        <h1>Get stats on your favorite Spotify artist</h1>
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group">
            <label htmlFor="artist" className="sr-only">
              Artist
            </label>
            <input
              className="form-control"
              name="artist"
              id="artist"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Go!
          </button>
        </form>
      </div>
    );
  }
}

export default ArtistForm;
