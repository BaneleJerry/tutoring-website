import "./Reviews.css";

/**
 * @typedef {Object} Review
 * @property {string} link
 * @property {string} name
 * @property {string} text
 * @property {number} rating
 */

const reviews = [
  {
    link: "https://share.google/0vSKoKFpaqSBwrNF2",
    name: "Tlamelo Mpete",
    text: "The Lumos Tutoring Academy provided outstanding support and significantly boosted my confidence and understanding mathematics. The tutor was truly exceptional.",
    rating: 5,
  },
  {
    link: "https://share.google/uJo9g8mZRyk97lPUf",
    name: "Sephephe Malatji",
    text: "I recently attended an online Maths class focusing on Trigonometry, and honestly, it was one of the best learning experiences I’ve had! The tutor made everything so simple and easy to understand concepts that used to confuse me now make perfect sense. I can’t believe I only discovered this class now while rewriting, but I’m so grateful I did. Trigonometry finally feels manageable and even enjoyable. Highly recommend this class to anyone who struggles with Maths —it truly makes a difference!After all there is someone out there who made me love this topic I wish I found this tutors right after I thought of upgrading",
    rating: 2,
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Reviews</h2>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <a
            key={index}
            href={review.link}
            target="_blank"
            rel="noopener noreferrer"
            className="review-card"
          >
            <div className="rating">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>

            <p className="review-text">“{review.text}”</p>
            <span className="review-name">{review.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
                    