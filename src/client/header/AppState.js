import React from "react";
import {MOODS} from "./APP_STATE";
import PropTypes from "prop-types";

export default class AppState extends React.Component {

  render() {

    const {appState} = this.props;

    let label = [];

    if (appState.mood === MOODS.GOOD) {
      label = <div className="app-state__text--positive">{appState.text}</div>;
    }
    else if (appState.mood === MOODS.PROCESSING) {
      label = <div className="app-state__loader-wrapper">
        <div className="app-state__loader"/>
        <div className="app-state__text--processing">{appState.text}</div>
      </div>
    }
    else if (appState.mood === MOODS.BAD) {
      label = <div className="app-state__text--negative">{appState.text}</div>
    }
    else if (appState.mood === MOODS.NEUTRAL) {
      label = <div className="app-state__text--normal">{""}</div>
    } else {
      label = <div className="app-state__text--negative">{"Something went wrong"}</div>;
    }
    return (
        <div className="app-state__wrapper">
          {label}
        </div>
    )
  }
}

AppState.propTypes = {
  appState: PropTypes.object.isRequired
};
