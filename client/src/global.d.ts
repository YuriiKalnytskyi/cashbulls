declare module '*.jpg' {
  export default '' as string;
}
declare module '*.png' {
  export default '' as string;
}
declare module '*.svg' {
  export default '' as string;
}
declare module '*.gif' {
  export default '' as string;
}
declare module '*.mp4' {
  export default '' as string;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module 'react-input-date-mask';
declare module 'react-webcam';
