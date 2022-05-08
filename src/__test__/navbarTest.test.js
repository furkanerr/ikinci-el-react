import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar/Navbar";
import { AuthProvider } from "../context/authContext";

import { BrowserRouter as Router } from "react-router-dom";

import SignIn from "../pages/SignIn/SignIn";

test("ürün ekle button test", () => {
  render(
    <Router>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </Router>
  );
  const linkElement = screen.getByText("Ürün Ekle");
  expect(linkElement).toBeInTheDocument();
});




