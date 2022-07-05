import { Navigate, useLocation } from "react-router-dom"

const LoggedIn = ({ children, isLoggedIn }) => {
    let location = useLocation();
    return isLoggedIn ? <Navigate to="/" state={{ from: location }} replace /> : children
}

export { LoggedIn }