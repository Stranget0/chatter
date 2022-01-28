import Svg, { Circle, Path } from "react-native-svg";

const PlusIcon = () => (
  <Svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <Circle cx="22" cy="22" r="22" fill="white" />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 11.5C22.8284 11.5 23.5 12.1716 23.5 13V20.5H31C31.8284 20.5 32.5 21.1716 32.5 22C32.5 22.8284 31.8284 23.5 31 23.5H23.5V31C23.5 31.8284 22.8284 32.5 22 32.5C21.1716 32.5 20.5 31.8284 20.5 31V23.5H13C12.1716 23.5 11.5 22.8284 11.5 22C11.5 21.1716 12.1716 20.5 13 20.5H20.5V13C20.5 12.1716 21.1716 11.5 22 11.5Z"
      fill="#5603AD"
    />
  </Svg>
);

export default PlusIcon;
