import { useRef } from "react";
import classes from "./modal.module.css";
import { useAtom } from "jotai";
import { modalAtom, queryAtom } from "../../../atoms/search-atom";

import DUMMY_ITEMS from "../../../data/dummy-items.json";
import { Button } from "../../ui/button/button";

export function Modal({ onClose, open }: Props) {
   const [query, setQuery] = useAtom(queryAtom);
   const [modal, setModal] = useAtom(modalAtom);

   const inputRef = useRef<HTMLInputElement | null>(null);

   function handleFilterByPrice(e: React.ChangeEvent<HTMLSelectElement>) {
      const selected = e.target.value;

      const filteredItems = DUMMY_ITEMS.filter((item) => {
         if (item.price < parseInt(selected)) return true;
         return false;
      });

      setQuery({ flag: true, data: filteredItems });
      setModal(false);
   }
   function handleFilterByRam(e: React.ChangeEvent<HTMLSelectElement>) {
      const selected = e.target.value;

      const filteredItems = DUMMY_ITEMS.filter((item) => {
         if (item.ram === selected) return true;
         return false;
      });

      setQuery({ flag: true, data: filteredItems });
      setModal(false);
   }
   function handleFilterByRom(e: React.ChangeEvent<HTMLSelectElement>) {
      const selected = e.target.value;

      const filteredItems = DUMMY_ITEMS.filter((item) => {
         if (item.rom === selected) return true;
         return false;
      });

      setQuery({ flag: true, data: filteredItems });
      setModal(false);
   }
   function handleFilterByProcessor(e: React.ChangeEvent<HTMLSelectElement>) {
      const selected = e.target.value;

      const filteredItems = DUMMY_ITEMS.filter((item) => {
         for (const tag of item.tags) {
            if (tag.includes(selected)) return true;
         }

         return false;
      });

      setQuery({ flag: true, data: filteredItems });
      setModal(false);
   }
   function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
      if (e.key !== "Enter") return;
      const slug = inputRef?.current?.value;
      if (!slug) return;

      const stripped = slug.toLowerCase().replaceAll(" ", "");
      const filteredItems = DUMMY_ITEMS.filter((item) => {
         const strippedTitle = item.title.toLowerCase().replaceAll(" ", "");
         if (strippedTitle.includes(stripped)) return true;
         return false;
      });

      setQuery({ flag: true, data: filteredItems });
      setModal(false);
   }
   function clearSearch() {
      const curInp = inputRef.current;
      if (curInp) curInp.value = "";

      setQuery({ flag: false, data: null });
      setModal(false);
   }

   return (
      <div className={classes.page} style={{ display: open ? undefined : "none" }}>
         <div className={classes.close_backdrop} onClick={onClose} />

         {/* Main Content */}
         <div className={classes.modal}>
            <h3>Search/Filter Products</h3>
            <input
               onKeyDown={handleSearch}
               ref={inputRef}
               placeholder="Search by model name ↲"
               className={classes.search}
            />
            <div className={classes.two_col}>
               <div>
                  <p>Filter By Price</p>
                  <select onChange={handleFilterByPrice}>
                     <option value={15000}>Less than 15,000</option>
                     <option value={18000}>Less than 18,000</option>
                     <option value={20000}>Less than 20,000</option>
                  </select>
               </div>
               <div>
                  <p>Filter By Ram</p>
                  <select onChange={handleFilterByRam}>
                     <option value={"6GB"}>6GB</option>
                     <option value={"8GB"}>8GB</option>
                     <option value={"12GB"}>12GB</option>
                     <option value={"16GB"}>16GB</option>
                  </select>
               </div>
            </div>
            {/* 2nd Row */}
            <div className={classes.two_col}>
               <div>
                  <p>Filter By Storage</p>
                  <select onChange={handleFilterByRom}>
                     <option value={"32GB"}>32GB</option>
                     <option value={"64GB"}>64GB</option>
                     <option value={"128GB"}>128GB</option>
                     <option value={"512GB"}>512GB</option>
                  </select>
               </div>
               <div>
                  <p>Filter Processor</p>
                  <select onChange={handleFilterByProcessor}>
                     <option value={"A14"}>A14 Ionic</option>
                     <option value={"A15"}>A15 Ionic</option>
                     <option value={"A19"}>A19 Ionic</option>
                     <option value={"A20"}>A20 Ionic</option>
                     <option value={"A21"}>A21 Ionic</option>
                  </select>
               </div>
            </div>

            <Button variant="filled" size="sm" style={{ marginTop: 20 }} onClick={clearSearch}>
               Clear Search
            </Button>
         </div>
      </div>
   );
}

interface Props {
   onClose: () => any;
   open: boolean;
}
