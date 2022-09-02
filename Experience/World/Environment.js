import * as THREE from "three";
import Experience from "../Experience";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        
        this.setSunlight();
    }

    //Controlling Shadows
    setSunlight(){
        this.sunLight = new THREE.DirectionalLight("#ffffff", 1.5);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(3072,3072);
        this.sunLight.shadow.normalBias = .005; 
        this.sunLight.position.set(2,6,3);
        this.scene.add(this.sunLight);

        this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
        this.scene.add(this.ambientLight);

        this.pointLight = new THREE.PointLight("#ffffff", 1.5);
        this.pointLight.position.set(0,0,2);
        this.scene.add(this.pointLight);
    }

    resize() {

    }

    update() {
    }
}
