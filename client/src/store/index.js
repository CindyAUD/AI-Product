import {proxy} from 'valtio';

const state = proxy({
//default values 
    intro: true, //checks if we are on the homepage
    color: '#EFBD48',
    isLogoTexture:true, //checks if the logo is being displayed on the shirt
    isFullTexture:false,
    logoDecal: './threejs.png', //initial logo on the shirt
    fullDecal: './threejs.png' 
})

export default state;