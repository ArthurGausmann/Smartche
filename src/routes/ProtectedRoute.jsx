import { Navigate } from "react-router-dom"
import { authService } from "../services/authService"

function ProtectedRoute({ children, role }) {
    const user = authService.getUser()

    if (!user) {
        return <Navigate to="/login" />
    }
    if (role && user.platform_role !== role) {
        return <Navigate to="/dashboard" />
    }

    return children
}

export default ProtectedRoute