import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "@/sections/Nav";
import Hero from "@/sections/Hero";
import Vision from "@/sections/Vision";
import Journey from "@/sections/Journey";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Achievements from "@/sections/Achievements";
import Community from "@/sections/Community";
import Certificates from "@/sections/Certificates";
import Connect from "@/sections/Connect";
import "@/App.css";

function Home() {
  return (
    <main className="relative bg-[#FBF7EF] text-[#1F1B16] min-h-screen" data-testid="home-page">
      <Nav />
      <Hero />
      <Vision />
      <Journey />
      <Skills />
      <Projects />
      <Achievements />
      <Community />
      <Certificates />
      <Connect />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
