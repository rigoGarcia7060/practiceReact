import Card from "./Card.jsx";

function App() {
  return(
    <>
      <Card name="Rigo Garcia" bio="Computer Science Student at Santa Clara University!" gradYr={2026} isLEAD={true}/>
      <Card name= "Steven Chang" bio="Computer Engineering Student at Santa Clara University" gradYr={2025}/>
      <Card />
    </>
  );
}

export default App
