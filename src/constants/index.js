import { FaAngleDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import Button from "../components/Button";

// Header
export const listHeader = [
  {
    title: "Sản phẩm",
    icon: <FaAngleDown className="inline-flex mx-1" />,
    path: "/products/all",
  },
  {
    title: "Bài viết",
    icon: <FaAngleDown className="inline-flex mx-1" />,
    path: "/blog",
  },
  {
    title: "Liên hệ",
    icon: "",
    path: "/contact",
  },
];

// SideBar --> HeroSection, Banner
export const shopifySection = [
  {
    img: "/images/ElectronicsStoreOne.png",
    sale: "SALE UP TO 30% OFF",
    name: "Apple Watch Series",
    title: (
      <p className="font-semibold mb-8 text-lg text-pretty leading-6">
        Feature packed at a better value than ever PowerFull sensors to <br />
        monitor your fitness
      </p>
    ),
    button: (
      <Button
        title="submit"
        className="font-semibold text-lg mb-6 rounded-3xl py-3 px-6 
        bg-black text-white hover:bg-red-600 animate-pulse"
      >
        Shop Now
        <FaArrowRight className="inline-flex" />
      </Button>
    ),
  },
  {
    img: "/images/ElectronicsStoreTwo.png",
    sale: "SALE UP TO 50% OFF",
    name: "Apple Watch Series",
    title: (
      <p className="font-semibold mb-6 text-lg text-pretty leading-6">
        Feature packed at a better value than ever PowerFull sensors to <br />
        monitor your fitness
      </p>
    ),
    button: (
      <Button
        title="submit"
        className="font-semibold text-lg mb-6 rounded-3xl py-3 px-6 
        bg-black text-white hover:bg-red-600 animate-pulse"
      >
        Shop Now
        <FaArrowRight className="inline-flex" />
      </Button>
    ),
  },
  {
    img: "/images/ElectronicsStoreThree.png",
    sale: "SALE UP TO 45% OFF",
    name: "Apple Watch Series",
    title: (
      <p className="font-semibold mb-6 text-lg text-pretty leading-6">
        Feature packed at a better value than ever PowerFull sensors to <br />
        monitor your fitness
      </p>
    ),
    button: (
      <Button
        title="submit"
        className="font-semibold text-lg mb-6 rounded-3xl py-3 px-6 
            bg-black text-white hover:bg-red-600 animate-pulse"
      >
        Shop Now
        <FaArrowRight className="inline-flex" />
      </Button>
    ),
  },
];

export const subBanners = [
  {
    img: "/images/sub-banner-2.png",
    title: "BIG SCREEN",
    name: "Smart Watch Series 7",
    price: (
      <div className="my-4 text-3xl flex justify-center items-center text-red-600 font-semibold">
        <MdAttachMoney />
        <span>35.00</span>
      </div>
    ),
    button: (
      <Button
        className="font-semibold text-lg mb-6 rounded-3xl py-3 px-6 
            bg-black text-white hover:bg-red-600 animate-pulse"
      >
        Shop Now
      </Button>
    ),
  },
  {
    img: "/images/sub-banner-1.png",
    title: "STUDIO DISPLAY",
    name: "600 nits of brightns",
    price: (
      <div className="my-4 text-3xl flex justify-center items-center text-red-600 font-semibold">
        <MdAttachMoney />
        <span>999.00</span>
      </div>
    ),
    button: (
      <Button
        className="font-semibold text-lg mb-6 rounded-3xl py-3 px-6 
            bg-black text-white hover:bg-red-600 animate-pulse"
      >
        Shop Now
      </Button>
    ),
  },
];

export const containers = [
  {
    img: "/images/Container1.png",
    title: "MacBook Air",
    description: (
      <p className="opacity-50 pr-6 pb-8">
        <b>25% </b>
        off for new customer We are work with global brand easiest.
      </p>
    ),
  },
  {
    img: "/images/Container2.png",
    title: "iPad Pro Max",
    description: (
      <p className="opacity-50 pr-6">
        Best off for new customer We are work with global brand easiest.
      </p>
    ),
  },
];

export const shopBands = [
  {
    title: "Speed Flow",
    img: "/images/bands/SpeedFlow.png",
  },
  {
    title: "Half Moon",
    img: "/images/bands/HalfMoon.png",
  },
  {
    title: "Hexaware",
    img: "/images/bands/Hexaware.png",
  },
  {
    title: "Crown & King",
    img: "/images/bands/CrownKing.png",
  },
  {
    title: "Orchid",
    img: "/images/bands/Orchid.png",
  },
  {
    title: "Trispace",
    img: "/images/bands/Trispace.png",
  },
  {
    title: "Star Inc",
    img: "/images/bands/StarInc.png",
  },
  {
    title: "Crown & King",
    img: "/images/bands/CrownKing.png",
  },
  {
    title: "Five Square",
    img: "/images/bands/FiveSquare.png",
  },
  {
    title: "Star Inc",
    img: "/images/bands/StarInc.png",
  },
  {
    title: "Crown & King",
    img: "/images/bands/CrownKing.png",
  },
  {
    title: "Half Moon",
    img: "/images/bands/HalfMoon.png",
  },
];

export const contactInfos = [
  {
    title: "Vị trí cửa hàng",
    description: "Quảng Yên - Quảng Ninh",
  },
  {
    title: "Hỏi đáp công việc",
    description: "tan2002@gmail.com",
  },
  {
    title: "Phone",
    description: "+84-868342028",
  },
  {
    title: "Giờ mở cửa",
    description: "Thứ 2 - 7 : 08.00 - 18.00",
  },
];
