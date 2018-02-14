import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapsLoader from 'google-maps';


const DEFAULT_CENTER = { lat: 55.753, lng: 37.620 };
const API_KEY = 'AIzaSyAdg4K_uyynW1PQV3xF9_ZguJ1MkdV-vrs';


class Map extends React.Component {
  static propTypes = {
    dots: PropTypes.array,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    dots: [],
  }

  state = {
    dots: [],
  }

  markers = []

  componentDidMount() {
    this.init();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dots: nextProps.dots,
    }, () => { this.drawMarkers(); })
  }

  drawMarkers = () => {
    this.markers.map(marker => marker.marker.setMap(null));
    this.markers = [];
    this.markers = this.state.dots.map((dot, index) => {
      // create marker
      const marker = new google.maps.Marker({
        position: dot.position || this.map.getCenter(),
        map: this.map,
        draggable: true,
      });

      // call on change function on marker drag end
      marker.addListener('dragend', (e) => {
        const newDots = this.state.dots;
        newDots[index].position = e.latLng;
        this.props.onChange(newDots);
      });

      // create balloon
      const infowindow = new google.maps.InfoWindow({
        content: dot.text,
      });

      // show balloon on marker click
      marker.addListener('click', () => {
        infowindow.open(this.map, marker);
      });

      return {
        text: dot.text,
        marker,
      };
    });

    if (this.path) {
      this.path.setMap(null);
    }

    // draw path between markers
    if (this.markers.length > 1) {
      const pathCoordinates = this.markers.map(marker => marker.marker.position);

      this.path = new google.maps.Polyline({
        path: pathCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

      this.path.setMap(this.map);
    }
  }

  init = () => {
    GoogleMapsLoader.KEY = API_KEY;
    GoogleMapsLoader.load(google => {
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: DEFAULT_CENTER,
      });
    });
  }

  render() {
    const Map = styled.div`
      height: 400px;
      width: 100%;
    `;

    return (
      <Map id="map" />
    );
  }
}

export default Map;
