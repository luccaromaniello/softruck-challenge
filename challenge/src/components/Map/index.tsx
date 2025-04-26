"use client";
import { useEffect, useRef, useState } from "react";

type Coordinates = { latitude: number; longitude: number; direction: number };

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

function linearInterpolation(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Coordinates[]>([]);

  useEffect(() => {
    const fetchPositions = async () => {
      const res = await fetch("/frontend_data_gps.json");
      const data = await res.json();
      setPositions(data.courses[0].gps);
    };

    fetchPositions();
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
        disableDefaultUI: true,
        gestureHandling: "none",
        zoomControl: false,
      });

      const marker = new AdvancedMarkerElement({
        map,
        position: initialPosition,
        content: createMarker(),
        title: "Marker",
      });

      const animateMarkerSmooth = () => {
        let index = 1;

        const animateSegment = () => {
          if (index >= positions.length) return;

          const from = positions[index - 1];
          const to = positions[index];
          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTime;
            const t = Math.min(elapsed / 1000, 1);

            const currentLat = linearInterpolation(
              from.latitude,
              to.latitude,
              t,
            );
            const currentLng = linearInterpolation(
              from.longitude,
              to.longitude,
              t,
            );
            const currentBearing = linearInterpolation(
              from.direction,
              to.direction,
              t,
            );

            const position = { lat: currentLat, lng: currentLng };
            marker.position = position;
            map.setCenter(position);

            const rotation = marker.content as HTMLElement;
            rotation.style.transform = `rotate(${currentBearing}deg)`;

            if (t < 1) {
              requestAnimationFrame(step);
            } else {
              index++;
              animateSegment();
            }
          };

          requestAnimationFrame(step);
        };

        animateSegment();
      };

      animateMarkerSmooth();
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
