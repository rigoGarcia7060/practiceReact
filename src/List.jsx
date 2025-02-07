import PropTypes from "prop-types";

function List(props){

    //.map() creates a new array with transformed elements
    const formattedList = props.students.map(
        student => <li className="waitingCell" key={student.studentId}>
                           {student.name} |
                           {student.major} |
                           {student.gradYr} |
                           {student.isLEAD ? "LEAD": ""}</li>); 
    return(<>
           <ul>{formattedList}</ul>
           </>);
}

List.propTypes = {
    name: PropTypes.string,
    major: PropTypes.string,
    gradYr: PropTypes.number,
    isLEAD: PropTypes.bool,
}

export default List
