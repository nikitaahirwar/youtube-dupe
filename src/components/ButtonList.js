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
  "Podcast",
  "Coding",
  "Trailers",
  "Software Engineering",
  "Dramedy",
  "Horror Movie",
  "Romatic Movie",
  "Playlist",
  "Kareena",
  "Tapsi",
  "Nikita",
];
const ButtonList = () => {
  return (
    <div className="flex w-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {list.map((val) => (
        <div key={val} className="shrink-0">
          <Button name={val} />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
