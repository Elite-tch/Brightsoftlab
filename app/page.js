import NavBar from "./components/Header";
import HeroPage from "./components/HeroPage";
import About from "./components/About";
import TechStack from "./components/skill";
import Experience from "./components/experience";
import WorkPage from "./components/Work";
import Testimonials from "./components/testmony";
import ContactForm from "./components/contact"
export default function Home() {
  return (
    <div>
        <div className=" bg-white dark:bg-custom-gradient w-full">
       <NavBar/>
        <HeroPage/>   
        
    </div>
    <About/>  
    <TechStack/>     
    <Experience/> 
   <WorkPage />   
   <Testimonials/>
   <ContactForm/>
    </div>
  );
}
