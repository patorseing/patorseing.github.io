import { Hidden } from "@mui/material";

import SMUpView from "./smUpView";
import SMDownView from "./smDownView";

const Header = () => (
  <>
    <Hidden smDown>
      <SMUpView />
    </Hidden>
    <Hidden smUp>
      <SMDownView />
    </Hidden>
  </>
);

export default Header;