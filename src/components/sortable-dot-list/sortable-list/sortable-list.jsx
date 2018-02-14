import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SortableItem from './sortable-item';


class SortableList extends React.Component {
  static propTypes = {
    onSort: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    items: PropTypes.array,
  }

  static defaultProps = {
    items: [],
  }

  onSortItems = (items) => {
    this.props.onSort(items);
  }

  onDeleteItem = (index) => {
    this.props.onDelete(index);
  }

  render() {
    const { items } = this.props;
    let listItems = items.map((item, i) => {
      return (
        <SortableItem
          key={i}
          onSortItems={this.onSortItems}
          items={items}
          sortId={i}
          onDelete={() => this.onDeleteItem(i)}
        >
          {item.text}
        </SortableItem>
      );
    });

    const List = styled.ul`
      list-style-type: none;
      padding: 0;
    `;

    return (
      <List>
        {listItems}
      </List>
    )
  }
};

export default SortableList;
