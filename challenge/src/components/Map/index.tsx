"use client";
import { useEffect, useRef } from "react";
const position = { lat: -23.963214, lng: -46.28054 };

const Map = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      // ✅ Import base maps library
      const { Map } = (await google.maps.importLibrary(
        "maps",
      )) as google.maps.MapsLibrary;

      // ✅ Import advanced marker library
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker",
      )) as google.maps.MarkerLibrary;

      if (!ref.current) return;

      const map = new Map(ref.current, {
        center: position,
        zoom: 15,
        mapId: "YOUR_MAP_ID", // Optional
      });

      new AdvancedMarkerElement({
        map,
        position,
        title: "React + TypeScript + Google Maps",
      });
    };

    if (typeof window !== "undefined") {
      initMap();
    }
  }, []);

  return (
    <>
      <div
        ref={ref}
        style={{ height: "100%", width: "700px", minHeight: "700px" }}
      ></div>
    </>
  );
};

export default Map;
