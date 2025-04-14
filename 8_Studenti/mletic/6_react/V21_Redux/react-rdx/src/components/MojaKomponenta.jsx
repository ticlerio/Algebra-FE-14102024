import { useSelector } from 'react-redux';

export default function MojaKomponenta() {
  const brojac = useSelector((skladiste) => skladiste.counter);
  return (
    <>
      <h2>Moja komponenta</h2>
      <p>I moja Komponenta koristi Redux store: {brojac}</p>
    </>
  );
}
