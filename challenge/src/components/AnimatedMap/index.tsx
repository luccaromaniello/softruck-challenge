"use client";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import Map from "@/components/Map";

const AnimatedMap = () => {
  const render = (status: Status) => <h1>{status}</h1>;
  return (
    <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY} render={render}>
      <Map />
    </Wrapper>
  );
};

export default AnimatedMap;
