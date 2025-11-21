import VisiKomMap from "../vizikommap";

export default function VisiKomMapPage() {
  const friends = [
    { name: "Demo Friend 1", coords: [50.4501, 30.5234] },
    { name: "Demo Friend 2", coords: [50.454, 30.52] },
  ];

  return (
    <main style={{ padding: 16 }}>
      <h1>VisiCom Map (Demo)</h1>
      <VisiKomMap friends={friends} />
    </main>
  );
}
