import { NavBar } from "../components/navbar/navbar";

import classes from "./home.module.css";

import blobUrl from "../assets/graphics/blob.svg";
import mobUrl from "../assets/mobiles/mobile-1.webp";
import { Button } from "../components/ui/button/button";

export default function HomePage() {
   return (
      <main>
         <NavBar />

         {/* Content */}
         <div className={classes.container}>
            <div className={classes.left_box}>
               <div className={classes.txt_cont}>
                  <p>Pineapple A25</p>
                  <h1>Discover Effortless Living!</h1>
                  <p>
                     Experience Swift Simplicity Beyond iPhone 16 Pro MaxAll under 20k INR: Transform, Customize, and
                     Thrive Upgrade Your Lifestyle with our finest Enhanced Ecosystem
                  </p>
                  <Button variant="filled">Buy Now</Button>
               </div>
            </div>
            <div className={classes.right_box}>
               <div className={classes.img_cont}>
                  <img className={classes.blob} alt="blob.svg" src={blobUrl} />
                  <img className={classes.mobile} alt="mobile.webp" src={mobUrl} />
               </div>
            </div>
         </div>
      </main>
   );
}
