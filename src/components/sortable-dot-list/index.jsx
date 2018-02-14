import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SortableList from './sortable-list';


const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding-left: 10px;
`;

class SortableDotList extends React.Component {
  static propTypes = {
    dots: PropTypes.array,
    onAdd: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
  }

  static defaultProps = {
    dots: [],
  }

  state = {
    addDotInputText: '',
  }

  addDot = () => {
    this.props.onAdd(this.state.addDotInputText);
    this.setState({
      addDotInputText: '',
    });
  }

  onDotInputTextChange = (e) => {
    const { value } = e.target;
    this.setState({
      addDotInputText: value,
    });
  }

  render() {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        this.addDot(e);
      }
    }

    return (
      <div>
        <Input
          type="text"
          onKeyPress={handleKeyPress}
          value={this.state.addDotInputText}
          onChange={this.onDotInputTextChange}
          placeholder="Новая точка маршрута"
        />
        <SortableList
          items={this.props.dots}
          onDelete={this.props.onDelete}
          onSort={this.props.onSort}
        />
      </div>
    );
  }
}

export default SortableDotList;
