import React from 'react';
import WeUI from 'react-weui';
import Infinite from 'react-infinite';
import ChecklistItem from './ChecklistItem.jsx';

const {Cells, CellsTitle, LoadMore} = WeUI;

export default class Checklist extends React.Component {
  static infiniteConfig = {
    elementHeight: 57,
    containerHeight: 57 * 10,
    get infiniteLoadBeginEdgeOffset() {
      return 100;
    }
  }
  handleInfiniteLoad() {
    this.props.onFetchMore(this.props.nextStart);
  }
  render() {
    let loader = <LoadMore loading={true}>Loading</LoadMore>
    return (
      <div>
        <CellsTitle>事项列表：依次检查并完成事项</CellsTitle>
        <Cells>
          <Infinite elementHeight = {Checklist.infiniteConfig.elementHeight}
                    containerHeight = {Checklist.infiniteConfig.containerHeight}
                    infiniteLoadBeginEdgeOffset = {Checklist.infiniteConfig.infiniteLoadBeginEdgeOffset}
                    onInfiniteLoad = {this.handleInfiniteLoad.bind(this)}
                    loadingSpinnerDelegate = {loader}
                    isInfiniteLoading = {this.props.isLoading}
                    >
            {this.props.checklists.map(i=>
              <ChecklistItem headUrl={i.headUrl}
                             title={i.title}
                             author={i.author}
                             description={i.description}
                             id={i.id} key={i.id}
                             publishTime={i.publishTime}
                             status={i.status}></ChecklistItem>
            )}
          </Infinite>
        </Cells>
      </div>
    );
  }
}