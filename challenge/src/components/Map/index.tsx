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
  const [positions, setPositions] = useState<
    { latitude: number; longitude: number }[]
  >([]);

  useEffect(() => {
    const fetchPosition = async () => {
      const res = await fetch("/frontend_data_gps.json");
      const data = await res.json();
      setPositions(data.courses[0].gps);
    };

    fetchPosition();
  }, []);

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current || positions.length === 0) return;

      const { Map } = (await google.maps.importLibrary(
        "maps",
      )) as google.maps.MapsLibrary;

      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker",
      )) as google.maps.MarkerLibrary;

      const initialPosition = {
        lat: positions[0].latitude,
        lng: positions[0].longitude,
      };

      const map = new Map(mapRef.current, {
        center: initialPosition,
        zoom: 17,
        mapId: "SOFTRUCK_MAP",
      });

      const marker = new AdvancedMarkerElement({
        map,
        position: initialPosition,
        content: createMarker(),
        title: "Marker",
      });

      let index = 1;
      const interval = setInterval(() => {
        if (index >= positions.length) {
          index = 0;
          return;
        }

        const nextPosition = {
          lat: positions[index].latitude,
          lng: positions[index].longitude,
        };

        marker.position = nextPosition;
        map.setCenter(nextPosition);

        index++;
      }, 1000);

      return () => clearInterval(interval);
    };

    if (typeof window !== "undefined") {
      initMap();
    }
  }, [positions]);

  return (
    <>
      <div ref={mapRef} className="map"></div>
    </>
  );
};

export default Map;
