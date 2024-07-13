// import { useSelector } from "react-redux";
import useFirebase from "./useFirebase";

const useAuth = () => {
    // const auth = useSelector(state => state.auth)
    // return auth
    const auth = useFirebase();
    return auth;
}

export default useAuth;