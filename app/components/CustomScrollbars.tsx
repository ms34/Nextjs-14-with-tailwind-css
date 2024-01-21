import React from "react";
import { ScrollbarProps, Scrollbars } from "react-custom-scrollbars-2";

export const CustomScrollbars: React.FC<ScrollbarProps> = (props) => {
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      autoHeight
      autoHeightMin={0}
      thumbMinSize={30}
      universal={true}
      {...props}
    />
  );
};
