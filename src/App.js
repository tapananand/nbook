import React from "react";
import "./customizedBulma.css";
import Topbar from "./Topbar/Topbar";
import Toolbar from "./Toolbar/Toolbar";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Topbar appName={this.props.appName}/>
        <Toolbar />
      </div>
    );
  }
}

export default App;
