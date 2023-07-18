import CatGallery from "../components/CatGallery";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Moment from "../components/Moment";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
        title="Kattie Communities"
        text="Cats Make Life Better"
        buttonText="Kattie your Cat"
        url="/community"
        btnClass="show"
      />
      <CatGallery />
      <Moment />
      <Footer />
    </>
  );
}

export default Home;
