import iconCheck from "../../../assets/images/iconCheck.svg";

const Alert = () => {
  return (
    // padding: 14px 10px 14px 10px;
    <div className="flex absolute bg-[#52C41A] w-[320px] h-[105px] rounded-[6px] pt-[14px] pl-[10px] pb-[14px] pr-[10px] bottom-[50px] right-[50px] justify-start items-start">
      <img src={iconCheck} alt="check" />
      <div className="ml-[12px] text-white">
        <h3 className="text-[16px] font-[500]">Lorem ipsum dolor</h3>
        <p className="text-[12px] font-[400] m-0 p-0">
          Lorem ipsum dolor sit amet consectetur. Pulvinar facilisis cras ac a amet augue vel egestas urna. Neque
          habitant consectetur amet.
        </p>
      </div>
    </div>
  );
};

export default Alert;
