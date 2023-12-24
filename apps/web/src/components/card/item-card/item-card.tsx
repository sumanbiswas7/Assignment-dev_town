import classes from "./item-card.module.css";

import { Button } from "../../ui/button/button";
import { Mobile } from "@pineapple/types";

export function ItemCard({ item }: { item: Mobile }) {
   return (
      <div className={classes.card}>
         <img src={item.img} className={classes.item_img} />
         <div className={classes.info_cont}>
            <h4>{item.title}</h4>
            <p>
               <span>Memory:</span> {item.ram}
            </p>
            <p>
               <span>Storage:</span> {item.rom}
            </p>
            <div className={classes.tags}>{item.tags?.map((t) => <div className={classes.tag}>{t}</div>)}</div>
            <div className={classes.divider} />
            <p className={classes.price}>{item.price}/-</p>
            <Button variant="filled" size="sm">
               Buy Now
            </Button>
         </div>
      </div>
   );
}
