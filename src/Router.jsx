import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Room from "./pages/Room";
import Notification from "./pages/Notification";
import RoomChanging from "./pages/RoomChanging";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Logout from "./pages/Logout";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="room" element={<Room />} />
          <Route path="notification" element={<Notification/>} />
          <Route path="RoomChanging" element={<RoomChanging/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="signin" element={<Signin/>}/>
          <Route path="logout" element={<Logout/>}/>
          <Route path="account" element={<Account/>}/>
          <Route path="checkout" element={<Checkout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
