

export default function Commentator({ commentator, index }) {
  let parity = (index + 1) % 2 == 0 ? "odd" : "even";

  

  return (
    <div className={`commentator ${parity}`}>
      <div className="commentators_info">
        <div className="commentators_img">
          <img src={commentator.img} alt="avatar" />
        </div>
        <div className="commentators_name_and_email">
          <div className="commentators_name">
            <span>{commentator.name}</span>
          </div>
          <div className="commentators_email">
            <span>{commentator.email}</span>
          </div>
        </div>
      </div>
      <div className="commentators_comment">
        <span>{commentator.comment}</span>
      </div>
    </div>
  );
}
