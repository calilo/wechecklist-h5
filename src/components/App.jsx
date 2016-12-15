import React from 'react';
import WeUI from 'react-weui';
import BaseComponent from './BaseComponent.jsx';
import { __extend } from '../utils/json-utils.js';

const {Button, ActionSheet} = WeUI;

class App extends BaseComponent {
  constructor() {
    super();
    this.state = __extend(this.state, {
      show: false,
      menus: [{
        label: '拍照',
        onClick: ()=> {}
      }, {
        label: '从手机相册选择',
        onClick: ()=> {}
      }],
      actions: [
        {
          label: '取消',
          onClick: this.hide.bind(this)
        }
      ]
    });
  }

  hide(){
    this.setState({
      show: false
    })
  }
  render() {
    return (
      <div>
        <div>ActionSheet</div>
        <Button type="default" onClick={e=>this.setState({show: true})}>ActionSheet</Button>
        <ActionSheet
          menus={this.state.menus}
          actions={this.state.actions}
          show={this.state.show}
          type={this.state.platform}
          onRequestClose={e=>this.setState({show: false})}
        />

      </div>
    );
  }
}

export default App;