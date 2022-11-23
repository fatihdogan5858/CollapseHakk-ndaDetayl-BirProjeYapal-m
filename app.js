const toggles = document.querySelectorAll(".faq-toggle");
toggles.forEach((toggle) => { /**toggle içine gir gezin , gezinirken gezindiğin şeylerede ((toggle))  adını ver => ve toggle lara */
    toggle.addEventListener("click", () => { /**toggle lara etkinlik ekle bu etkinlik click olunca gerçekleşsin */
        toggle.parentNode.classList.toggle("active"); /**toggle.parentNode togle ın parent node si üst düğümğ ana kısmına gel burada faq-container yazan yerine gel classList ine ulaş ve toggle ver yani hem açma hem kapama buna active ekle */
}) 
})