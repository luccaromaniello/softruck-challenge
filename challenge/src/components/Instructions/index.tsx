"use client";
import Image from "next/image";

const Instructions = () => {
  return (
    <div>
      <Image
        src="/softruck_logo.png"
        alt="Softruck logo"
        width={56}
        height={56}
        priority
      />
      <p>
        This animation is related to a Softruck coding challenge. You can read
        more about it on the repository instructions.
      </p>
    </div>
  );
};

export default Instructions;
