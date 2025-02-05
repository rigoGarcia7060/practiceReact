import profilePic from './assets/tempPFP.png';
import PropTypes from 'prop-types';

function Card(props){
    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="random pfp"></img>
            <h2 className="card-title">Name: {props.name}</h2>
            <p>{props.bio}</p>
            <p>Graduation Year: {props.gradYr}, Lead Scholar: {props.isLEAD ? "Yes" : "No"}</p>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    gradYr: PropTypes.number,
    isLEAD: PropTypes.bool,
}

Card.defaultProps = {
    name: "John Smith",
    bio: "Student at Santa Clara University",
    gradYr: -1,
    isLEAD: false,
}

export default Card
