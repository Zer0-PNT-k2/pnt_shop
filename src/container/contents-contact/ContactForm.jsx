import Button from '../../components/button';
import Input from '../../components/input';
import Wrapper from '../../components/wrapper';

const ContactForm = () => {
  return (
    <Wrapper>
      <div className="text-center text-base mb-24">
        <h1 className="text-4xl font-normal my-10">Hỏi chúng tôi bất cứ điều gì ở đây!</h1>
        <form action="">
          <div className="grid grid-cols-2 gap-6 font-['Open_Serif']">
            <Input
              type="text"
              id="name"
              placeholder="Name *"
              className="h-6 w-full py-4 pl-3 outline-none 
                    border-solid border-2 bg-gray-100
                    rounded-2xl focus:border-red-500"
            />
            <Input
              type="email"
              id="email"
              placeholder="Email *"
              className="h-6 w-full py-4 pl-3 outline-none 
                    border-solid border-2 bg-gray-100
                    rounded-2xl focus:border-red-500"
            />
          </div>
          <div className="my-5">
            <Input
              type="email"
              id="email"
              placeholder="Email *"
              className="h-6 w-full py-4 pl-3 outline-none 
                    border-solid border-2 bg-gray-100
                    rounded-2xl focus:border-red-500"
            />
          </div>
          <div>
            <textarea
              type="message"
              id="message"
              placeholder="Message *"
              className="h-52 w-full px-3.5 py-2.5 outline-none 
                    border-solid border-2 bg-gray-100
                    rounded-2xl focus:border-red-500"
            />
          </div>
          <div className="my-5">
            <Button
              className="font-normal text-base mb-6 rounded-full py-3 px-12 
                        bg-red-600 text-white hover:opacity-"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
