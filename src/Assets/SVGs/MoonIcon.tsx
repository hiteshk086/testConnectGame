import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MoonIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="50.000000pt"
      height="50.000000pt"
      viewBox="0 0 50.000000 50.000000"
      {...props}>
      <Path
        d="M209 442C79 374 51 204 153 100c60-62 150-85 226-59 41 14 39 30-6 60-45 28-83 98-83 149s38 121 83 149c45 30 47 46 6 60-55 19-113 13-170-17zm98-51c-75-83-75-199 0-282l35-39h-34c-18 0-54 10-78 22-132 67-132 249 0 316 24 12 60 22 78 22h34l-35-39z"
        transform="matrix(.1 0 0 -.1 0 50)"
      />
    </Svg>
  );
}

export default MoonIcon;
