import { ItemCard } from "../../card/item-card/item-card";
import classes from "./items-grid.module.css";

import DUMMY_ITEMS from "../../../data/dummy-items.json";
import { Mobile } from "@pineapple/types";

export function ItemsGrid() {
   return (
      <div className={classes.grid_container}>
         {DUMMY_ITEMS.map((mob: Mobile) => (
            <ItemCard item={mob} />
         ))}
      </div>
   );
}
