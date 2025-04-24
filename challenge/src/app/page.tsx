import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Image
          src="/softruck_logo.png"
          alt="Softruck logo"
          width={56}
          height={56}
          priority
        />
        Hello world
      </main>
    </div>
  );
}
