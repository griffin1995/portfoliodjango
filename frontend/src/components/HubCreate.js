import React, { Component } from "react";
import HubJoin from "./HubJoin";
import HubCreate from "./HubCreate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class HubCreate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<p>This is the HubCreate page</p>} />

          <Route path="/join" element={<HubJoin />} />

          <Route path="/create" element={<HubCreate />} />
        </Routes>
      </Router>
    );
  }
}
