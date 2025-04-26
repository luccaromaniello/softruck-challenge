"use client";
import { useEffect, useRef, useState } from "react";

const createMarker = () => {
  const spriteUrl = "/cars.png";
  const frameWidth = 160;
  const frameHeight = 160;

  const frameIndex = 1; // constrols index of frame

  const cursorContainer = document.createElement("div");
  cursorContainer.style.width = "48px";
  cursorContainer.style.height = "48px";

  const cursorImage = document.createElement("div");
  cursorImage.style.width = `${frameWidth}px`;
  cursorImage.style.height = `${frameHeight}px`;
  cursorImage.style.backgroundImage = `url(${spriteUrl})`;
  cursorImage.style.backgroundPosition = `-${frameWidth * frameIndex}px 0`;
  cursorImage.style.backgroundSize = "auto";
  cursorImage.style.transform = "scale(0.3)";
  cursorImage.style.transformOrigin = "top left";

  cursorContainer.append(cursorImage);

  return cursorContainer;
};

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    lat: -19.939477884674428,
    lng: -43.93870853719558,
  });

  useEffect(() => {
    const fetchPosition = async () => {
      const res = await fetch("/frontend_data_gps.json");
      const data = await res.json();
      const { latitude, longitude } = data.courses[0].gps[0];
      setPosition({ lat: latitude, lng: longitude });
    };

    fetchPosition();
  }, []);

  useEffect(() => {
    const initMap = async () => {
      const { Map } = (await google.maps.importLibrary(
        "maps",
      )) as google.maps.MapsLibrary;

      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker",
      )) as google.maps.MarkerLibrary;

      if (!mapRef.current) return;

      const map = new Map(mapRef.current, {
        center: position,
        zoom: 18,
        mapId: "SOFTRUCK_MAP",
      });

      new AdvancedMarkerElement({
        map,
        position,
        content: createMarker(),
        title: "Marker",
      });
    };

    if (typeof window !== "undefined") {
      initMap();
    }
  }, [position]);

  return (
    <>
      <div ref={mapRef} className="map"></div>
    </>
  );
};

export default Map;
