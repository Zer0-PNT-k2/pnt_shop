import { CiLocationOn } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";
import Wrapper from "../../components/wrapper";

const Contact = () => {
  return (
    <Wrapper>
      <div className="text-base mt-24">
        <h1 className="text-4xl font-normal mb-2">We're always eager to hear from you!</h1>
        <p>
          You can call us in working time or visit our office. All mails will
          get the response within 24 hours. Love to hear from you!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 font-['Open_Serif'] my-12 text-base">
        <div className="flex">
          <CiLocationOn className="text-red-600 mr-2 mt-1 text-4xl" />
          <div>
            <h2 className="text-2xl mb-4 mt-1">ADDRESS</h2>
            <p>Khu 7, Phong Hải, tx Quảng Yên - Quảng Ninh</p>
          </div>
        </div>
        <div className="flex">
          <AiOutlinePhone  className="text-red-600 mr-2 mt-1 text-4xl" />
          <div>
            <h2 className="text-2xl mb-4 mt-1">Contact</h2>
            <p>Iphone: <b>(+84) 868342028</b></p>
            <p>Mail: <b>tanpham2301@gmail.com</b></p>
          </div>
        </div>
        <div className="flex">
          <MdAccessTime className="text-red-600 mr-2 mt-1 text-4xl" />
          <div>
            <h2 className="text-2xl mb-4 mt-1">HOUR OF OPERATION</h2>
            <p>Monday – Friday : <b>09:00 – 20:00</b></p>
            <p>Sunday & Saturday: <b>10:30 – 22:00</b></p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
