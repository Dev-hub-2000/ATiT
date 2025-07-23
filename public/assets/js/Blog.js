    document.addEventListener("DOMContentLoaded", function () {
        const loadMoreBtn = document.getElementById("loadMoreBtn");
        const loadMoreSection = document.getElementById("loadMoreSection");
        // const contentContainer = document.getElementById("content");

        // Additional content
        const additionalContent = [
            `<div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./Blog-page/itCareer.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/Blog5.png">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">  IT Jobs</h2>                   
                </div>
            </div>
            </a>
            <a href="./Blog-page/itCareer.html" class="text-decoration-none blog-title blog-title">
                The booming IT sector in India and its employment opportunities!
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./Blog-page/Searching.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/Blog8.png">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">Interviews</h2>                   
                </div>
            </div>
            </a>
            <a href="./Blog-page/Searching.html" class="text-decoration-none blog-title blog-title">
                It Can Be Challenging To Stand Out From The Crowd And Catch
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./Blog-page/jobRace.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/Blog6.png">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category"> IT Jobs</h2>                   
                </div>
            </div>
            </a>
            <a href="./Blog-page/jobRace.html" class="text-decoration-none blog-title blog-title">
                Want To Get Ahead Of The Job Race? Read On
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./Blog-page/clearGoal.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/blogimg.jpg">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">Others</h2>                   
                </div>
            </div>
            </a>
            <a href="./Blog-page/clearGoal.html" class="text-decoration-none blog-title blog-title">
                How To Clear Any Professional Exam: A Proven Strategy For Success
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./Blog-page/it_Job.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/Blog7.png">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">  IT Jobs</h2>                   
                </div>
            </div>
            </a>
            <a href="./Blog-page/it_Job.html" class="text-decoration-none blog-title blog-title">
                From Campus To Career: How To Ace Your First IT Job Interview - Exclusive Q&A!
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
        <a href="./Blog-page/completeGuide.html" class="">
        <div class="box rounded-5 ">
            <img src="./assets/img/Blog/Blog4.png">
            <div class="box-content">                           
               <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">Interviews</h2>                   
            </div>
        </div>
        </a>
        <a href="./Blog-page/completeGuide.html" class="text-decoration-none blog-title blog-title">
            The booming IT sector in India and its
            employment opportunities
        </a>
    </div>
    <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
        <a href="./Blog-page/dynamic_duo.html" class="">
        <div class="box rounded-5 ">
            <img src="./assets/img/Blog/Blog11.png">
            <div class="box-content">                           
               <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">IT Jobs</h2>                   
            </div>
        </div>
        </a>
        <a href="./Blog-page/dynamic_duo.html" class="text-decoration-none blog-title blog-title">
            Introduction to the dynamics of the IT job market and
            fresh graduates
        </a>
    </div>
    <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
        <a href="./Blog-page/mastering_technical.html" class="">
        <div class="box rounded-5 ">
            <img src="./assets/img/Blog/Blog12.png">
            <div class="box-content">                           
               <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">Interviews</h2>                   
            </div>
        </div>
        </a>
        <a href="./Blog-page/mastering_technical.html" class="text-decoration-none blog-title blog-title">
            Congratulations, college freshers! As you embark on
            your journey toward a successful ...
        </a>
    </div>`,
            // Add more content here
        ];
        let currentContentIndex = 0;
        const itemsToShow = 2;
    
        const showMoreContent = () => {
            for (let i = 0; i < itemsToShow; i++) {
                if (currentContentIndex < additionalContent.length) {
                    const content = additionalContent[currentContentIndex];
                    loadMoreSection.insertAdjacentHTML('beforeend', content); // Insert content at the end of loadMoreSection
                    currentContentIndex++;
                } else {
                    loadMoreBtn.style.display = "none"; // Hide button when all content is loaded
                    break;
                }
            }
            AOS.refresh();
    
        };
    
        loadMoreBtn.addEventListener("click", showMoreContent);
    });
    
    