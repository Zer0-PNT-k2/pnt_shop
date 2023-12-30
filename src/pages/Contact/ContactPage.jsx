import ScrollToTop from "react-scroll-to-top";
import HeaderTop from "../../components/headers/header-top";
import HeaderBottom from "../../components/headers/header-bottom";
import Contact from "../../container/contents-contact/Contact";
import ContactForm from "../../container/contents-contact/ContactForm";
import Footer from "../../components/footer";
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
      <ScrollToTop smooth />
      <HeaderTop />
      <HeaderBottom />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
