import { AiFillVideoCamera } from "react-icons/ai";
import { BiDumbbell } from "react-icons/bi";
import { FaInfoCircle, FaKissWinkHeart, FaRainbow } from "react-icons/fa";

const IconToComponentMap = {
    kiss: FaKissWinkHeart,
    rainbow: FaRainbow,
    dumbbell: BiDumbbell,
    camera: AiFillVideoCamera,
  };
  
export const renderIconToComponent = (icon) => {
    if (typeof IconToComponentMap[icon] !== 'undefined') {
        return IconToComponentMap[icon];
    }
    return FaInfoCircle;
};