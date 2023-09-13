import { FC, useState } from "react";
import { Route, Routes } from "react-router";
import Login from "./screens/Authentication/Login";
import Forgotpassword from "./screens/Authentication/Forgotpassword";
import Homepage from "./screens/Owner/Homepage";
import { Tabcreator } from "./screens/Owner/components/Tabcreator";
import TenantHomepage from "./screens/Tenant/TenantHomepage";
import DetailedHouse from "./screens/mainscreens/DetailedHouse";
import RightBar from "./screens/mainscreens/RightBar";
import FrontPage from "./screens/FirstPage/front-page";
import RegisterPage from "./screens/Authentication/registration/register";
import Users from "./screens/mainscreens/PaidHouses";
import EditHouse from "./screens/Owner/EditHouse";
const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/ForgotPassword" element={<Forgotpassword />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/Tabcreator" element={<Tabcreator />} />
      <Route path="/TenantHomepage" element={<TenantHomepage />} />
      <Route path="/DetailedHouse" element={<DetailedHouse />} />
      <Route path="/users" element={<Users />} />
      <Route path="/Rightbar" element={<RightBar />} />
      <Route path="/Edithouse" element={<EditHouse />} />
      <Route path="/Detailpage" element={<DetailedHouse />} />
    </Routes>
  );
};

export default App;
