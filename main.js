let galleryMenuItems = document.querySelectorAll('#works .gallery-menu-item');
let galleryImages = document.querySelectorAll('#works .gallery .hover')

for (let i = 0; i < galleryMenuItems.length; i++) {
    galleryMenuItems[i].onclick = function(e){
        e.preventDefault();
        galleryMenuItems.forEach(item => {
            if (item.parentElement.classList == "active"||"ml-2 active") {
                item.parentElement.classList.remove("active");
                return;
            }
        })
        this.parentElement.classList.add("active")
        galleryImages.forEach(img => {
            if(i == 0){
                img.classList.remove("d-none");
                return
            }
            if (img.getAttribute("data-id") == (i)) {
                img.classList.remove("d-none")
            }
            else{
                img.classList.add("d-none")
            }
        });
    }    
}

