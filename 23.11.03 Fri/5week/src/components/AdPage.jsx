import React from "react";
import Ad from "./Ad";

class AdPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAd: true };
    this.handleToggledClick = this.handleToggledClick.bind(this);
  }

  handleToggledClick() {
    this.setState((state) => ({
      showAd: !state.showAd,
    }));
  }
  render() {
    return (
      <div>
        <Ad showAd={this.state.showAd} />
        <button onClick={this.handleToggledClick}>
          {this.state.showAd ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default AdPage;
