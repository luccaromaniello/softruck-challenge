import Instructions from "@/components/Instructions";
import Card from "@/components/Card";
import AnimatedMap from "@/components/AnimatedMap";

export default function Home() {
  return (
    <main className="container">
      <Card>
        <div className="card-container">
          <div className="instructions-container">
            <Instructions />
          </div>
          <div className="map-container">
            <AnimatedMap />
          </div>
        </div>
      </Card>
    </main>
  );
}
