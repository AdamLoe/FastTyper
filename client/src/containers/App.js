import React from "react";
import { connect } from "react-redux";
import PT from "prop-types";

import Menu from "./Menu/Menu";
import Game from "./Game/Game";
import Popups from "./Other/Popups";
import HeaderMenu from "./Menu/HeaderMenu";

import { subscribe } from "../actions/api";

class App extends React.Component {
  componentDidMount() {
    this.props.subscribe();
  }

  render() {
    let { showMenu, showGame } = this.props;
    return (
      <>
        <Popups />
        <HeaderMenu showMenu={showMenu} showGame={showGame} />
        <div className="AppBody">
          {showMenu && <Menu />}
          {showGame && <Game />}
        </div>
      </>
    );
  }
}
App.propTypes = {
  showMenu: PT.bool.isRequired,
  showGame: PT.bool.isRequired,
  subscribe: PT.func.isRequired
};

let mapState = state => {
  let { showMenu, showGame } = state.navigation;
  return {
    showMenu,
    showGame
  };
};

export default connect(
  mapState,
  { subscribe }
)(App);
