import Card from "./Card.jsx";
import List from "./List.jsx"
import { useState } from "react";

function App() {

  //const[objectCreated, setterFucntion] = useState(starting state of object)
  const[waitingList, setWaitingList] = useState([
    {studentId: 8374, name: "Edward Alvarez", major: "PoliSci", gradYr: 2024, isLEAD: true},
    {studentId: 3846, name: "John Santos", major: "Comms", gradYr: 2027, isLEAD: false},
    {studentId: 3762, name: "Max Holloway", major: "CompSci", gradYr: 2025, isLEAD: true},
    {studentId: 4728, name: "Emilio Anderson", major: "BioE", gradYr: 2025, isLEAD: false}
  ]);
  const[currRoster, setRoster] = useState([
    {studentId: 3847, name: "Rigo Garcia", major: "CompSci", gradYr: 2026, isLEAD: true},
    {studentId: 3892, name: "Steven Chang", major: "CompE", gradYr: 2027, isLEAD: false},
  ]);

  //adding functionality to the buttons 

  const addToRoster = (student) => {
    //update the waitingList to exclude a student
    setWaitingList(waitingList.filter((s) => s.studentId !== student.studentId));
    //update currRoster to include a student 
    setRoster([...currRoster, student]);
  };
 const removeFromRoster = (student) => {
   setRoster(currRoster.filter((s)=> s.studentId !== student.studentId));
   setWaitingList([...waitingList, student]);
 }
  return(
    <>
      <h2 className="title">Class Roster</h2>  
      <div className="roster">
        {currRoster.map((student)=>(
          <Card key={student.studentId} {...student} removeFromRoster={removeFromRoster}/>
        ))}
      </div>
      <h2 className="waitingCell">Waiting List</h2>
      <List students={waitingList} addToRoster={addToRoster}/>
    </>
  );
}

export default App
