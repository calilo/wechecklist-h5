import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class MyPreviewItem extends React.Component {
  static propTypes = {
    label: PropTypes.string
  }
  static defaultProps = {
    label: false
  }
  render() {
    const { className, label, ...others } = this.props;
    const cls = classNames({
      'weui-form-preview__item': true,
      [className]: className
    });

    return (
      <div className={cls} {...others}>
        <label className="weui-form-preview__label">{label}</label>
        <em className="weui-form-preview__value">{this.props.children}</em>
      </div>
    )
  }
}