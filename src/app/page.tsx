import {
  About,
  Contact,
  Experience,
  FeaturedProjects,
  Hero,
  Layout,
  Projects,
  Skills,
} from '@/containers';

import type { NextPage } from 'next';

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */
const Home: NextPage = () => {
  return (
    <>
      <Layout>
        
        <About />
        <Experience />
        <Contact />
        <Contact />
        <Contact />
        <Hero/>
      </Layout>
    </>
    // <Skills />
    //<FeaturedProjects />
       // <Projects />
  );
};
export default Home;
