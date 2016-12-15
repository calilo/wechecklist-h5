import React from 'react';

export default class BaseComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
    switch (document.getElementById('app').dataset.platform) {
      case 'android':
        this.state.platform = 'android';
        break;
      case 'iphone':
      case 'ipad':
        this.state.platform = 'ios';
        break;
      default:
        this.state.platform = ''; //depends on weui auto-detect
    }
  }
}