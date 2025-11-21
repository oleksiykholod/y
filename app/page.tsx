'use client'
import dynamic from "next/dynamic";

const VizikomMap = dynamic(() => import("./vizikommap"), { ssr: false });

export default function Home() {
  return <VizikomMap />;
}