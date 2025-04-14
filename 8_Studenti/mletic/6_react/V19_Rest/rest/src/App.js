import { useEffect, useState } from 'react';
import './App.css';

const NASA_API_KEY = '523p5hPYHGzafYGLCkqa54kKMTV2vbP0XcPxkcLm';

function App() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
    );
    const responseData = await response.json();
    setData(responseData);
    console.log(responseData);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderContent = data ? (
    <>
      <h1>NASA Picture of the day</h1>
      <h3>{data.title}</h3>
      <img src={data.url} alt={data.title} width={500} />
      <p>{data.explanation}</p>
    </>
  ) : (
    <p>Loading NASA data...</p>
  );

  // if (!data) {
  //   //ovo je bitno za renderiranje jsx koda ispod - inace ne ucitava (null)
  //   return (
  //     <div className="App">
  //       <h1>NASA Picture of the day</h1>
  //       <p>Loading NASA data...</p>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      {/* <h1>NASA Picture of the day</h1>
      <h3>{data.title}</h3>
      <img src={data.url} alt={data.title} width={500} />
      <p>{data.explanation}</p> */}
      {renderContent}
    </div>
  );
}

export default App;
