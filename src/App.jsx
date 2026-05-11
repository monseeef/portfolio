import Contact from './components/Contact.jsx';
import ExperienceTimeline from './components/ExperienceTimeline.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import Skills from './components/Skills.jsx';
import Layout from './layouts/Layout.jsx';

function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <ProjectGrid />
      <ExperienceTimeline />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
