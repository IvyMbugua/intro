import { useState } from 'react';
import heartIcon from './assets/heart.svg'; // Import your SVG file

function LikeButton() {
  // State to keep track of the like count and liked status
  const [likeCount, setLikeCount] = useState(5);
  const [liked, setLiked] = useState(false);

  // Function to handle button click
  const handleLikeClick = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="like-button">
      <p>
        {liked ? 'Liked! ' : 'Like '}
        <img src={heartIcon} alt="Heart" className="heart-icon" /> {likeCount}
      </p>

      <button onClick={handleLikeClick} className={liked ? 'liked' : ''}>
        {liked ? 'Dislike' : 'Like'}{' '}
        <img src={heartIcon} alt="Heart" className="heart-icon" />
      </button>
    </div>
  );
}

export default LikeButton;
