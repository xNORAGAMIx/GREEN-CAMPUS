/* eslint-disable react/prop-types */


function Status({ text, num }) {
  return (
    <div className="text-center">
      <p className="text-green-300 text-6xl font-bold ">{num}</p>
      <p className="font-bold text-4xl mt-4">{text}</p>
    </div>
  );
}

export default Status;
