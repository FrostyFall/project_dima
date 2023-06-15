import { Navigate, Outlet } from "react-router-dom";

interface Props {
  redirectPath?: string;
  role: string;
}

export default function ProtectedRoute({ redirectPath = "/", role }: Props) {
  // Replace isAllowed with user in global state
  const user: any = null;
  // const user = { id: 1, roles: ["user", "admin"] };

  if (user == null || !user.roles.includes(role)) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
