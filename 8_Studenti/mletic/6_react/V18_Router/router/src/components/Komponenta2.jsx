import { useNavigate } from 'react-router-dom';

export default function Komponenta2() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <h2>Welcome to Komponenta 2</h2>
      <p>Ovo je primjer korištenja React Router-a.</p>
      <p>Sad sam na Komponenti 2.</p>
      <button onClick={handleClick}>Home</button>
    </>
  );
}
