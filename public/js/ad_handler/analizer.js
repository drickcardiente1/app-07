import { loader_animation } from "./load_animator"

export class analizer {
    constructor(url) {
        this.url = url;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}