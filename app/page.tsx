import dynamic from "next/dynamic";
export default function Home() {
  const Map = dynamic(() => import("../components/map"), { ssr: false });
  return (
    <>
      <h1>Welcome to your travel wall</h1>
      <Map />
    </>
  );
}
