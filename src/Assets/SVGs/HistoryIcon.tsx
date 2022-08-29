import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HistoryIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="32.000000pt"
      height="32.000000pt"
      viewBox="0 0 32.000000 32.000000"
      {...props}>
      <Path
        d="M87 274c-4-4-7-45-7-91 0-77-1-83-21-83-16 0-20-5-17-27l3-28h190l3 83c3 75 5 82 23 82 17 0 20 6 17 33l-3 32-90 3c-50 1-94 0-98-4zm133-114c0-60-4-100-10-100-5 0-10 9-10 20 0 17-7 20-50 20h-50v160h120V160zm40 85c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zM180 70c0-6-27-10-60-10s-60 4-60 10 27 10 60 10 60-4 60-10z"
        transform="matrix(.1 0 0 -.1 0 32)"
      />
      <Path
        d="M120 220c0-5 18-10 40-10s40 5 40 10c0 6-18 10-40 10s-40-4-40-10zM120 180c0-5 18-10 40-10s40 5 40 10c0 6-18 10-40 10s-40-4-40-10zM120 140c0-5 11-10 25-10s25 5 25 10c0 6-11 10-25 10s-25-4-25-10z"
        transform="matrix(.1 0 0 -.1 0 32)"
      />
    </Svg>
  );
}

export default HistoryIcon;
