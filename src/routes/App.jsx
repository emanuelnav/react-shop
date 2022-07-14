import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import NewPassword from "../containers/NewPassword";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";
import "../styles/global.css";

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new-password" element={<NewPassword />} />
					<Route path="/recovery-password" element={<RecoveryPassword />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/login" element={<Login />} />
					<Route path="/sign-up" element={<SignUp />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
