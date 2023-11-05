import { GoogleLogout } from "react-google-login";

const clientId = "722907825614-e1es5ea1tkg1fdmv2es1pk5btfat84k5.apps.googleusercontent.com";

function Logout(){
    
    const onSuccess = (res) => {
        console.log("Logout successful!");
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Lougout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;