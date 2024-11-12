import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            {/* Navbar */}
            <header className="navbar">
                <div className="logo">BillForge</div>
                <nav>
                    <ul>
                        <li>
                            <a href="#features">Features</a>
                        </li>
                        <li>
                            <a href="#pricing">Pricing</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                    </ul>
                </nav>
                <button className="login-button">Login</button>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Effortless Invoicing for Freelancers & Small Businesses</h1>
                    <p>
                        Create, manage, and send invoices with ease. Join BillForge today to streamline your billing
                        process.
                    </p>
                    <button className="cta-button">Get Started</button>
                </div>
                {/* <img
                    src="https://www.hiveage.com/assets/posts/3701/a-guide-to-proforma-invoices.jpg"
                    alt="Invoicing dashboard preview"
                    className="hero-image"
                /> */}
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <h2>Features</h2>
                <div className="features-list">
                    <div className="feature-item">
                        <h3>Create and Manage Invoices</h3>
                        <p>Quickly generate invoices and keep them organized in one place.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Download as PDF</h3>
                        <p>Easily download invoices as PDFs to share with your clients.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Send via Email</h3>
                        <p>Send invoices directly to clients with just one click.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <h2>About BillForge</h2>
                <p>
                    BillForge is designed to simplify invoicing for freelancers and small businesses. With features
                    tailored to your needs, it saves time and helps you keep track of your finances effortlessly.
                </p>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 BillForge. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
