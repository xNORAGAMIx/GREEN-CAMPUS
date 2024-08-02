import RatingStars from "./RatingStars";

const predefinedRating = Math.floor(Math.random() * 5) + 1;

const dataArray = [
  {
    id: 1,
    content: "This hub is a game-changer for our community!",
    user: "Alex Johnson",
  },
  {
    id: 2,
    content: "I found my dream volunteer opportunity here!",
    user: "Maria Gonzalez",
  },
  {
    id: 3,
    content: "The resources are top-notch and super helpful!",
    user: "David Lee",
  },
];

const Review = ({ isOpen }) => {
  return (
    <div
      className={`flex flex-col items-center gap-8 px-4 md:px-8 lg:px-16 py-8 ${
        isOpen ? "blur-sm" : ""
      }`}
    >
      <h1 className="font-extrabold mt-4 md:mt-8 text-6xl text-center">
        Cheers!
      </h1>
      <p className="text-center text-2xl md:text-base lg:text-2xl">
        What Our Members Are Saying About Us
      </p>
      <div
        className={`flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-4 md:px-8 lg:px-16 py-8 ${
          isOpen ? "blur-sm" : ""
        }`}
      >
        {dataArray.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
          >
            <RatingStars rating={predefinedRating} totalStars={5} />
            <h2 className="text-lg font-semibold mt-4">{item.user}</h2>
            <p className="mt-2">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
