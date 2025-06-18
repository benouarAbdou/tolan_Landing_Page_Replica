const CustomButton = ({
  icon,
  text,
  hasBorder = false,
  bgColor = "bg-blue-500",
  onClick
}) => {
  return (
    <button
      className={`
        flex items-center gap-2 p-4 font-semibold rounded-xl
        ${hasBorder ? "border border-black/10" : "border-none"}
        ${bgColor}
         hover:text-white
         hover:bg-black
        transition-colors duration-200
      `}
      onClick={onClick}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;
