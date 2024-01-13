import Contact from "../../container/contents-contact/Contact";
import ContactForm from "../../container/contents-contact/ContactForm";
import Breadcrumbs from "../../components/breadcrumbs";

const ContactPage = () => {
  const contactBreadcrumbs = [
    {
      to: "/contact",
      title: "Liên hệ",
    },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbs={contactBreadcrumbs} />
      <Contact />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
