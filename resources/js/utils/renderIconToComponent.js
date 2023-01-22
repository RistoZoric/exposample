import {
  FaMapMarkerAlt, FaKissWinkHeart, FaRainbow, FaInfoCircle,
} from 'react-icons/fa';
import {
  ImTrophy,
} from 'react-icons/im';
import {
  TiChartLine,
} from 'react-icons/ti';
import {
  BiDumbbell,
} from 'react-icons/bi';
import {
  AiFillVideoCamera,
} from 'react-icons/ai';
import {
  IoFastFood,
  IoSparkles,
  IoBaseball,
  IoCar,
  IoMusicalNote,
  IoPaw,
  IoAirplane,
  IoGameController,
  IoPerson,
  IoHappy,
  IoGlasses,
  IoNewspaper,
  IoBuild,
  IoSchool,
  IoHardwareChip,
  IoHeart,
} from 'react-icons/io5';

const IconToComponentMap = {
  kiss: FaKissWinkHeart,
  rainbow: FaRainbow,
  dumbbell: BiDumbbell,
  camera: AiFillVideoCamera,
  food: IoFastFood,
  sparkles: IoSparkles,
  baseball: IoBaseball,
  trophy: ImTrophy,
  map: FaMapMarkerAlt,
  chart: TiChartLine,
  car: IoCar,
  music: IoMusicalNote,
  paw: IoPaw,
  airplane: IoAirplane,
  game: IoGameController,
  person: IoPerson,
  smiley: IoHappy,
  sunglasses: IoGlasses,
  newspaper: IoNewspaper,
  wrench: IoBuild,
  school: IoSchool,
  chip: IoHardwareChip,
  heart: IoHeart,
};

const renderIconToComponent = (icon) => {
  if (typeof IconToComponentMap[icon] !== 'undefined') {
    return IconToComponentMap[icon];
  }
  return FaInfoCircle;
};

export default renderIconToComponent;
