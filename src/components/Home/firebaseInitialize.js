import firebaseConfig from "./firebase.confiq";
import { initializeApp } from "firebase/app";


const initializedAuthentication = () => {
    const app = initializeApp(firebaseConfig);
}
export default initializedAuthentication