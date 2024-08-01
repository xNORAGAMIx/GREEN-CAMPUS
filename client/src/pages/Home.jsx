import Accordian from "../components/Accordian";

const Home = () => {
  return (
    <div className="bg-green-50 flex flex-col items-center py-8">
        <h1 className="font-extrabold text-6xl mb-14">Frequently Asked Questions</h1>
        <Accordian
          title="What is the Green Community Hub?"
          content="A vibrant platform for eco-conscious individuals!"
        />

        <Accordian
          title="What is the Green Community Hub?"
          content="A vibrant platform for eco-conscious individuals!"
        />

        <Accordian
          title="What is the Green Community Hub?"
          content="A vibrant platform for eco-conscious individuals!"
        />

    </div>
  );
};

export default Home;
