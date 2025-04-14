import { useNavigate } from 'react-router-dom';

export default function Komponenta1() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <h2>Welcome to Komponenta 1</h2>
      <p>Ovo je primjer korištenja React Router-a.</p>
      <p>Sad sam na Komponenti 1.</p>
      <button onClick={handleClick}>Home</button>
    </>
  );
}
