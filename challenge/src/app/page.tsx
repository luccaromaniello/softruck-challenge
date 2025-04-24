import Instructions from "@/components/Instructions";
import "../styles/main.scss";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <main className="container">
        <Card>
          <Instructions />
          {/* <AnimatedMap /> */}
        </Card>
      </main>
    </div>
  );
}
