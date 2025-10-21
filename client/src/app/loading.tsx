import BackgroundPattern from "@/components/ui/common/BackgroundPattern";
import Image from "next/image";

export default function Loading() {
  return (
    <BackgroundPattern className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/images/synaptica_logo.png"
          alt="Syneptica logo"
          width={400}
          height={120}
          priority
          className="w-[220px] sm:w-[280px] lg:w-[360px] h-auto"
        />
        <div className="h-1 w-40 sm:w-56 lg:w-64 overflow-hidden rounded bg-white/10">
          <div className="h-full w-1/3 animate-pulse bg-white/70" />
        </div>
      </div>
    </BackgroundPattern>
  );
}
