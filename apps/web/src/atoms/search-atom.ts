import { Mobile } from "@pineapple/types";
import { atom } from "jotai";

export const modalAtom = atom(false);
export const queryAtom = atom<QueryAtom>({ flag: false, data: null });

interface QueryAtom {
   flag: boolean;
   data: Mobile[] | null;
}
