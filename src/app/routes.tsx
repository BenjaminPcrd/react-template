import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Page1 } from "@/pages";
import { useAuthContext } from "@/data/authentication";

export const AppRoutes = () => {
  const { user } = useAuthContext();

  if (user)
    return (
      <Routes>
        <Route index path="/page1" element={<Page1 />} />
        <Route path="*" element={<Navigate to="/page1" />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
