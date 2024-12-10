import downloadPic from './assets/download.jpg'

function Card(){
    return(
        <div className="card">
            {/* <img src="" alt="" /> */}
            <img className="card-image"  src={downloadPic} alt="profile picture"></img>
            <h2 className="card-title">Anas</h2>
            <p className='card-text'>fullstak developer orange </p>
        </div>
    );


}

export default Card