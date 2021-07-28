import { useEffect, useState } from "react";
import React from "react";

const useGeolocation = () => {
  const [state, setState] = useState({
    latitude: null,
    longitude: null,
    timestamp: Date.now(),
    speed: null
  });
  let mounted = true;
  let watchId;

  const onEvent = (event) => {
    if (mounted) {
      setState({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        timestamp: event.timestamp,
        speed: event.coords.speed
      });
    }
  };
  const onError = (error) => {
    setState(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent, onError);
    watchId = navigator.geolocation.watchPosition(onEvent, onError);

    return () => {
      mounted = false;
      navigator.geolocation.clearWatch(watchId);
    };
  }, [0]);
  return state;
};

const App = () => {
  const { latitude, longitude, speed } = useGeolocation();
  return (
    <>
      <h1>UseGeolocation</h1>
      <p>{`Latitude: ${latitude}`}</p>
      <p>{`Longitude: ${longitude}`}</p>
      <p>{`GeolocationError: ${speed}`}</p>
    </>
  );
};

export default App;
