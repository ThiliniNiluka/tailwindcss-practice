import React from "react";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import CoursesSection from "./components/CoursesSection";
import CoursesPage from "./components/CoursesPage";
import LearningPaths from "./components/LearningPaths";
import TestimonialSection from "./components/TestimonialSection";
import ArticleSection from "./components/ArticleSection";
import CommunitySection from "./components/CommunitySection";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <CoursesSection/>
      <CoursesPage/>
      <LearningPaths/>
      <TestimonialSection/>
      <ArticleSection/>
      <CommunitySection/>
      <Subscription/>
      <Footer/>
    </div>
  );
}

export default App;