import React, { Component } from "react";
import { Menu, Icon, Select } from "antd";
import logo from "../../assets/img/logo192.png";
import "./index.css";
import { Translation } from "react-i18next";
import { connect } from "react-redux";
import { TOEN, TOZH } from "../../redux/action";
import { getItem } from "../../utils/localstorage";

const { SubMenu } = Menu;
const { Option } = Select;

class Header extends Component {
  state = {
    current: "home"
  };

  // 点击导航
  handleClick = e => {
    console.log("click ", e);
  };

  // 切换语言
  handleChange = e => {
    if (e === "zh") {
      this.props.TOZH("zh");
    } else if (e === "en") {
      this.props.TOEN("en");
    }
  };

  render() {
    return (
      <div className="header">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          theme="dark"
        >
          <Menu.Item key="logo">
            <img src={logo} alt="" style={{ width: 30 }} />
          </Menu.Item>
          <Menu.Item key="home">
            <Translation>{t => t("首页")}</Translation>
          </Menu.Item>
          <Menu.Item key="Provids">
            <Translation>{t => t("主网启动")}</Translation>
          </Menu.Item>
          <Menu.Item key="Economics">
            <Translation>{t => t("经济与治理")}</Translation>
          </Menu.Item>
          <Menu.Item key="developers">
            <Translation>{t => t("开发者")}</Translation>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="setting" />
                <Translation>{t => t("工具产品")}</Translation>
              </span>
            }
          >
            <Menu.ItemGroup>
              <Menu.Item key="setting:1">
                <Translation>{t => t("浏览器")}</Translation>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <Translation>{t => t("钱包APP")}</Translation>
              </Menu.Item>
              <Menu.Item key="setting:3">
                <Translation>{t => t("Web钱包")}</Translation>
              </Menu.Item>
              <Menu.Item key="setting:4">
                <Translation>{t => t("浏览器插件")}</Translation>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="test">
            <Translation>{t => t("测试网&配置设施")}</Translation>
          </Menu.Item>
          <Menu.Item key="team">
            <Translation>{t => t("关于我们-团队")}</Translation>
          </Menu.Item>
          <Select
            defaultValue={getItem("lang").lang}
            onChange={this.handleChange}
          >
            <Option value="zh">简体中文</Option>
            <Option value="en">English</Option>
          </Select>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    TOEN(lang) {
      dispatch(TOEN(lang));
    },
    TOZH(lang) {
      dispatch(TOZH(lang));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
