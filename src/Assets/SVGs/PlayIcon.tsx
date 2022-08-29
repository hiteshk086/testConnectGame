import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PlayIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="50.000000pt"
      height="50.000000pt"
      viewBox="0 0 50.000000 50.000000"
      {...props}>
      <Path
        d="M100 250c0-104 3-190 7-190 10 0 323 184 323 190S117 440 107 440c-4 0-7-85-7-190zm187 64c57-32 103-61 103-64s-46-32-103-64c-56-33-117-68-134-79l-33-19v324l33-19c17-11 78-46 134-79z"
        transform="matrix(.1 0 0 -.1 0 50)"
      />
    </Svg>
  );
}

export default PlayIcon;
