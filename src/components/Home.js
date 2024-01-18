import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

function Home() {
  return (
    <main>
       <section className="py-20">
            <div className="container mx-auto px-4">
              <AboutMe />
            </div>
          </section>
          <section className="py-20">
            <div className="container mx-auto px-4">
              <Projects />
            </div>
          </section>
          <section className="py-20">
            <div className="container mx-auto px-4">
              <Contact />
            </div>
          </section>
    </main>
  );
}
export default Home;