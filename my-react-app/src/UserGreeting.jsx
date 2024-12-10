import Proptypes from 'prop-types';

function UserGreeting (props){

    // if(props.isLoggedIn){
    //     return <h2>welcome {props.username}</h2> 
    // }
    // else
    // {
    //     return <h2>pleases lg in to continue</h2>
    // }


    const welcomeMessage = <h2 className="welcome-message">welcome {props.username}</h2> 
    const loginPrompt = <h2 className="login-prompt">pleases log in to continue</h2>

    // return (props.isLoggedIn ? <h2 className="welcome-message">welcome {props.username}</h2> : <h2 className="login-prompt">pleases log in to continue</h2>
    // )
    return (props.isLoggedIn ?  welcomeMessage: loginPrompt
    )


}

UserGreeting.Proptypes ={
    isLoggedIn : Proptypes.bool,
    username : Proptypes.string,
}

UserGreeting.default = {
    isLoggedIn : false,
    username : "Geuest"
}

export default UserGreeting