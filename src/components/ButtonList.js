import Button from "./Button";

const list = [
  "All",
  "Movie",
  "Cricket",
  "Dance",
  "Songs",
  "Gaming",
  "Drawing",
  "News",
  "Mixes",
  "Katrina",
  "Comedy",
  "Cosmetics",
  "Garba",
  "Live",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((val, index) => (
        <Button key={index} name={val} />
      ))}
    </div>
  );
};

export default ButtonList;
