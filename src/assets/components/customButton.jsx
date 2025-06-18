const CustomButton = ({
  icon,
  text,
  hasBorder = false,
  bgColor = "bg-blue-500",
  iconHoverColor = "white", // Default hover color
  onClick
}) => {
  return (
    <button
      className={`
        flex items-center gap-2 p-4 font-semibold rounded-xl cursor-pointer
        ${hasBorder ? "border-[1px] border-black/10" : "border-none"}
        ${bgColor}
        hover:text-white
        hover:bg-black
        transition-colors duration-200
        group
      `}
      onClick={onClick}
    >
      {icon && (
        <span className={`text-lg group-hover:[&>img]:invert`}>{icon}</span>
      )}
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;
