function ProfilePicture(){


    const  imageUrl = './src/assets/download.jpg';

    // const handleClick = () => console.log("ouch!")
    const handleClick = (e) => e.target.style.display ="none";

    return( <img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
    // return( <img onClick={handleClick} src={imageUrl}></img>);
}

export default ProfilePicture