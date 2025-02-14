import profilePic from './assets/tempPFP.png';
import PropTypes from 'prop-types';

function Card(props){
    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="random pfp"></img>
            <h3 className="card-title">{props.name}</h3>
            <p>{props.major}{props.bio}</p>
            <p>Graduation Year: {props.gradYr}, Lead Scholar: {props.isLEAD ? "Yes" : "No"}</p>
            <button className="remove-btn" onClick={() => props.removeFromRoster(props)}>Remove</button>
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
    bio: "Undeclared major student at Santa Clara University",
    gradYr: -1,
    isLEAD: false,
}

export default Card
