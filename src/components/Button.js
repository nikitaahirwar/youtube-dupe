const Button = ({ name }) => {
  return (
    <div>
      <button className="md:text-base text-xs px-1 md:px-5 md:py-2 py-1 md:m-2 m-1 bg-gray-200 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
