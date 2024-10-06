import React, { useState, useEffect } from "react";
import "./App.css";
import Profile from "./profile";
import Bubble from "./bubble";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      {!showProfile && (
        <nav
          className="navbar"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            borderRadius: "15px",
            height: "120px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            opacity: 1 - scrollY / 300,
            transform: `translateY(${scrollY > 300 ? -120 : 0}px)`,
            transitionDuration: `${Math.max(0.3 - scrollY / 1000, 0.1)}s`,
            borderTop: `${Math.min(scrollY / 10, 5)}px solid #4a90e2`,
            borderBottom: `${Math.min(scrollY / 10, 5)}px solid #4a90e2`,
            borderLeft: `${Math.min(scrollY / 20, 2.5)}px solid #4a90e2`,
            borderRight: `${Math.min(scrollY / 20, 2.5)}px solid #4a90e2`,
            color: "#4a90e2",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <div className="navbar-brand">
            <h2 style={{ 
              paddingLeft: "250px", 
              background: 'linear-gradient(to right, black, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Click Here 
              <span style={{ marginLeft: "10px", display: "inline-block" }}>
                <i 
                  className="ri-arrow-right-line" 
                  style={{ 
                    transition: 'all 0.3s ease-in',
                    cursor: 'pointer',
                    background: 'linear-gradient(to right, black, white)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                ></i>
              </span>
            </h2>
          </div>
          <div
            className="profile-icon"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              color: "#4a90e2",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateX(-50%) scale(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateX(-50%) scale(1)")
            }
            onClick={() => setShowProfile(true)}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="8"
                r="5"
                stroke="#4a90e2"  // Changed stroke color
                strokeWidth="2"
              />
              <path
                d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                stroke="#4a90e2"  // Changed stroke color
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span style={{ marginTop: "5px", fontSize: "14px", color: "#4a90e2" }}>Profile</span>  {/* Added color to the font */}
          </div>
        </nav>
      )}
      {showProfile ? (
        <Profile />
      ) : (
        <>
          <main
            className="main-content"
            style={{ 
              height: "60vh", 
              marginTop: "140px",
              opacity: 1 - scrollY / 500,
              transform: `translateY(${scrollY * 0.5}px)`,
              transition: "opacity 0.3s ease, transform 0.3s ease"
            }}
          >
            <div
              className="spinner inner-reverse"
              style={{ "--_num-controls": 20 }}
            >
              {[...Array(20)].map((_, index) => (
                <div
                  key={index}
                  className="spinner-control-button"
                  style={{ "--index": index + 1 }}
                >
                  <input type="radio" name="spinner-control-input" />
                </div>
              ))}
              <div className="spinner-user-rotation">
                <div className="spinner-text-wrapper">
                  <ul
                    className="spinner-text"
                    style={{ "--_num-characters": 25, letterSpacing: "0.5em" }}
                  >
                    {[..."A D I T Y A G U P T A  ✨"].map((char, index) => (
                      <li
                        key={index}
                        className="spinner-character"
                        style={{ "--_index": index + 1 }}
                        data-character={char}
                      ></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </main>

          <h1 style={{
            fontFamily: 'Gilroy, sans-serif',
            marginTop: '75px',
            textAlign: 'center',
            mixBlendMode: 'difference',
            color: 'white',
            fontWeight: '200',
            opacity: 1 - scrollY / 300,
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "opacity 0.3s ease, transform 0.3s ease"
          }}>
            Scroll down
          </h1>
          <i 
            className="ri-arrow-down-s-line" 
            style={{
              display: 'block',
              textAlign: 'center',
              fontSize: '3rem',
              color: 'white',
              mixBlendMode: 'difference',
              transition: 'all 0.3s ease',
              opacity: 1 - scrollY / 300,
              transform: `translateY(${scrollY * 0.3}px) scale(${1 - scrollY / 1000})`,
            }}
            onMouseEnter={(e) => e.target.style.transform = `translateY(${scrollY * 0.3}px) scale(${1.2 - scrollY / 1000})`}
            onMouseLeave={(e) => e.target.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 - scrollY / 1000})`}
          ></i>

        <h1 style={{ 
          textAlign: 'center',
          background: 'linear-gradient(45deg, rgba(255, 0, 89, 1), rgba(186, 0, 253, 1), rgba(0, 165, 253, 1), rgba(255, 200, 0, 1))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: '3rem',
          fontWeight: 'bold',
          padding: '20px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
          marginTop: '80px',
          opacity: scrollY > 300 ? Math.min((scrollY - 300) / 300, 1) : 0,
          transform: `translateY(${Math.max(100 - (scrollY - 300) / 3, 0)}px) scale(${Math.min(1 + (scrollY - 300) / 600, 1.5)})`,
          transition: "opacity 0.3s ease, transform 0.3s ease"
        }}>
          WELCOME TO MY WORLD
        </h1>
          
          <div style={{ 
            height:"100vh",
            marginTop: "50px", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            opacity: scrollY > 600 ? Math.min((scrollY - 600) / 300, 1) : 0,
            transform: `scale(${Math.min((scrollY - 600) / 600 + 0.5, 1)})`,
            transition: "opacity 0.3s ease, transform 0.3s ease"
          }}>
            <Bubble />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
