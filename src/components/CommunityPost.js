import CommunityData from "./CommunityData";
import "./CommunityStyle.css";

function CommunityPost() {
  return (
    <div className="community">
      <div className="communitycard">
        <CommunityData
          heading="Stare at me 😠"
          author="Cecilia715"
          text="My cat is keeping this facial expression the whole day. I don't know why?"
          image="https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
          likenum="1027"
        />
        <CommunityData
          heading="Smile"
          author="CattieFan"
          text="My Hana is the prettiest in the world!"
          image="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          likenum="30231"
        />
        <CommunityData
          heading="My new Cat"
          author="Kathrine"
          text="See my beauty 😍"
          image="https://images.unsplash.com/photo-1548366086-7f1b76106622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=676&q=80"
          likenum="281"
        />
        <CommunityData
          heading="Sleepy Cat"
          author="Olivia"
          text="I saw this peaceful pace when I work up. Made my day 😊"
          image="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
          likenum="329"
        />
        <CommunityData
          heading="My first Cat!"
          author="PaulinNY"
          text="Help me with the name of this prince!"
          image="https://images.unsplash.com/photo-1570824103090-72cf4906868c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=826&q=80"
          likenum="310"
        />
        <CommunityData
          heading="Cutiest in the World!"
          author="TerryCoolKid"
          text="Walking toward me. 😄"
          image="https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          likenum="832"
        />
      </div>
    </div>
  );
}

export default CommunityPost;
