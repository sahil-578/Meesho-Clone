import womenEthnicData from "../submenu_data/womenEthnic.js";
import womenWesternData from "../submenu_data/womenWestern.js";
import men from "../submenu_data/men.js";
import kids from "../submenu_data/kids.js";
import homeKitchen from "../submenu_data/h&k.js";
import beautyHealth from "../submenu_data/b&h.js";
import jewelleryAccessories from "../submenu_data/j&a.js";
import bagsFootwear from "../submenu_data/b&f.js";
import electronics from "../submenu_data/electronics.js";


let inputSearch = document.querySelector(".inputBox");

// for input search bar
inputSearch.addEventListener("keydown", () => {
    if (inputSearch.value) {
        document.getElementById("closeSearchBar").style.display = "block";
    }
    else {
        document.getElementById("closeSearchBar").style.display = "none";
    }
})

function renderSubMenu(id, data) {
    const temp = document.getElementById(id);
    const list = data.map((el) => {
      return `
        <div class="column">
          <h4>${el.heading}</h4>
          <ul>
            ${el.data.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `;
    }).join("");
    temp.innerHTML = list;
}


renderSubMenu("womenEthic", womenEthnicData);
renderSubMenu("womenWestern", womenWesternData);
renderSubMenu("men", men);
renderSubMenu("kids", kids);
renderSubMenu("HomeAndKitchen", homeKitchen);
renderSubMenu("beautyAndHealth", beautyHealth);
renderSubMenu("JewelleryAndAccessories", jewelleryAccessories);
renderSubMenu("BagsFootWareId", bagsFootwear);
renderSubMenu("ElectronicsId", electronics);