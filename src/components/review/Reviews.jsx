import "./Reviews.css";

const reviews = [
  {
    reviewerName: "Othimna Mini",
    starRating: 5,
    reviewText: "Lumos tutoring really helped me with building my confidence when it comes to mathematics . Topics like function and calculus are topics I now look forward to , all thanks to the academy . They explain concepts so clearly and leave you wondering where they were the entire time you were struggling . 10/10 would highly recommend",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tNeVIzUnJOWGxMUmprNU5XVkVjRkZHTTA5R1gxRRAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOkMyR3RrNXlLRjk5NWVEcFFGM09GX1E%7C0cztimXvP9Y%7C?hl=en-GB"
  },
  {
    reviewerName: "Lefika Machabaphala",
    starRating: 5,
    reviewText: "Lumos has completely changed the way I learn. The tutors explain everything in a way that finally makes sense, and the sessions are always engaging. Topics that used to confuse me now feel easy, and my marks have improved. I feel more confident, motivated, and supported. I highly recommend Lumos to any student who wants to grow academically and personally.",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2toSE16SlljalpVV0VkTlRHRXRWVmhqUm1ScE5GRRAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOkhHMzJYcjZUWEdNTGEtVVhjRmRpNFE%7C0d5zUT3d8m2%7C?hl=en-GB"
  },
  {
    reviewerName: "Kgalalelo Orefiloe",
    starRating: 3,
    reviewText: "I had a great time at LumosTutoring Academy, as I now understand some of the Mathematics topics better. The tutors are knowledgeable and helpful, and the sessions are generally well-organized. Sometimes the lessons can feel a bit rushed, but the tutors are always open to questions and extra help. It’s a decent option for students who need academic support and want to improve their performance.",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21Kak16ZFljMDFLWlVacmFUZzNlSFF3TWxWU2VHYxAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOmJjMzdYc01KZUZraTg3eHQwMlVSeGc%7C0cztEcQyfXm%7C?hl=en-GB"
  },
  {
    reviewerName: "Neliswa Ndaba",
    starRating: 5,
    reviewText: "The Mathematics Paper 1 revision cross night was very helpful. The teacher made sure everyone understood the difficult sections. It was a productive and enjoyable night that helped me feel more prepared for the final exam.",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25SaldWaG1PVnB6TUU4NE5qUlhPRjlFYjNKM1FuYxAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOnRjWVhmOVpzME84NjRXOF9Eb3J3Qnc%7C0czsKKDPMw3%7C?hl=en-GB"
  },
  {
    reviewerName: "Kaybee",
    starRating: 5,
    reviewText: "OMG. Joining Lumos tutoring Academy is one of the best decisions one can make. The tutor is funny, engages with his students, ensures that no one is left behind or that he isn't moving too fast. He understands the struggles we face as students and how intimidating topics such as Trig can be. He shares tips and tricks that you probably will not receive from your teacher. Overall just a great mathematician, and a great experience with Lumos Academy.",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xaS2NsVnRVVVl3TUdKSWFuaDVVVGR3UlZGSVIxRRAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOlZKclVtUUYwMGJIanh5UTdwRVFIR1E%7C0d0RaOSG-Y4%7C?hl=en-GB"
  },
  {
    reviewerName: "Azande Sibiya",
    starRating: 5,
    reviewText: "Thank you so much to Lumos Academy. I’ve never been someone who was strong in Maths, but the tutor gave us the right strategies to study smart, not hard. I started the sessions with low confidence and ended on a high note. Thank you for taking your precious time to help people you don’t even know we truly appreciate it. This is my last Maths exam, and I’ll be walking into that room with so much confidence. I just wish I had found Lumos sooner!",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21nMFZsTmpSa0Z2V2pKUWNUUk1WM2sxWWtjM09YYxAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOmg0VlNjRkFvWjJQcTRMV3k1Ykc3OXc%7C0d0RMOYUeFg%7C?hl=en-GB"
  },
  {
    reviewerName: "Thulii Sinokuhle",
    starRating: 5,
    reviewText: "I really enjoyed the maths cross night and I wish I knew Lumo earlier, but I am glad I got the chance to be part of such an amazing experience and the tutor keep up you are doing great",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pCSVZscG9VMnhhYVVNMk5UWlhVbkozYkd0eVdHYxAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOjBIVlpoU2xaaUM2NTZXUnJ3bGtyWGc%7C0czvXDBHdYO%7C?hl=en-GB"
  },
  {
    reviewerName: "Tlamelo Mpete",
    starRating: 5,
    reviewText: "The Lumos Tutoring Academy provided outstanding support and significantly boosted my confidence and understanding mathematics. The tutor was truly exceptional.",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2twbVVtVklhelIxU2pGSVVDMVpiR3QwUkdkRlMxRRAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOkpmUmVIazR1SjFIUC1ZbGt0RGdFS1E%7C0czsLyU8WXW%7C?hl=en-GB"
  },
  {
    reviewerName: "Sephephe Malatji",
    starRating: 5,
    reviewText: "I recently attended an online Maths class focusing on Trigonometry, and honestly, it was one of the best learning experiences I’ve had! The tutor made everything so simple and easy to understand concepts that used to confuse me now make perfect sense. I can’t believe I only discovered this class now while rewriting, but I’m so grateful I did. Trigonometry finally feels manageable and even enjoyable. Highly recommend this class to anyone who struggles with Maths — it truly makes a difference!",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xCWlgyRkJXbU5QY20xSWMxQkVSV0ZzUzNKSWVVRRAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOlBZX2FBWmNPcm1Ic1BERWFsS3JIeUE%7C0d0S3RkDY1U%7C?hl=en-GB"
  },
  {
    reviewerName: "Neo Princess",
    starRating: 5,
    reviewText: "The lessons made me to understand calculus pretty more....really appreciate it...only if i knew about it long time ago maybe my marks would have been pretty good...hope it expand to more subjects",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xGWFpVY3dibTVtTURGUVRtb3lZVm93ZEdNMlZHYxAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOlFXZUcwbm5mMDFQTmoyYVowdGM2VGc%7C0czu1jIsXEZ%7C?hl=en-GB"
  },
  {
    reviewerName: "Boipelo Koloko",
    starRating: 5,
    reviewText: "Amazing tutor. Sir Diego broke down the information so well. I was apart of the p1&p2 cross night and his energy was great the whole night.",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21oRmQyZG1jazlzU1hJNFdUZHZWek5DTWtWcE1FRRAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOmhFd2dmck9sSXI4WTdvVzNCMkVpMEE%7C0d0RM8Jd-LH%7C?hl=en-GB"
  },
  {
    reviewerName: "Simamkele Teta",
    starRating: 5,
    reviewText: "Lumos Tutor Academy has helped me a lot there was a topic called calculus that i did not know in maths and I would try to ace it ,but nothing I would also leave it in the exam but this past Friday I joined a crossnight for the first time and I got the gist of it after I already gave up that I would know the basics of it only to find out it is an easy topic ,I want to thank God for showing me the Lumos Tutor Academy page on Friday",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25CbGRsSmlOMEZ0Vm5OTlVWUmhXRGRDVWs1QmRVRRAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOnBldlJiN0FtVnNNUVRhWDdCUk5BdUE%7C0czv0MQQO4-%7C?hl=en-GB"
  },
  {
    reviewerName: "Kgopotso Seema",
    starRating: 5,
    reviewText: "The cross night lesson was fun, informative and very helpful and the tutors really engage with their students which created a safe space for me",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT210WldVcHhWa3h1T1ZSQ1QzVktjRFJFU2tnMVJWRRAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOmtZWUpxVkxuOVRCT3VKcDRESkg1RVE%7C0d0sby0omrT%7C?hl=en-GB"
  },
  {
    reviewerName: "Onalenna Ndima",
    starRating: 5,
    reviewText: "I loved the free lessons that were provided by the tutors and how they were so attentive and willing to help regardless of the free lesson would definitely recommend",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tJdGJISnJkbmxxYVZkT09FUXhjelpLY1RoaFJHYxAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOkItbHJrdnlqaVdOOEQxczZKcThhRGc%7C0csz0KfY3sX%7C?hl=en-GB"
  },
  {
    reviewerName: "Sinalo Maraqamba",
    starRating: 5,
    reviewText: "Lumos has helped me to be able to understand the work that I struggle with, and never doubt myself or lose confidence and never give up when I do hard work",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21vME9GZHhMVGhtVEZsdU56TlZTSEY0VG5sU05tYxAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOmo0OFdxLThmTFluNzNVSHF4TnlSNmc%7C0d62x89UnpJ%7C?hl=en-GB"
  },
  {
    reviewerName: "Lerato Phora",
    starRating: 4,
    reviewText: "CLASS WAS AMAZING TO BE HONEST I WOULDN'T MANAGE TO DO A CROSSNIGHT BY MYSELF BUT WITH LUMOS TUTORING IT WAS POSSIBLE AND SIMPLE.",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25KaWJWRTJablpFUzNoR1FuUnhXamh2TTJGdVozYxAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOnJibVE2ZnZES3hGQnRxWjhvM2FuZ3c%7C0d0SKOtgK6S%7C?hl=en-GB"
  },
  {
    reviewerName: "Elizabeth Chiliya",
    starRating: 5,
    reviewText: "I was very fun and informative I finally understood proportionality and realised that trigonometry wasn't that hard 😊",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xCWWRqWmtPVVExZVhoZk1tMDNibFoyZUVKd2NtYxAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOlBYdjZkOUQ1eXhfMm03blZ2eEJwcmc%7C0d0RtyERnSO%7C?hl=en-GB"
  },
  {
    reviewerName: "Anitha Mngxokolo",
    starRating: 5,
    reviewText: "The most thing i like about lumos is that they make things easily & they turn you into a problem solver ❤️❤️💛",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21ZdGVuWkVjMDFETkc5T2VXcHFkVFJwWXpScVgyYxAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOmYtenZEc01DNG9OeWpqdTRpYzRqX2c%7C0cgoDCHdM46%7C?hl=en-GB"
  },
  {
    reviewerName: "Kedibone Lekalakala",
    starRating: 5,
    reviewText: "Since my daughter attends the classes I can see so much improvement on her studies",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21sdGF6QlJPSFk1VmpoNVkxcDBMWGd4TUc0MVZYYxAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOmltazBROHY5Vjh5Y1p0LXgxMG41VXc%7C0css-CdUtzC%7C?hl=en-GB"
  },
  {
    reviewerName: "Tinkey Mphago",
    starRating: 5,
    reviewText: "So engaging in making learners excellent. May you strongly be Godly prosperous",
    reviewLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xaWFZEY3lNVGQ2Ym5sSmVFc3hkV2xrT1RCelJHYxAB!2m1!1s0x0:0xca95d5e970074f9f!3m1!1s2@1:CAIQACodChtycF9oOlZXVDcyMTd6bnlJeEsxdWlkOTBzRGc%7C0cgo2qNX0-L%7C?hl=en-GB"
  }
];

// Duplicate the array to create the seamless infinite loop effect
const duplicatedReviews = [...reviews, ...reviews];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Reviews</h2>
      <p className="reviews-intro">
        At Lumos, we don't just teach mathematics; we rebuild confidence. 
        From mastering complex calculus to conquering trigonometry anxiety, 
        our students are proof that with the right support, confusion can 
        turn into clarity. See what our community has to say about their journey.
      </p>
      <div className="reviews-slider">
        <div className="reviews-track">
          {duplicatedReviews.map((review, index) => (
            <a
              key={index}
              href={review.reviewLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="review-card"
            >
              <div className="rating">
                {/* Dynamically render stars based on numeric rating */}
                {"★".repeat(review.starRating)}
                {"☆".repeat(5 - review.starRating)}
              </div>

              <p className="review-text">“{review.reviewText}”</p>
              <span className="review-name">{review.reviewerName}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;