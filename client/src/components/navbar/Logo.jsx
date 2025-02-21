import { Link } from "react-router";
import { Button } from "../ui/button";
import { Trees } from "lucide-react";

const Logo = () => {
  return (
    <Button asChild variant="ghost" className="flex flex-col items-center gap-1 text-lg font-bold">
      <Link to="/">
        <Trees size={100} className="text-green-700" />
        <span className="text-sm text-gray-700">Poate Camping</span>
      </Link>
    </Button>
  );
};

export default Logo;
