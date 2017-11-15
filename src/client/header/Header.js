import React from "react";
import AppState from "./AppState";
import {connect} from "react-redux";

class Header extends React.Component {

  render() {
    const {header} = this.props;

    return (
	<div>
	  <span>Status:</span>
	  <AppState appState={header.appState}/>
	</div>
    )
  }
}

export default connect(
    state => ({ // These are passed into props of connected component
      header: state.headerReducer.model
    }),
    {}
)(Header)
