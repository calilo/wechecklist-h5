import React from 'react';
import { Link } from "react-router";
import WeUI from 'react-weui';
import consts from '../../constants.jsx';
import AdvImg from '../tools/AdvImg.jsx';
import DefaultUser from '../../assets/imgs/default_user.png';
import moment from 'moment-timezone';

const {Cells, CellsTitle, Cell, CellHeader, CellBody, CellFooter, MediaBox, MediaBoxDescription, MediaBoxInfo, MediaBoxInfoMeta} = WeUI;

export default class ChecklistItem extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    }
  }
  static propTypes = {
    headUrl: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    author: React.PropTypes.string,
    publishTime: React.PropTypes.string,
    id: React.PropTypes.number
  }
  onCellClick() {
    this.setState({expanded: !this.state.expanded});
  }
  render() {
    return (
      <div className="checklist-group">
        <Cell access={true} link={true} onClick={this.onCellClick.bind(this)}>
          <CellHeader>
            <AdvImg src={this.props.headUrl} defaultSrc={DefaultUser} className="cell-header-img"></AdvImg>
          </CellHeader>
          <CellBody>{this.props.title}</CellBody>
          <CellFooter>{this.state.expanded?'缩起':'展开'}</CellFooter>
        </Cell>
        <MediaBox style={{display: this.state.expanded? 'block': 'none'}} type="text">
          <MediaBoxDescription>{this.props.description}</MediaBoxDescription>
          <MediaBoxInfo>
            <MediaBoxInfoMeta>
              <span>From: </span>
              <span>{this.props.author}</span>
            </MediaBoxInfoMeta>
            <MediaBoxInfoMeta>
              {moment(this.props.publishTime).format('YYYY-MM-DD')}
            </MediaBoxInfoMeta>
            <MediaBoxInfoMeta extra={true}>
              <Link to={'checkItem/'+this.props.id}>
                进入事项
              </Link>
            </MediaBoxInfoMeta>
          </MediaBoxInfo>
        </MediaBox>
        {this.props.status == consts.CHECKLIST_STATUS.DONE && (<div className="mask"><div className="mask-img"></div></div>)}
      </div>
    );
  }
}