import React from 'react';
import styled from 'styled-components';

import Map from 'src/components/map';
import SortableDotList from 'src/components/sortable-dot-list';


class RouteEditor extends React.Component {
  state = {
    dots: [],
  }

  onAdd = (text) => {
    this.setState(prevState => ({
      dots: [].concat(prevState.dots, { text }),
    }));
  }

  onDelete = (index) => {
    const dots = this.state.dots;
    if (index > -1) {
      dots.splice(index, 1);
    }
    this.setState({ dots });
  }

  onSort = (items) => {
    this.setState({
      dots: items,
    });
  }

  onMapChange = (dots) => {
    this.setState({ dots });
  }

  render() {
    const ListWrapper = styled.div`
      width: 240px;
      min-width: 240px;
    `;

    // map displays incorrect with styled-components
    const wrapperStyles = {
      maxWidth: '1200px',
      margin: 'auto',
      display: 'flex',
      flexFlow: 'row nowrap',
      marginTop: '100px',
    };

    // map displays incorrect with styled-components
    const mapWrapperStyles = {
      width: '960px',
      paddingLeft: '20px',
    };

    return (
      <div style={wrapperStyles}>
        <ListWrapper>
          <SortableDotList
            onAdd={this.onAdd}
            onDelete={this.onDelete}
            onSort={this.onSort}
            dots={this.state.dots}
          />
        </ListWrapper>
        <div style={mapWrapperStyles}>
          <Map
            dots={this.state.dots}
            onChange={this.onMapChange}
          />
        </div>
      </div>
    );
  }
}

export default RouteEditor;
