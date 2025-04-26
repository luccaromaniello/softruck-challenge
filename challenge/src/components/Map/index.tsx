"use client";
import { useEffect, useRef } from "react";
const position = { lat: -23.963214, lng: -46.28054 };

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

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
        mapId: "YOUR_MAP_ID", // Optional
      });

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

      new AdvancedMarkerElement({
        map,
        position,
        content: cursorImage,
        title: "Marker",
      });
    };

    if (typeof window !== "undefined") {
      initMap();
    }
  }, []);

  return (
    <>
      <div ref={mapRef} className="map"></div>
    </>
  );
};

export default Map;
