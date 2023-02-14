import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";

const MapComponent = ({ lat, lng }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map lat={lat} lng={lng} />;
};

const Map = ({ lat, lng }) => {
  const center = useMemo(() => ({ lat, lng }), []);
  return (
    <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
};

export default MapComponent;
