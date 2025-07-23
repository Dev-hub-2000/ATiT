document.addEventListener("DOMContentLoaded", function () {
    // Your footer HTML code
    var footerCode = `
    <footer id="footer" class="footer pt-5 pb-3 ">


    <div class="container">
        <div class="position-relative d-none d-lg-block">
             <div class="comet row ">
                <div class=" col-lg-3"><div class=""></div></div>
                 <div class=" col-lg-3 cometlines"><div class="cometline"></div></div>
                 <div class=" col-lg-3 cometlines"><div class="cometline"></div></div>
                 <div class=" col-lg-3 cometlines"><div class="cometline"></div></div>           
            </div>
        </div>
        
        <div class="lines d-lg-none">   
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>

        </div>

        <div class="row gy-3 mt-3">
            
            <div class="col-lg-3 col-md-6 d-flex address" data-aos="fade-up" data-aos-duration="700">
            <a href="https://maps.app.goo.gl/Cx14du1boxQ4R8MY9" target="_blank" class="map"><i class="bi bi-geo-alt icon"></i></a>
                <div>
                    <h4>Address</h4>
                    <p>
                        Tidel Park, GF-04,<br>
                        No-4, Rajiv Gandhi Salai,<br>
                        Taramani,<br>
                        Chennai - 600113.<br>
                    </p>
                </div>

            </div>

            <div class="col-lg-3 col-md-6 footer-links d-flex" data-aos="fade-up" data-aos-duration="800">
                <i class="bi bi-telephone icon"></i>
                <div>
                    <h4>Connect</h4>
                    <p>
                        <strong>Phone:</strong> 78457 21438
                        <br>
                        <strong>Phone:</strong> 73581 07180
                        <br>
                        <strong>Email:</strong> info_atit@turn-ai.in<br>
                    </p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 footer-links d-flex" data-aos="fade-up" data-aos-duration="900">
                <i class="bi bi-book-half icon"></i>
                <div class="text-decoration-none">
                    <h4>Skills</h4>
                    <div class="text-decoration-none courses-links">
                        <a href="courses.html" onclick="sessionStorage.setItem('cousrelist', '2')" class="text-decoration-none"><strong>Software Developement</strong></a>
                        <br>
                        <a href="courses.html" onclick="sessionStorage.setItem('cousrelist', '1')" class="text-decoration-none"><strong>Software Testing</strong></a>
                        <br>
                        <a href="courses.html" onclick="sessionStorage.setItem('cousrelist', '3')" class="text-decoration-none"><strong>Devops</strong></a>
                        <br>
                        <a href="courses.html" onclick="sessionStorage.setItem('cousrelist', '4')" class="text-decoration-none"><strong>Machine Learning & AI</strong></a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 footer-links " data-aos="fade-up" data-aos-duration="1000">
                <h4 class="text-center text-md-start">Follow Us</h4>
                <div class="social-links d-flex justify-content-center justify-content-md-start">
                    <!-- <a href="#" class="twitter"><i class="bi bi-twitter"></i></a> -->
                    <a href="https://www.facebook.com/atitchennai/" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/atitchennai/" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href=" https://www.youtube.com/@ATITchennai" target="_blank" class="youtube"><i class="bi bi-youtube"></i></a>
                    <!-- <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a> -->
                </div>
            </div>

        </div>
    </div>
    <div class="container">
        <div class="copyright">
            Copyrights  &copy; <strong><span>ATIT. </span></strong>All Rights Reserved. <a href="./privacyPolicy.html" class = "d-block d-md-inline position-relative">Privacy policy</a>
        </div>

    </div>


</footer>
    `;

    var footerElement = document.getElementById("footerElement");
    if (footerElement) {
        footerElement.innerHTML = footerCode;
        AOS.init();
    }
});


$(document).ready(function () {
    // Change the href to a new value
    // $("footer .courses-links a").attr("href", "one");
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = './assets/imagesandvectors/vectors/logo.png'; 
    
    if ($('.coursesList').length > 0) {
      
        $('footer .courses-links a').attr('href', '../../courses.html');
        $('.copyright a').attr('href', '../../privacyPolicy.html');
             link.href = '../../assets/imagesandvectors/vectors/logo.png';
    }
    else if ($('.individualBlogs').length > 0) {
        $('footer .courses-links a').attr('href', '../courses.html');
        $('.copyright a').attr('href', '../privacyPolicy.html');
             link.href = '../assets/imagesandvectors/vectors/logo.png'; 
        }
    document.head.appendChild(link);
});
