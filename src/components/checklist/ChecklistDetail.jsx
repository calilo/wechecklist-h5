import React from 'react';
import WeUI from 'react-weui';
import { Link } from "react-router";
import AdvImg from '../tools/AdvImg.jsx';
import MyPreviewItem from '../tools/MyPreviewItem.jsx';
import DefaultUser from '../../assets/imgs/default_user.png';

const { Preview, PreviewHeader, PreviewFooter, PreviewBody, PreviewItem, PreviewButton } = WeUI;

export default class ChecklistDetail extends React.Component {
  static propTypes = {
    id: React.PropTypes.number,
    author: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    pictures: React.PropTypes.arrayOf(React.PropTypes.string)
  }
  finish() {
    this.props.finishItem(this.props.id);
  }
  render() {
    return (
      <Preview>
        <PreviewHeader>
          <PreviewItem label="发起人" value={this.props.author}></PreviewItem>
        </PreviewHeader>
        <PreviewBody>
          <PreviewItem label="标题" value={this.props.title}></PreviewItem>
          <PreviewItem label="描述" value={this.props.description}></PreviewItem>
          <MyPreviewItem label="照片">
            {this.props.pictures.map((p, i) => <AdvImg src={p} defaultSrc={DefaultUser} className="checklist-detail-img" key={i} ></AdvImg>)}
          </MyPreviewItem>
        </PreviewBody>
        <PreviewFooter>
          <PreviewButton primary onClick={this.finish.bind(this)}>完成</PreviewButton>
          <PreviewButton onClick={this.props.goBack}>返回</PreviewButton>
        </PreviewFooter>
      </Preview>
    );
  }
}