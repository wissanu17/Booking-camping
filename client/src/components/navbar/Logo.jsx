import { Link } from "react-router";
import { Button } from "../ui/button";
import { Trees } from "lucide-react";

const Logo = () => {
  return (
    <Button
      asChild
      variant="ghost"
      className="flex flex-col items-center gap-0 bg-white border border-gray-300 shadow-sm rounded-lg p-3"
    >
      <Link to="/">
        <Trees size={40} className="text-green-700" />
        <span className="text-xs text-gray-700">Poate Camping</span>
      </Link>
    </Button>
  );
};

export default Logo;