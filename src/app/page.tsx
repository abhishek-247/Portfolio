import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Homepage from "@/components/Home";
import Mystory from "@/components/Mystory";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

 function Home() {
  return (
    
    <div className="px-[5%] sm:px-[5%]">

    <Navbar/>
    <Homepage/>
    <Projects/>
    <Experience/>
    <Skills/>
    <Mystory/>
    <Footer/>
    </div>

    
  );
}

export default Home