import { Routes, Route } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import SignIn from "./SignIn";
import Register from "./Register";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;

