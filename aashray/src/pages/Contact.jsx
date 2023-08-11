import { ContactInfo, Form, ContactHero } from "../components/contact";

const Contact = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <ContactHero />
      <ContactInfo />
      <Form />
    </div>
  );
};

export default Contact;
