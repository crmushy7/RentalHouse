import { FC, useState } from "react";
import { Route, Routes } from "react-router";
import Register from "./screens/Authentication/Register";
import Login from './screens/Authentication/Login';
import Forgotpassword from "./screens/Authentication/Forgotpassword";
import Homepage from "./screens/Owner/Homepage";
import { Tabcreator } from "./screens/Owner/components/Tabcreator";
import TenantHomepage from "./screens/Tenant/TenantHomepage";
import GqlRequestQuery from "./graphql/Graphqlquery";
import DetailedHouse from "./screens/mainscreens/DetailedHouse";
import RightBar from "./screens/mainscreens/RightBar";

const App: FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ForgotPassword" element={<Forgotpassword />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Tabcreator" element={<Tabcreator />} />
      <Route path="/TenantHomepage" element={<TenantHomepage />} />
      <Route path="/DetailedHouse" element={<DetailedHouse />} />
      <Route path="/Rightbar" element={<RightBar />} />
      <Route path="/GqlRequestQuery" element={<GqlRequestQuery />} />
    </Routes>
  );
};

export default App;
