const shareBlog = `
<div class="share border py-3 border-start-0 border-end-0 border-success">
    <div class="container">
        <div class="d-flex justify-content-between align-items-center text-dark">
            <h1 class="primary-color fs-3 m-0 text-dark pe-5">Share This Post</h1>
            <div>
                <a href="#" id="whatsapp-share" data-action="share/whatsapp/share" target="_blank"
                    class="share-ico text-decoration-none mx-2 fs-4 text-success">
                    <i class="bi bi-whatsapp"></i>
                </a>
                <a href="#" id="instagram-share" data-action="share/instagram/share" target="_blank"
                    class="share-ico text-decoration-none mx-2 fs-4 text-danger">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="#" id="facebook-share" data-action="share/facebook/share" target="_blank"
                    class="share-ico text-decoration-none mx-2 fs-4">
                    <i class="bi bi-facebook"></i>
                </a>

            </div>
        </div>
    </div>
</div>
`

    var shareblogElement = document.getElementById("share-blog");
    if (shareblogElement) {
        shareblogElement.innerHTML = shareBlog;
        // AOS.init();
    }

    var currentURL = window.location.href;

    var whatsappLink = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(currentURL);
    $('#whatsapp-share').attr('href', whatsappLink);
    $('#whatsapp-share').on('click', function (e) {
        e.preventDefault();
        window.open($(this).attr('href'), '_blank');
    });
    


var instagramLink = 'https://www.instagram.com/share?url=' + encodeURIComponent(currentURL);
$('#instagram-share').attr('href', instagramLink);

$('#instagram-share').on('click', function (e) {
    e.preventDefault();
    window.open($(this).attr('href'), '_blank');
});

var facebookLink = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentURL);
$('#facebook-share').attr('href', facebookLink);

$('#facebook-share').on('click', function (e) {
    e.preventDefault();
    window.open($(this).attr('href'), '_blank');
});
