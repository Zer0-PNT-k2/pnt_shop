import Button from '../button'

const Footer = () => {
  return (
    <div className="w-full py-16 bg-black text-white text-base">
      <div
        className="grid grid-cols-4 gap-8 font-['Open_Mono']
            mx-auto max-w-screen-xl h-44"
      >
        <div>
          <img
            className="w-32 h-32 p-6 rounded-full"
            alt="LOGO_SHOP"
            src="./images/LogoTS.png"
          />
          <p>
            Copyright © 2022 Team90Degree | Built with Drou by Team90Degree.
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-2xl mb-4">Information</h1>
          <ul>
            <li>
              <Button className="hover:text-red-500">Product Support</Button>
            </li>
            <li>
              <Button className="hover:text-red-500">Checkout</Button>
            </li>
            <li>
              <Button className="hover:text-red-500">License Policy</Button>
            </li>
            <li>
              <Button className="hover:text-red-500">Affiliate</Button>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-2xl mb-4">Customer Service</h1>
          <ul>
            <li>
              <Button className="hover:text-red-500">Help Center</Button>
            </li>
            <li>
              <Button className="hover:text-red-500">Redeem Voucher</Button>
            </li>
            <li>
              <Button className="hover:text-red-500">Contact Us</Button>
            </li>
            <li>
              <Button className="hover:text-red-500">Policies & Rules</Button>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-2xl mb-4">Information</h1>
          <p>
            Download our App and get extra 15% Discount on your first Order..!
          </p>
          <div className="flex gap-2 mt-12">
            <Button>
              <img
                className=" h-auto rounded-sm"
                alt="Google Play"
                src="./images/footer/GooglePlay.png"
              />
            </Button>
            <Button>
              <img
                className=" h-auto rounded-sm"
                alt="App Store"
                src="./images/footer/AppStore.png"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
