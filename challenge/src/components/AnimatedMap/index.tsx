"use client";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import "./AnimatedMap.module.scss";
import Map from "@/components/Map";

const AnimatedMap = () => {
  const render = (status: Status) => <h1>{status}</h1>;
  return (
    <Wrapper apiKey={"AIzaSyCA833WUXV5XXBvwjY3TglOcvkXmpAdbOg"} render={render}>
      <Map />
    </Wrapper>
  );
};

export default AnimatedMap;
