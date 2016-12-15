import React from 'react';

export default class AdvImg extends React.Component {
  static propTypes = {
    src: React.PropTypes.string,
    defaultSrc: React.PropTypes.string
  }
  imgOnError() {
    this.refs['my-img'].src = this.props.defaultSrc;
  }
  render() {
    const {defaultSrc, ...others} = this.props;
    return <img onError={this.imgOnError.bind(this)} ref="my-img" { ...others }/>
  }
}
