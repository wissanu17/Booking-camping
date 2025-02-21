import { Button } from "../ui/button";
import { RotateCw } from "lucide-react";
const Buttons = ({ text, isPending }) => {
  return (
    <Button disabled={isPending} className="capitalize mt-2">
      {isPending ? (
        <>
          <RotateCw className="animate-spin" />
          <span>Please wait jaa...</span>
        </>
      ) : (
        // text on Button
        <p>{text}</p>
      )}
    </Button>
  );
};
export default Buttons;