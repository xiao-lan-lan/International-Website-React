import React, { Component } from "react";
import { Menu, Icon, Select } from "antd";
import logo from "../../assets/img/logo192.png";

const { SubMenu } = Menu;
const { Option } = Select;

class Header extends Component {
  state = {
    current: "home"
  };

  // 点击导航
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  // 切换语言
  handleChange = e => {
    console.log(e);
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
          <Menu.Item key="home">首页</Menu.Item>
          <Menu.Item key="Provids">主网启动</Menu.Item>
          <Menu.Item key="Economics">经济与治理</Menu.Item>
          <Menu.Item key="developers">开发者</Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="setting" />
                工具产品
              </span>
            }
          >
            <Menu.ItemGroup>
              <Menu.Item key="setting:1">浏览器</Menu.Item>
              <Menu.Item key="setting:2">钱包APP</Menu.Item>
              <Menu.Item key="setting:3">Web钱包</Menu.Item>
              <Menu.Item key="setting:4">浏览器插件</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="test">测试网&配套设施</Menu.Item>
          <Menu.Item key="team">关于我们-团队</Menu.Item>
          <Select
            defaultValue="zh"
            style={{ width: 120 }}
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

export default Header;
