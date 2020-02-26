import React, { Component } from "react";
import { Translation } from "react-i18next";

class Home extends Component {
  render() {
    return (
      <div>
        <Translation>{t => <h1>{t("首页")}</h1>}</Translation>
      </div>
    );
  }
}

export default Home;
