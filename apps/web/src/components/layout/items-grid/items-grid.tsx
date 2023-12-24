import { ItemCard } from "../../card/item-card/item-card";
import classes from "./items-grid.module.css";

import DUMMY_ITEMS from "../../../data/dummy-items.json";
import { Mobile } from "@pineapple/types";
import { useAtom } from "jotai";
import { queryAtom } from "../../../atoms/search-atom";

export function ItemsGrid() {
   const [query, setQuery] = useAtom(queryAtom);

   const data = query.flag ? query.data || [] : DUMMY_ITEMS;

   if (query.flag && query.data?.length === 0) return <p>No Search Result</p>;

   return (
      <div className={classes.grid_container}>
         {data.map((mob: Mobile) => (
            <ItemCard item={mob} />
         ))}
      </div>
   );
}
