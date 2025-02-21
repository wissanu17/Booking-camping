import { useState } from "react";

const ThemeToggle = () => {
  // กำหนดสีพื้นหลัง 2 สี (เปลี่ยนตรงนี้ได้)
  const color1 = "#ffcc00"; // สีเหลือง
  const color2 = "#0066ff"; // สีน้ำเงิน

  const [isColor1, setIsColor1] = useState(true);

  const toggleBackground = () => {
    setIsColor1(!isColor1);
    document.body.style.backgroundColor = isColor1 ? color2 : color1;
  };

  return (
    <button
      onClick={toggleBackground}
      className="px-4 py-2 rounded-md border border-gray-400 text-white bg-gray-700 hover:bg-gray-800 transition"
    >
      0 1
    </button>
  );
};

export default ThemeToggle;
