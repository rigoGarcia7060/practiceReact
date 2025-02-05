import profilePic from './assets/tempPFP.png';

function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="random pfp"></img>
            <h2 className="card-title">Rigo Garcia</h2>
            <p>Hi! I am a 3rd year Computer Science student at
                Santa Clara University!
            </p>

        </div>
    );
}

export default Card