import CatGalleryData from "./CatGalleryData";
import "./CatGalleryStyle.css";

const CatGallery = () => {
  return (
    <div className="catgallery">
      <h1>Highlights</h1>
      <p>Join the Kattie now!</p>
      <CatGalleryData
        heading="Monthly-Popular Cats"
        text=" We will hold a contest every week to pick the most popular Kitty in
            our catmmunity. Come and share moments of your bae!"
        img1="https://people.com/thmb/haeWK8brCd4gnWjIP8kb690w0Ic=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(914x519:916x521)/cat-birthday-9817aa3aa1ca4011b78e3e48badc7d46.jpg"
        className="first-des"
      />

      <CatGalleryData
        heading="Catmmunity"
        text="Post moments, share experience and ask questions. Let our princes or princesses happier and healthier."
        img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYj7R0qhym80fID8_qYFC5Gb4x__2Zg4HFRg&usqp=CAU"
        className="first-des-reverse"
      />
    </div>
  );
};

export default CatGallery;
