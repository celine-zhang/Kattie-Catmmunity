import MomentData from "./MomentData";
import "./MomentStyle.css";

function Moment() {
  return (
    <div className="moment">
      <h1>Recent Moments</h1>
      <p>Share Now!</p>

      <div className="momentCard">
        <MomentData
          heading="Cats' fav Toy!"
          image="https://images.unsplash.com/photo-1602924097911-a78ca1af38c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1433&q=80"
          text="My cat never sad since I bought this fake mouse"
        />
        <MomentData
          heading="How to walk you cat in the wild?"
          image="data:image/jpeg;base64,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"
          text="It's totally worthy!!"
        />
        <MomentData
          heading="My bae is turning one!!"
          image="https://images.unsplash.com/photo-1557166983-5939644443a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          text="Happy Birthday to my little angle!"
        />
      </div>
    </div>
  );
}

export default Moment;