import Button from "./Button";

function ContactForm() {
  return (
    <form className="bg-green-50 w-full">
      <div className="flex flex-col justify-between items-center space-y-6 p-16 w-full max-w-3xl mx-auto">
        <h1 className="font-bold text-4xl md:text-6xl mb-6">Get in Touch Now</h1>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-4 w-full">
            <input
              className="px-6 py-4 rounded-full w-full md:w-1/2 shadow-md"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="px-6 py-4 rounded-full w-full md:w-1/2  shadow-md"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <input
            className="px-8 py-6 rounded-full w-full shadow-md"
            type="tel"
            placeholder="Phone"
            required
          />
          <textarea
            className="px-8 py-6 rounded-full w-full shadow-md mb-4"
            placeholder="Message"
            required
          />
          <Button text="Send It!" />
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
