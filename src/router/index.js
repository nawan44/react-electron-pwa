import React from "react";
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import Document from "../pages/Document";
 import Setting from "../pages/Setting";
import User from "../pages/User";

export default function Routers() {
  return (
<HashRouter>
<Routes>
<Route path="/" element={<SignIn />} />
       <Route path="/home" element={<Home />} />
       <Route path="/document" element={<Document />} />
        <Route path="/setting" element={<Setting />} />
       <Route path="/user" element={<User />} />
</Routes>
</HashRouter>
  );
}
