import Contact from "../../container/contents-contact/Contact";
import ContactForm from "../../container/contents-contact/ContactForm";
import Breadcrumbs from "../../components/breadcrumbs";

const ContactPage = () => {
  const breadcrumbs = [
    {
      to: "/contact",
      title: "Contact",
    },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Contact />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
