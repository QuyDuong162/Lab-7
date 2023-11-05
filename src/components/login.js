import { GoogleLogin } from "react-google-login";

const clientId = "722907825614-e1es5ea1tkg1fdmv2es1pk5btfat84k5.apps.googleusercontent.com";

function Login(){

    const onSuccess = (res) => {
        console.log("Login successful! Welcome:", res.profileObj);
    }
    const onFailure = (res) => {
        console.log("Login failed! res:", res);
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;