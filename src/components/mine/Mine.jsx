import React from 'react';
import WeUI from 'react-weui';
import AdvImg from '../tools/AdvImg.jsx';
import DefaultUser from '../../assets/imgs/default_user.png';
import PngMineNormal from '../../assets/imgs/mine_normal.png';

const {Panel, PanelHeader, PanelBody, MediaBox, MediaBoxHeader, MediaBoxBody, MediaBoxTitle, MediaBoxDescription} = WeUI;

export default class Mine extends React.Component {
  static propTypes = {
    userId: React.PropTypes.number,
    headUrl: React.PropTypes.string,
    name: React.PropTypes.string,
    friendCount: React.PropTypes.number
  }
  render() {
    return (
      <div>
        <Panel>
          <MediaBox type="appmsg" href="javascript:void(0);">
            <MediaBoxHeader>
              <AdvImg src={this.props.headUrl} defaultSrc={DefaultUser} className="mine-head-image"></AdvImg>
            </MediaBoxHeader>
            <MediaBoxBody>
              <MediaBoxTitle>{this.props.name}</MediaBoxTitle>
              <MediaBoxDescription>普通会员</MediaBoxDescription>
            </MediaBoxBody>
          </MediaBox>
        </Panel>
        <Panel>
          <PanelHeader>
            我的好友
          </PanelHeader>
          <PanelBody>
            <MediaBox type="appmsg" href="javascript:void(0);">
              <MediaBoxHeader>
                <img src={PngMineNormal}  className="cell-header-img"/>
              </MediaBoxHeader>
              <MediaBoxBody>
                <MediaBoxTitle>查找好友</MediaBoxTitle>
                <MediaBoxDescription>{`好友数: ${this.props.friendCount}`}</MediaBoxDescription>
              </MediaBoxBody>
            </MediaBox>
            <MediaBox type="appmsg" href="javascript:void(0);">
              <MediaBoxHeader>
                <img src={PngMineNormal}  className="cell-header-img"/>
              </MediaBoxHeader>
              <MediaBoxBody>
                <MediaBoxTitle>添加好友</MediaBoxTitle>
                <MediaBoxDescription>点击添加好友</MediaBoxDescription>
              </MediaBoxBody>
            </MediaBox>
          </PanelBody>
        </Panel>
      </div>
    )
  }
}