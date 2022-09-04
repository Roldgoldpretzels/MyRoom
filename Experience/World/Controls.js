import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import ASScroll from "@ashthornton/asscroll";

export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.world.room.actualRoom;

        GSAP.registerPlugin(ScrollTrigger);

        this.setScrollTrigger();

    }

    setScrollTrigger() {
        
        ScrollTrigger.matchMedia({
	
            // large
            "(min-width: 800px)": function() {
                console.log("fired desktop")
            },

          

            "(max-width: 799px)": function() {
                console.log("fired mobile")

            },
              
            // all 
            "all": function() {

            }
              
          }); 
    }

    resize() {

    }

    update() {
    }
}
