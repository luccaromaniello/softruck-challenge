import Instructions from "@/components/Instructions";
import "../styles/main.scss";
import Card from "@/components/Card";
import AnimatedMap from "@/components/AnimatedMap";

export default function Home() {
  return (
    <Card>
      <main className="container">
        <Instructions />
        <AnimatedMap />
      </main>
    </Card>
  );
}
