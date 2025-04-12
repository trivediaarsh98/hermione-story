import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import TypewriterMessage from "./TypewriterMessage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MomentSlideshow from "./MomentSlideshow";
// import { useState } from "react";

//declarations : 


const moments = [
  {
    title: "The re-start",
    date: "April 11, 2024",
    description: "It almost feels like yesterday, When I was sitting in the Kerala cafe and suddenly this song came up. Pavizha Mazha has always been a song that reminds me of you, of us. But, it still feels like a miracle, that the thought came to my mind to text you and ask you to guess this song in the background which started or rather restarted our conversations.. ultimately leading to this moment.",
    image: ["images/The Re-start/img1.png", "images/The Re-start/img2.jpg"],
    music: "/music/Pavizha-Mazha.mp3"
  },
  {
    title: "First Date",
    date: "April 24, 2022",
    description: "Now, ofcourse you will not consider this as our first date, but this was the first time you chose to meet me after office down there on the first floor cafeteria. I still remember how much reserved, distant and spooked you were of meeting me. Afraid of me taking normal pictures of you. and ofcourse saying no to almost everything that I had to tell you.",
    image: ["images/First-date/img1.jpg", "images/First-date/img1.jpg", "images/First-date/img1.jpg"],
  },
  {
    title: "The Pre-brithday Date",
    date: "October 2, 2024",
    description: "This was the first time in my life I had made a plan for such an outing/date, I was so much conscious of everything and whether things would work out and would be enjoyable for you or not. And somewhere, there was this lingering thought of this being my only chance to make a day special for you ofcourse it being the only birthday celebration that I could have with you. Now, that I look back to it, it was the most special day of my life as I could see you at your happiest.",
    image: ["images/Pre-birthday/img1_1.jpg", "images/Pre-birthday/img1_2.jpg", "images/Pre-birthday/img1_3.jpg", "images/Pre-birthday/img1_5.jpg", "images/Pre-birthday/img1_4.jpg"],
  },
  {
    title: "First 'I Love You'",
    date: "Feb 9, 2025",
    description: ".. Yes You said those 3 words to me, Probably you don't remember it, as you were \"sleepy\" but I remember it and I did write it down as that was the moment, for the first time you had said I love you to me.. Ofcourse I have said it multiple times before :P",
  },
  {
    title: "So many memories",
    date: "April 12, 2025",
    description: "Ofcourse, Mon, There are a lot of memories to mention, and probably that would make this website into a wikiSite. But, I just want you to remember those days when you came to my place, those moments I got to sing for you and look at you in the eyes as I could see a Woman, A beautiful, charismatic and amazing in all the ways one can wish for Woman. In love with me, in that very moment. That Mon, that what makes me hold on to you and makes me try hard to be with you. I know that life is uncertain, there are things, people, situations affecting one's decisions and trust me, it's alright. Everything is alright. I just want you to know in your heart that whenever you need me, However you need me. I wil be there for you, the way you want.",
    image: ["/images/memories/img  (1).jpg", "/images/memories/img (2).jpg", "/images/memories/img (3).jpg", "/images/memories/img (4).jpg", "/images/memories/img (5).jpg", "/images/memories/img (6).jpg", "/images/memories/img (7).jpg", "/images/memories/img (8).jpg", "/images/memories/img (9).jpg", "/images/memories/img (10).jpg", "/images/memories/img (11).jpg", "/images/memories/img (12).jpg", "/images/memories/img (13).jpg", "/images/memories/img (14).jpg", "/images/memories/img (15).jpg", "/images/memories/img (16).jpg", "/images/memories/img (17).jpg", "/images/memories/img (18).jpg", "/images/memories/img (19).jpg", "/images/memories/img (20).jpg", "/images/memories/img (21).jpg", "/images/memories/img (22).jpg", "/images/memories/img (23).jpg", "/images/memories/img (24).jpg", "/images/memories/img (25).jpg", "/images/memories/img (26).jpg", "/images/memories/img (27).jpg", "/images/memories/img (28).jpg", "/images/memories/img (29).jpg", "/images/memories/img (30).jpg", "/images/memories/img (31).jpg", "/images/memories/img (32).jpg", "/images/memories/img (33).jpg", "/images/memories/img (34).jpg", "/images/memories/img (35).jpg", "/images/memories/img (36).jpg", "/images/memories/img (37).jpg", "/images/memories/img (38).jpg", "/images/memories/img (39).jpg", "/images/memories/img (40).jpg", "/images/memories/img (41).jpg", "/images/memories/img (42).jpg", "/images/memories/img (43).jpg", "/images/memories/img (44).jpg", "/images/memories/img (45).jpg", "/images/memories/img (46).jpg", "/images/memories/img (47).jpg"],
  },
  {
    title: "Will You see your future with me?",
    date: "Today",
    description: "Now, it seems a bit cliche to ask this question, As every moment in my life and in yours has somehow lead to this journey to continue here. But, still I really want to ask you this... Mon, Devika, Would you want to spend the rest of your life with this stupid guy?",
    proposal: true,
  },
];

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 300,
    height: typeof window !== "undefined" ? window.innerHeight : 300,
  });
  //The fade for the login part 
  const [fadeIn, setFadeIn] = useState(false);
  // The login part : 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nameAnswer, setNameAnswer] = useState("");
  const [favPlaceAnswer, setFavPlaceAnswer] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleYesClick = () => {
    setShowConfetti(true);
    setShowPopup(true);
    setTimeout(() => setShowConfetti(false), 1000);
  };
  //Check login: 
  if (!isLoggedIn) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #fceabb, #f8b500)",
        fontFamily: "Arial, sans-serif",
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          width: "90%",
          maxWidth: "400px"
        }}>
          
          <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>💌 Confidencial Information</h2>

          <label>What’s my nickname for you?</label>
          <input
            value={nameAnswer}
            onChange={(e) => setNameAnswer(e.target.value)}
            style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
          />

          <label>Where was our first,first date?</label>
          <input
            value={favPlaceAnswer}
            onChange={(e) => setFavPlaceAnswer(e.target.value)}
            style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
          />

          {error && (
            <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
          )}

          <button
            onClick={() => {
              if (
                nameAnswer.trim().toLowerCase() === "mon" &&
                favPlaceAnswer.trim().toLowerCase() === "brew merchant"
              ) {
                setFadeIn(true);
                setTimeout(() => {
                  setIsLoggedIn(true);
                }, 100); // gives time for fade-in effect
              } else {
                setError("Oops! That's not quite right.");
              }
            }}
            style={{
              width: "100%",
              padding: "0.7rem",
              backgroundColor: "#e91e63",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Unlock 💘
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fade-container ${fadeIn ? "fade-in" : ""}`}
    >


      <div
        style={{
          minHeight: "100vh",
          padding: "2rem",
          fontFamily: "sans-serif",
          position: "relative",
          background: "rgba(255,255,255,0.7)",
          backgroundImage: "url('/images/bg-bg.jpg')", // semi-transparent if needed
          backgroundSize: "100%",
          zIndex: 1,
        }}
      >


        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(2px)",
          zIndex: -1,
        }} />

        <h1 class="haryypotter">
          Harry Potter and The informal proposal
        </h1>

        {showConfetti && (
          <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces="300" />
        )}
        <div
          style={{
            backgroundImage: "url('/images/parchment.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "3rem",
            borderRadius: "10px",
            maxWidth: "900px",
            margin: "3rem auto",
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.1), 0 10px 30px rgba(0,0,0,0.2)",
            border: "2px solid rgba(255,255,255,0.5)",
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.7rem",
            lineHeight: "2.5rem",
            color: "#3e2723",
            border: "1px solid #a1887f",
            position: "relative",
          }}
        >
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#3e2723" }}> "CONFIDENCIAL" </h2>
          <p>
            My Dear Mon, I can write a thousand words describing you and yet it would not be enough to really give the essence of how amazing you are and how much I am blessed to have these moments with you. But this is my attempt to really show my gratitude because, you have brought such magic in my life that I never thought existed. It only seems fitting that we address eachother with reference from Haryy potter, because the truth is, it is magical what we have, the time we spent, the moments of laughter and love.
          </p>
          <p>
            You’ve shown me what true love looks like — patient, kind, and full of joy. And every single day with you makes me want to be the best version of myself.
          </p>
          <p>
            So, there's one thing I want to ask you...
          </p>

          <TypewriterMessage text="Will you be mine?" />
        </div>

        {showPopup && (
          <div
            style={{
              position: "fixed",
              top: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#fff0f5",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              zIndex: 9999,
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#d63384", fontSize: "1.8rem" }}>She said YES! 💍</h2>
            <p style={{ marginTop: "1rem", color: "#333", fontSize: "1.1rem" }}>
              I can’t wait to spend forever with you.
            </p>
          </div>
        )}

        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1rem" }}>
          {moments.map((moment, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "1.5rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              {/* {moment.image && (
              <img
                src={moment.image}
                alt={moment.title}
                style={{
                  width: "100%",
                  borderRadius: "0.75rem",
                  marginBottom: "1rem",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
              />
            )} */}

              <h2 style={{ fontSize: "1.5rem", color: "#d63384" }}>{moment.title}</h2>
              <p style={{ fontSize: "0.9rem", color: "#6c757d" }}>{moment.date}</p>
              <p style={{ marginTop: "0.5rem", color: "#343a40" }}>{moment.description}</p>
              <MomentSlideshow images={moment.image} />

              {moment.music && (
                <audio controls style={{ width: "100%", marginTop: "1rem" }}>
                  <source src={moment.music} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}


              {moment.proposal && (
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                  <button
                    style={{
                      background: "#d63384",
                      color: "white",
                      fontSize: "1.1rem",
                      padding: "0.6rem 2rem",
                      border: "none",
                      borderRadius: "999px",
                      cursor: "pointer",
                    }}
                    onClick={handleYesClick}
                  >
                    Yes, a thousand times yes!
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}