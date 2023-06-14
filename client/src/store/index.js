
// State File used in storing and retrieving application state
import { proxy } from "valtio";

// Define state (proxy simillar to usecontext)
const state = proxy({
    // Defining state
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'

});

export default state;