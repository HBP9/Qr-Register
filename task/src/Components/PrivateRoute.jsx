import { Navigate } from 'react-router-dom';
import Cookies from "js-cookie";


function PrivateRoute({ children }) {
    
    
    if (!Cookies.get("jwt")) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/"  />
    }
    
    // authorized so return child components
    return children;
}
export { PrivateRoute };