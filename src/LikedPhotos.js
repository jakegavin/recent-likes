import React from "react"
import $ from "jquery"
import LikedPhoto from "./LikedPhoto.js"

export default React.createClass({
  propTypes: {
    accessToken: React.PropTypes.string.isRequired,
  },

  getInitialState() {
    return { loading: true }
  },

  componentDidMount() {
    let likedURL = `https://api.instagram.com/v1/users/self/media/liked?access_token=${this.props.accessToken}`
    this.initialRequest = $.get({
      url: likedURL,
      dataType: "jsonp",
      success: (response) => {
        this.setState({
          loading: false,
          photos: response.data.map((image) => ({
            id: image.id,
            caption: image.caption,
            url: image.images.standard_resolution.url,
          })),
        })
      },
    })
  },

  render() {
    return (
      <div>
        <h2>Recently Liked Photos</h2>
        {this.state.loading ? <h4>Loading...</h4> : this.renderPhotos()}
      </div>
    )
  },

  renderPhotos() {
    return this.state.photos.map((photo) => (
      <LikedPhoto
        key={photo.id}
        url={photo.url}
        caption={photo.caption}
      />
    ))
  },
})
