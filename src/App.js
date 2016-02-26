import React from "react"
import LikedPhotos from "./LikedPhotos.js"

export default React.createClass({
  getInitialState() {
    let accessTokenFromParams
    let params = location.hash.split("=")
    if (params.length == 2) {
      accessTokenFromParams = params[1]
    }
    return { accessToken: accessTokenFromParams || "" }
  },

  getAccessTokenRequestURL() {
    return "https://api.instagram.com/oauth/authorize/?client_id=c561970727954f3eb7c21451b99d0933&redirect_uri=http://localhost:3000/&response_type=token&scope=public_content"
  },

  isAuthenticated() {
    return this.state.accessToken !== ""
  },

  render() {
    return (
      <div>
        <div>
          <label>Access Token: </label>
          <input
            onChange={this.handleTokenChange}
            type="text"
            value={this.state.accessToken}
          />
        </div>
        <a href={this.getAccessTokenRequestURL()}>Get Access Token</a>
        {this.isAuthenticated() ? this.renderLikedPhotos() : this.renderUnauthenticated() }
      </div>
    )
  },

  renderLikedPhotos() {
    return (
      <LikedPhotos
        accessToken={this.state.accessToken}
      />
    )
  },

  renderUnauthenticated() {
    return (
      <h4>Access Token Needed</h4>
    )
  },

  handleTokenChange(ev) {
    this.setState({ accessToken: ev.target.value })
  },
})
