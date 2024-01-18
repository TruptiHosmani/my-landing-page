import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import ToolsAndTechnologies from './ToolsAndTechnologies';
import Footer from './Footer';
function Home() {
  return (
   <main>
        <AboutMe />
        <Projects />
        <ToolsAndTechnologies />
        <Contact />
        <Footer />
    </main>

  );
}
export default Home;