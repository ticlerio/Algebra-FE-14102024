import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getNasaData } from './store/redux-store';

function App() {
  const dispatch = useDispatch();
  const nasaData = useSelector((state) => state.nasaData);

  useEffect(() => {
    // getData();
    dispatch(getNasaData());
  }, [dispatch]);

  const renderContent = nasaData.title ? (
    <>
      <h1>NASA Picture of the day</h1>
      <h3>{nasaData.title}</h3>
      <img src={nasaData.url} alt={nasaData.title} width={500} />
      <p>{nasaData.explanation}</p>
    </>
  ) : (
    <p>Loading NASA data...</p>
  );

  return <div className="App">{renderContent}</div>;
}

export default App;
