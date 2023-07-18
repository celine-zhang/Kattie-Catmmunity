import "./CommunityStyle.css";
function CommunityData(props) {
  return (
    <div className="c-card">
      <div className="c-image">
        <img src={props.image} alt="post-pic" />
      </div>

      <div className="c-detail">
        <div className="c-head">
          <h4>{props.heading}</h4>
          <h4>{props.author}</h4>
        </div>

        <p>
          {props.text.substring(0, 30)}
          {props.text.length > 30 && "..."}
        </p>
        <div className="c-review">
          <i className="fa fa-heart heart"></i>
          <p>{props.likenum}</p>
        </div>
      </div>
    </div>
  );
}

export default CommunityData;
