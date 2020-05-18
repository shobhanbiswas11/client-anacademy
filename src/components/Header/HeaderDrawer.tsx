import * as React from "react";
import { Drawer, Paper } from "@material-ui/core";

const HeaderDrawer: React.SFC<{
  open: boolean;
  hadleDrawerClose: () => void;
}> = ({ open, hadleDrawerClose, children }) => {
  return (
    <div>
      <Drawer anchor="right" open={open} onClose={hadleDrawerClose}>
        {children}
      </Drawer>
    </div>
  );
};

export default HeaderDrawer;
