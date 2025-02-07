import Card from "./Card.jsx";
import List from "./List.jsx"

function App() {

  const waitingList = [{studentId: 8374, name: "Edward Alvarez", major: "PoliSci", gradYr: 2024, isLEAD: true},
                        {studentId: 3846, name: "John Santos", major: "Comms", gradYr: 2027, isLEAD: false},
                        {studentId: 3762, name: "Max Holloway", major: "ComSci", gradYr: 2025, isLEAD: true},
                        {studentId: 4728, name: "Emilio Anderson", major: "BioE", gradYr: 2025, isLEAD: false}]
  return(
    <>
      <h2 className="title">Class Roster </h2>
      <Card name="Rigo Garcia" major="Compuer Science" bio=" student at Santa Clara University!" gradYr={2026} isLEAD={true}/>
      <Card name= "Steven Chang" major="Computer Engineering" bio=" student at Santa Clara University" gradYr={2025}/>
      <Card />
      <h2 className="title">Waitlist</h2>
      <List students={waitingList}/>
      </>
  );
}

export default App

//could add a waiitng list 
//style it and add interation to it like add to class or add to waiting list