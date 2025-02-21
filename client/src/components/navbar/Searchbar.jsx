import { Input } from "../ui/input";

// rafce
const Searchbar = () => {
  return (
    <Input
      type="text"
      placeholder="Search ... (can't use right now.)"
      className="max-w-sm bg-white px-4 py-2 rounded-md focus:outline-none"
    />
  );
};

export default Searchbar;
