import React from 'react';
import { Link } from "react-router";
import WeUI from 'react-weui';
import PngChecklistNormal from '../assets/imgs/home_normal.png';
import PngChecklistSelected from '../assets/imgs/home_selected.png';
import PngFriendsNormal from '../assets/imgs/category_normal.png';
import PngFriendsSelected from '../assets/imgs/category_selected.png';
import PngGroupsNormal from '../assets/imgs/service_normal.png';
import PngGroupsSelected from '../assets/imgs/service_selected.png';
import PngMineNormal from '../assets/imgs/mine_normal.png';
import PngMineSelected from '../assets/imgs/mine_selected.png';

const {Tab, TabBody, TabBar, TabBarItem, TabBarIcon, TabBarLabel} = WeUI;

export default class TabPartial extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: 0
    }
  }
  render() {
    return (
      <Tab>
        <TabBody>
          { this.props.children }
        </TabBody>
        <TabBar>
          <TabBarItem active={this.state.tab == 0} onClick={e=>this.setState({tab:0})}>
            <Link to="checklist">
              <TabBarIcon>
                {this.state.tab == 0? (<img src={PngChecklistSelected}/>): (<img src={PngChecklistNormal}/>)}
              </TabBarIcon>
              <TabBarLabel>事项</TabBarLabel>
            </Link>
          </TabBarItem>
          <TabBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>
            <Link to="friends">
              <TabBarIcon>
                {this.state.tab == 1? (<img src={PngFriendsSelected}/>): (<img src={PngFriendsNormal}/>)}
              </TabBarIcon>
              <TabBarLabel>朋友</TabBarLabel>
            </Link>
          </TabBarItem>
          <TabBarItem active={this.state.tab == 2} onClick={e=>this.setState({tab:2})}>
            <Link to="groups">
              <TabBarIcon>
                {this.state.tab == 2? (<img src={PngGroupsSelected}/>): (<img src={PngGroupsNormal}/>)}
              </TabBarIcon>
              <TabBarLabel>分组</TabBarLabel>
            </Link>
          </TabBarItem>
          <TabBarItem active={this.state.tab == 3} onClick={e=>this.setState({tab:3})}>
            <Link to="mine">
              <TabBarIcon>
                {this.state.tab == 3? (<img src={PngMineSelected}/>): (<img src={PngMineNormal}/>)}
              </TabBarIcon>
              <TabBarLabel>我的</TabBarLabel>
            </Link>
          </TabBarItem>
        </TabBar>
      </Tab>
    );
  }
}