import React from "react";
import { AppContext } from "../App";

interface Props {
  src: string;
  height: number;
}

export function Image({ src, height }: Props) {
  const { isDesktop } = React.useContext(AppContext);

  return (
    <div>
      {isDesktop ? (
        <img src={src} height={height} />
      ) : (
        <img src={src} width={"100%"} />
      )}
    </div>
  );
}
