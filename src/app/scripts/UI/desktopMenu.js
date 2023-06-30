import { menuFeatures, menuCompany, buttonFeatures, buttonCompany } from "./domelements"

export const toggleDesktop = () => {
    toggleMenu(buttonFeatures, menuFeatures)
    toggleMenu(buttonCompany, menuCompany)
}

const toggleMenu = (openingEl, desktopMenu) => {
    openingEl.addEventListener('click', () =>{
        desktopMenu.classList.toggle('inactive')
})
}