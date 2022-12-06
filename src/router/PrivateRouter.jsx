import React from "react";
import { Navigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useAuthContext } from "../contexts/AuthProvider";

const PrivateRouter = () => {
  const { currentUser } = useAuthContext();
  console.log(currentUser);

  return (
    <div>
      {currentUser?.email ? <Outlet /> : <Navigate to="/login" replace />}
      {currentUser?.email ? "" : toast.error("Please login to see details!")}
    </div>
  );
};

export default PrivateRouter;
