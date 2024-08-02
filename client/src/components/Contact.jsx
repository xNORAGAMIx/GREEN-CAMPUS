

const Contact = () => {
  return (
    <div className="bg-green-50 flex flex-col md:flex-row p-5 md:p-20 justify-center md:justify-around items-center space-y-10 md:space-y-0">
      <div className="flex flex-col space-y-5 md:space-y-10 w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center md:text-left">
          Contact Us
        </h1>
        <div className="text-lg md:text-xl text-center md:text-left">
          <p>Phone: [Your phone number]</p>
          <p>Email: info@greencommunityhub.org</p>
          <p>Address: Manit Bhopal, India</p>
          <p>Working Hours: Mon-Fri: 9 AM - 5 PM</p>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7191699553764!2d77.40599999999998!3d23.216902900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e6172cd895%3A0x4db3061b2d53709c!2sMANIT%20Bhopal!5e0!3m2!1sen!2sin!4v1722605186658!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
