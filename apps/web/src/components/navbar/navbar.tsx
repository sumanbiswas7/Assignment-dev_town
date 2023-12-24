import classes from "./navbar.module.css";
import { Button } from "../ui/button/button";

import logoDarkUrl from "../../assets/graphics/logo-dark.svg";

export function NavBar(): JSX.Element {
   return (
      <div className={classes.nav_cont}>
         <img src={logoDarkUrl} alt="Pineapple.svg" className={classes.logo} />

         <div className={classes.btn_cont}>
            <Button>Privacy Policy</Button>
            <Button variant="filled">Contact Us</Button>
         </div>

         <div className={`${classes.btn_cont} ${classes.hide_on_big}`}>
            <Button variant="filled">Contact Us</Button>
         </div>

         <div className={classes.border} />
      </div>
   );
}
