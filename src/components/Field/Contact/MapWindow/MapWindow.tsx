import * as React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "./MapWindow.less";

const defaultLatLng: LatLngTuple = [48.97638, 14.47353];

export const MapWindow = () => {
  const initMarker = (ref) => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };
  return (
    <div id={"mapCont"} className={"mapCont"}>
      <Map className="map" zoom={16} center={defaultLatLng}>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://api.mapbox.com/styles/v1/thatsalexander666/ckfe4kufc00ig19qdlas12yew/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGhhdHNhbGV4YW5kZXI2NjYiLCJhIjoiY2tuYWFxZGVuMHp1YjJ1bXFmdmd6c3V5byJ9.m50LSLKP1X7RE8tsesg6RQ"
        />
        <Marker position={defaultLatLng} ref={initMarker}>
          <Popup className={"popUp"} open={true}>
            Krajinská 244/17, 370 01 České Budějovice
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};
