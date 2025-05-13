import React from 'react'
import './aboutus.css'

const aboutus = () => {
    return (
        <>
            <div className="about-container">
                {/* Hero */}
                <section className="hero-section">
                    <h1>About MedSupply</h1>
                    <p>
                        Reliable and rapid medicine supply solutions for hospitals, pharmacies, and clinics.
                    </p>
                </section>

                {/* Who We Are */}
                <section className="about-section">
                    <div className="about-grid">
                        <img
                            src="/aboutus image.jpg"
                            alt="Medical supply delivery"
                            className="about-img"
                        />
                        <div className="about-text">
                            <h2>Who We Are</h2>
                            <p>
                                MedSupply is a dedicated provider of pharmaceutical logistics. With cutting-edge supply chain
                                technology and a mission to deliver care, we make essential medicines accessible to those who
                                need them the most.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Beliefs */}
                <section className="beliefs-section">
                    <h2>Our Core Beliefs</h2>
                    <div className="beliefs-grid">
                        <div className="belief-card">
                            <h3>Our Mission</h3>
                            <p>
                                To ensure timely access to life-saving medicines through efficient, transparent, and reliable logistics.
                            </p>
                        </div>
                        <div className="belief-card">
                            <h3>Our Vision</h3>
                            <p>
                                A healthier world where healthcare providers never struggle with medicine shortages again.
                            </p>
                        </div>
                        <div className="belief-card">
                            <h3>Our Values</h3>
                            <p>
                                Integrity, urgency, patient-first thinking, and a commitment to quality in everything we do.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="stats-section">
                    <h2>Trusted By the Healthcare Community</h2>
                    <div className="stats-grid">
                        <div>
                            <p className="stat-number">100+</p>
                            <p>Hospitals Served</p>
                        </div>
                        <div>
                            <p className="stat-number">10K+</p>
                            <p>Shipments Delivered</p>
                        </div>
                        <div>
                            <p className="stat-number">24/7</p>
                            <p>Support Available</p>
                        </div>
                        <div>
                            <p className="stat-number">99.9%</p>
                            <p>On-Time Rate</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default aboutus

