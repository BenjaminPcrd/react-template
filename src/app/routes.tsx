import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Page1, Page2 } from "../page";
import { useAuthContext } from "../data/authentication";
import { Layout } from "../layout";

export const AppRoutes = () => {
  const { user } = useAuthContext();

  if (user)
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" element={<Navigate to="/page1" />} />
        </Route>
      </Routes>
    );

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
