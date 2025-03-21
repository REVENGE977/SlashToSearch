/**
 * @name SlashToSearch
 * @description Whenever the slash key is pressed while in the main menu, the search bar will be focused.
 * @updateUrl https://raw.githubusercontent.com/REVENGE977/SlashToSearch/main/SlashToSearch.plugin.js
 * @version 1.0.1
 * @author REVENGE977
 */

document.addEventListener("keyup", (e) => {
    if(e.key == "/") {
        console.log("[ SLASHTOSEARCH ] slash pressed, focusing searchbar.")
        document.getElementsByClassName("search-input-IQ0ZW")[0].click()
        document.querySelector("div.search-bar-h60ja.search-bar-container-asfq1.active > input").focus();
    }
})
