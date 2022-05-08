import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar/Navbar";
import { AuthProvider } from "../context/authContext";

import { BrowserRouter as Router } from "react-router-dom";

import SignIn from "../pages/SignIn/SignIn";

test('email input test', () => { 

    render(
        <Router>
            <AuthProvider>
                <SignIn />
            </AuthProvider>
        </Router>
    );
    const input = screen.getByPlaceholderText("Email@example.com");
    expect(input).toBeInTheDocument();    
}
);


test('email label test', () => { 
    
    render(
        <Router>
            <AuthProvider>
                <SignIn />
            </AuthProvider>

        </Router>
    );
    const label = screen.getByText("Email");
    expect(label).toBeInTheDocument();
 })

