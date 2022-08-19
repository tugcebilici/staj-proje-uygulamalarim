/* ELEMANLARI OLUŞTURMA */
const container = document.getElementById("modal-container");
  

function elemanOlustur() {
    
    const modal = document.createElement("div");
    modal.className = "modal__content";
    modal.id="modalContent";
    const close = document.createElement("div");
    close.className = "modal__close close-modal"
    const ikon = document.createElement("i");
    ikon.className = "bx bx-x"
    const img = document.createElement("img");
    img.setAttribute('src', 'assets/img/star-trophy.png');
    img.className = "modal__img";
    const baslık = document.createElement("h1");
    baslık.className = "modal__title";
    baslık.innerHTML = "kazandınız!!"
    const paragraf = document.createElement("p");
    paragraf.className = "modal__description"
    paragraf.innerHTML = "Kapatmak için kapat butonuna basınız..";
    const buton = document.createElement("button");
    buton.className = "modal__button-link close-modal";
    buton.innerHTML = "kapat";
    /*HTML SAYFASINA DAHİL ETMEK */
    container.appendChild(modal);
    close.appendChild(ikon);
    modal.appendChild(close);
    modal.appendChild(img);
    modal.appendChild(baslık);
    modal.appendChild(paragraf);
    modal.appendChild(buton);

}
            



   
const showModal = (openButton, modalContent) => {
    const openBtn = document.getElementById(openButton)
        // modalContainer = document.querySelector(".modal__container")
        const container = document.getElementById("modal-container");
console.log(container);

    if (openBtn && container) {
        openBtn.addEventListener('click', () => {
     
        elemanOlustur();
            container.classList.add('show-modal')
        
        })
    }
}    

showModal('open-modal', 'modal-container')

/*=============== MODAL KAPATMA ===============*/
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal() {
    const container = document.querySelector(".modal__container");
    container.classList.remove('show-modal');
  
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))



//  <div class="modal__content">
// <div class="modal__close close-modal" title="Close">
//     <i class='bx bx-x'></i>
// </div>

// <img src="assets/img/star-trophy.png" alt="" class="modal__img">

// <h1 class="modal__title">Kazandınız!!</h1>
// <p class="modal__description">Kapatmak için kapat butonuna basınız..</p>



// <button class="modal__button-link close-modal">
//     kapat
// </button>
// </div> 