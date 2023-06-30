import { body, btnCloseMenu, btnOpenMenu, companyBtn, companyOptions, featuresBtn, featuresOptions, menuMobileContainer } from "./domelements"

export const functionsNavMobile = () => {
    openMenu() 
    btnsMenu()
    closeMenu()
}

const openMenu = () => {
    btnOpenMenu.addEventListener('click', () => {
        menuMobileContainer.classList.remove('inactive')
        body.classList.add('body-fixed')
    })
}

const btnsMenu = () => {
    featuresBtn.addEventListener('click', () =>{
        featuresOptions.classList.toggle('inactive')
    })

    companyBtn.addEventListener('click', () =>{
        companyOptions.classList.toggle('inactive')
    })
}

const closeMenu = () =>{
    btnCloseMenu.addEventListener('click', () =>{
        menuMobileContainer.classList.add('inactive')
        body.classList.remove('body-fixed')
    })
}