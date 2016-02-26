import React from "react"

export default React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string,
  },

  render() {
    return (
      <div>
        <img src={this.props.url}></img>
        {this.props.caption && <span>this.props.caption</span>}
      </div>
    )
  },
})
