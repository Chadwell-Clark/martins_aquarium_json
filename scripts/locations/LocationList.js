import { Location } from "./Location.js";
import { getLocation } from "./LocationData.js";

export const LocationList = () => {
    const allLocations = getLocation();
    const LocDOMLocation = document.querySelector("#locationList");
    let locHTML = "";
    for (const location of allLocations) {
        locHTML += Location(location);
    }
    LocDOMLocation.innerHTML += locHTML;
};