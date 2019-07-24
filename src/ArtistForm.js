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
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Get stats on your favorite Spotify artist</h1>
            <form onSubmit={this.handleSubmit} className="artist-search">
              <div className="field has-addons has-addons-centered">
                <div className="control">
                  <input
                    className="input"
                    name="artist"
                    id="artist"
                    value={this.state.value}
                    onChange={this.handleChange}
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
  }
}

export default ArtistForm;
