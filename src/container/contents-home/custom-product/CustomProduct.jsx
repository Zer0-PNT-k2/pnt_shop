import { containers } from "../../../constants";
import Wrapper from '../../../components/wrapper'

const CustomProduct = () => {
  return (
    <div className="w-full py-4 bg-gray-200 text-base">
      <Wrapper>
        <div className="flex grid grid-cols-3 gap-8 my-16">
          <div className="font-['Open_Serif'] w-full h-96 bg-white pt-8 pl-16">
            <h1 className="text-2xl font-semibold pb-4">Custom product</h1>
            <ul className="list-disc ml-4 text-base">
              <li>Good Service</li>
              <li>New Development</li>
              <li>For Community</li>
              <li>Long Term Development</li>
              <li>Best sound box</li>
              <li>Save Our Planet</li>
              <li>People best choice</li>
              <li>Help People</li>
            </ul>
          </div>
          {containers.map((container, i) => {
            return (
              <div
                key={i}
                className="font-['Open_Serif'] w-full bg-white px-8 hover:shadow-2xl h-auto"
              >
                <img
                  className="mb-4"
                  src={container.img}
                  alt={container.title}
                />
                <h1 className="text-2xl font-semibold mb-3">
                  {container.title}
                </h1>
                {container.description}
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default CustomProduct;
