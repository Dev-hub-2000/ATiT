



// HTML code to insert after the existing div
var htmlCode = `
<div id="rocket-container" class="cursor" data-aos="zoom-in">
<!-- <img src="./assets/imagesandvectors/vectors/newww.gif" alt="Rocket" id="rocket"> -->
<dotlottie-player src="https://lottie.host/a3930b1d-eaf8-4fc4-a6b4-7ba7c5654523/tqWYmbEE3y.json"
    background="transparent" speed="1" id="rocket" loop autoplay></dotlottie-player>

</div>

<div
class="position-fixed z-3 bottom-0 d-flex align-items-center flex-column justify-content-center overflow-visible">

<div class="h-250px">
    <div class=" bell d-none overflow-visible position-relative" data-aos="fade-right" data-aos-duration="1000">
        <dotlottie-player src="https://lottie.host/7eea6db9-f536-4f25-9f36-55e284faf207/afUTIVqW70.json"
            background="transparent" speed="1" style="width: 90px;" loop autoplay></dotlottie-player>
        <span class="position-absolute top-0 start-50 d-none translate-middle badge rounded-pill bg-danger">
            New
        </span>
        <div class="cloud">
            <a href="placement.html"
                class="shadow1 cloud-text primary-text py-3 py-1 rounded-3 text-decoration-none d-block text-light">
                Pay After Placement
                <i class="fa-solid fa-caret-left"></i>
            </a>
        </div>
    </div>
    <a href="placement.html" class="popup pop-ani text-decoration-none">
        <span>P</span>
        <span>a</span>
        <span>y</span>
        <span> </span>
        <span>A</span>
        <span>f</span>
        <span>t</span>
        <span>e</span>
        <span>r</span>
        <span> </span>
        <span>P</span>
        <span>l</span>
        <span>a</span>
        <span>c</span>
        <span>e</span>
        <span>m</span>
        <span>e</span>
        <span>n</span>
        <span>t</span>
    </a>
    <div class="overflow-visible class-ico" data-aos="fade-right" data-aos-duration="1000" data-bs-toggle="modal"
        data-bs-target="#contact">
        <!-- <dotlottie-player src="https://lottie.host/c5554bef-2ea2-439f-ba03-150ec726c96e/0TSDow76Wl.json"
            background="transparent" speed="1" style="width: 80px;" loop autoplay></dotlottie-player>  -->

        <dotlottie-player title="contact"
            src="https://lottie.host/a335969b-c315-4035-be6b-d18bed4b5831/l73y30ZFSl.json"
            background="transparent" speed="1" style="width: 80px;" loop autoplay></dotlottie-player>
    </div>
</div>

<a href="https://api.whatsapp.com/send/?phone=%2B917845721438&text&app_absent=0" target="_blank" id="wa"
    class="cursor" data-aos="zoom-in" data-aos-duration="1000">
    <img src="../whatsapp.png" alt="whatsapp" class="img-fluid"
        style="width:70px">
</a>
</div>

<!-- course Modal -->
<div class="modal fade" id="contact" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered p-5">
    <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5 linear-gradient-text text-center" id="exampleModalLabel">Contact Form
            </h1>
            <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal"
                aria-label="Close"></button>
        </div>
        <div class="modal-body p-3">
            <form id="contactForm">
                <div class="form-floating">
                    <input type="text" class="form-control" id="fname" placeholder="Enter your name" required>
                    <label for="fname">Name <span class="text"> *</span></label>
                </div>
                <div class="form-floating">
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
                    <label for="email">Email <span class="text"> *</span></label>
                </div>
                <div class="form-floating">
                    <input type="number" class="form-control" id="phone" placeholder="Enter your phone number"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        maxlength="10" required>
                    <label for="phone">Phone Number <span class="text"> *</span></label>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" id="message" rows="3" placeholder="Enter your message"
                        style="height: 80px"></textarea>
                    <label for="message">Message <span>(Optional)</span></label>
                </div>
                <div id="output" class="text-center"></div>
                <div class="text-center"> <button type="submit"
                        class="btn btn-primary btn-block">Submit</button></div>
            </form>

        </div>
    </div>
</div>
</div>

<script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
`
     ;

var existingDiv = document.getElementById('footerElement');
existingDiv.insertAdjacentHTML('afterend', htmlCode);


$(document).ready(function () {
    // Change the href to a new value
    // $("footer .courses-links a").attr("href", "one");
    if ($('.individualBlogs').length > 0) {
        $('.popup').attr('href', '../placement.html');
        $('.copyright a').attr('href', '../privacyPolicy.html');
    }else if ($('.coursesList').length > 0) {
        $('.popup').attr('href', '../../placement.html');
        $('.copyright a').attr('href', '../../privacyPolicy.html');
    }

});

AOS.init();



