import CommunityPost from "../components/CommunityPost";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import KattieForm from "../components/KattieForm";
import Navbar from "../components/Navbar";

function Community() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        title="Catmmunity"
        btnClass="show"
        url="#newKattie"
        buttonText="Kattie Now!"
      />
      <CommunityPost />
      <KattieForm />

      <Footer />
    </>
  );
}

export default Community;
