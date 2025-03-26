let index = 0;
        const images = document.querySelectorAll(".bottom-container img");
        const gallery = document.getElementById("imageGallery");

        function animateGallery() {
            images.forEach(img => img.classList.remove("active"));
            images[index].classList.add("active");
            gallery.scrollLeft += 110;
            index = (index + 1) % images.length;
        }
        setInterval(animateGallery, 1500);