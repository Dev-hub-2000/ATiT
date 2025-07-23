document.addEventListener("DOMContentLoaded", function () {
    // Your footer HTML code
    var navCode = `
    <!-- nav starts -->

    <div class="nav-holder">
       <nav class="navbar navbar-expand-lg py-0 col-lg-10  mx-auto">
           <div class="container-fluid p-0 d-flex align-items-start" data-aos="fade-down"
               data-aos-anchor-placement="bottom-bottom" data-aos-duration="500">
               <a class="navbar-brand fw-semibold fs-4 rounded-bottom-3 text-white shadow1" href="../../index.html">
                   <img src="../../assets/imagesandvectors/vectors/atit_logo.png" alt="logo">
               </a>
               <button class="navbar-toggler d-none shadow-none ms-auto" type="button" data-bs-toggle="collapse"
                   data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                   aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
               </button>
               <button class="d-lg-none ms-auto ms-md-0 canvas-bar bg-primary border-0 p-3" type="button"
                   data-bs-toggle="offcanvas" data-bs-target="#navbar" aria-controls="navbar">
                   <i class="fa-solid fa-bars fa-xl text-white"></i>
               </button>
               <div class="collapse navbar-collapse position-relative" id="navbarSupportedContent">
                   <ul class="navbar-nav shadow1 ms-auto mb-0 bg-light overflow-hidden rounded-bottom-3">
                       <li class="nav-item">
                           <a class="nav-link" aria-current="page" href="../../index.html">Home</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link" href="../../about.html">About</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link" href="../../contact.html">Contact</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link active" href="../../courses.html">Course</a>
                       </li>
                       <li class="nav-item">
                           <a title="Pay after Placement" class="nav-link" href="../../placement.html">PAP</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link" href="../../Blog2.html">Blog</a>
                       </li>
                   </ul>
               </div>
           </div>
       </nav>
   </div>

   <!-- offcanvas navbar -->
   <div class="offcanvas offcanvas-start" tabindex="-1" id="navbar" aria-labelledby="navbar">
       <div class="offcanvas-header p-0 px-2">
           <a class="navbar-brand fw-semibold fs-4 rounded-bottom-3 text-white" href="../../index.html">
               <img src="../../assets/imagesandvectors/vectors/atit_logo.png" alt="logo">
           </a>
           <button type="button" class="m-2 p-0 btn shadow-none border-0 text-danger me-0" data-bs-dismiss="offcanvas"
               aria-label="Close">
               <i class="fa-solid fa-xmark fa-xl"></i>
           </button>
       </div>
       <div class="offcanvas-body px-0 py-5 text-center">
           <ul class="navbar-nav ms-auto overflow-hidden mb-0 rounded-bottom-3">
               <li class="nav-item">
                   <a class="nav-link" aria-current="page" href="../../index.html">Home</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="../../about.html">About</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="../../contact.html">Contact</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link active" href="../../courses.html">Courses</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="../../Blog2.html">Blog</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="../../placement.html">PAP</a>
               </li>
           </ul>
       </div>
   </div>

   <!-- nav ends -->
    `;

// Get a reference to the body element
var body = document.body;

// Prepend the HTML code to the body
body.innerHTML = navCode + body.innerHTML;
  });

// var link = ` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
// integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
// crossorigin="anonymous" referrerpolicy="no-referrer" />
// `
// $("head").append(link)
var linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
linkElement.integrity = 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==';
linkElement.crossOrigin = 'anonymous';
linkElement.referrerPolicy = 'no-referrer';

document.head.appendChild(linkElement);
