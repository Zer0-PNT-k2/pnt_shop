import { MdAttachMoney } from "react-icons/md";

const Price = (props) => {
  return (
    <div className="flex justify-center items-center text-red-600 font-semibold text-lg">
      <MdAttachMoney />
      <span>{props.price}</span>
    </div>
  );
};

export default Price;
