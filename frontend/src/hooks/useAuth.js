import { useContext } from "react";
import { AuthContext } from "../contexts/JWTContext";
// import { AuthContext } from "../contexts/FirebaseContext";
// import { AuthContext } from '../contexts/AwsCognitoContext';
// import { AuthContext } from "../contexts/Auth0Context";

// ----------------------------------------------------------------------

// console.log("useAuth.js", AuthContext.Provider);

const useAuth = () => useContext(AuthContext);

export default useAuth;
