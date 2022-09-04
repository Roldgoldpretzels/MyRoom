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
            "(min-width: 969px)": function() {
                console.log("fired desktop")
            },
            "(min-width: 969px) and (max-width: 968px)": function() {
                // The ScrollTriggers created inside these functions are segregated and get
                // reverted/killed when the media query doesn't match anymore. 
              },
            "(max-width: 968px)": function() {
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
