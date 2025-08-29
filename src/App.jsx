import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/Admin";
import InitiativesPage from "./pages/InitiativesPage";
import VolunteerPage from "./pages/VolunteerPage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./components/BlogDetail";

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen w-full overflow-x-hidden bg-white">
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/admin" element={<AdminPage />} />
					<Route path="/initiatives" element={<InitiativesPage />} />
					<Route path="/volunteer" element={<VolunteerPage />} />
					<Route path="/gallery" element={<GalleryPage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/blog/:id" element={<BlogDetail />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
