import { ActionButton } from "../ui/action-button/action-button";

import classes from "./filter.module.css";
import filterUrl from "../../assets/icons/filter.svg";

export function Filter() {
   return (
      <div className={classes.filter_cont}>
         <h2>Discover All Models</h2>
         <ActionButton>
            <img src={filterUrl} style={{ width: 25 }} />
         </ActionButton>
      </div>
   );
}
