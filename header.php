<?php
$isPageLoading = true; // Change this to false when loading is complete
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Solar Group</title>
    <link rel="icon" type="image/png" href="img/favicon.png">
    <link href="css/custom.css" rel="stylesheet">
    <link href="css/santu.css" rel="stylesheet">
    <link rel="stylesheet" href="css/preloader.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pace/1.2.4/pace-theme-default.min.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">

    <!--plugin -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

  </head>
  <body>
   <!-- Preloader -->
   <div id="preloader"></div>
    <!-- End Preloader -->

    <!-- Your Content -->
    <div class="<?php echo $isPageLoading ? 'showX' : 'hideX'; ?>">
        <div class="loading">
            <div class="charka-img">
                <img src="img/charka.png" alt="">
            </div>
            <div class="parent-span">
                <img  src="img/preloader-logo.png" alt="">
            </div>
        </div>
    </div>
    <!-- End Your Content -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pace/1.2.4/pace.min.js"></script>

    <script>
        const loadingPace = () => {
            Pace.on("start", function () {
                document.querySelector("#preloader").classList.remove("isdone");
                document.querySelector(".loading").classList.remove("isdone");
            });
            Pace.on("done", function () {
                document.querySelector("#preloader").classList.add("isdone");
                document.querySelector(".loading").classList.add("isdone");
            });

            if (document.querySelector("body").classList.contains("pace-done")) {
                document.querySelector("#preloader").classList.add("isdone");
                document.querySelector(".loading").classList.add("isdone");
            }

            window.addEventListener("load", () => {
                document.querySelector("#preloader").classList.add("isdone");
                document.querySelector(".loading").classList.add("isdone");
                if (document.querySelector('.pace-running.pace-running')) {
                    document.querySelector('.pace-running.pace-running').classList.remove('pace-running')
                }
            });
        };

        loadingPace();
    </script>



    <header class="header" id="header">
        <div class="container-fluid pt-0 pt-lg-2">
            <div class="pre-header my-2 my-lg-3 mx-0 mx-lg-3">
                <div class="logo-item">
                    <a href="index.php" class="brand-logo"><img src="img/logo.png" alt="Solar Group" class="img-fluid"></a>
                </div>
                <div class="menu-item pre-header-menu d-none d-lg-flex">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item"><a href="contact.php">Contact us</a></li>
                        <li class="list-inline-item"><a href="#">Sitemap</a></li>
                        <li class="list-inline-item"><a href="#" class="search-icon"><i class="ri-search-line"></i></a></li>
                    </ul>
                </div>
                <button class="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar2">
                        <i class="ri-menu-4-fill"></i>
                </button>
            </div>
            <nav class="navbar navbar-expand-lg" aria-label="Offcanvas navbar large" id="navigation">
                <div class="container-fluid">
                    <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbar2Label">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav flex-grow-1 ">
                                <li class="nav-item"><a class="nav-link pl-0" href="index.php">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="about.php">About</a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products <i class="ri-arrow-down-s-line"></i></a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </li>
                                <!-- <li class="nav-item"><a class="nav-link" href="#">Technology</a></li> -->
                                <li class="nav-item"><a class="nav-link" href="invester.php">Investor Relations</a></li>
                                <li class="nav-item"><a class="nav-link" href="esg.php">Sustainability</a></li>
                                <!-- <li class="nav-item"><a class="nav-link" href="#">News & Media</a></li> -->
                                <!-- <li class="nav-item"><a class="nav-link" href="#">Careers</a></li> -->
                                <li class="nav-item"><a class="nav-link" href="news.php">News & Media</a></li>
                                <!-- <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">News & Media <i class="ri-arrow-down-s-line"></i></a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="news.php">News</a></li>
                                        <li><a class="dropdown-item" href="media.php">Media</a></li>
                                    </ul>
                                </li> -->
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Careers <i class="ri-arrow-down-s-line"></i></a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Life at solar</a></li>
                                        <li><a class="dropdown-item" href="our-team.php">Join our team</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="contact.php">Contact Us</a></li>
                            </ul>
                            <ul class="navbar-nav ms-auto navbar-social d-none d-xl-flex">
                                <li><a href="#"><i class="ri-facebook-fill"></i></a></li>
                                <li><a href="#"><i class="ri-twitter-x-fill"></i></a></li>
                                <li><a href="#"><i class="ri-instagram-fill"></i></a></li>
                                <!-- <li><a href="#"><i class="ri-youtube-fill"></i></a></li> -->
                                <li><a href="#"><i class="ri-linkedin-fill"></i></a></li>
                            </ul>
                        </div>
                        <div class="offcanvas-footer d-block d-lg-none pt-3 pb-3">
                            <p class="text-muted text-center mb-2 text-sm">Follow us:</p>
                            <div class="social-links  text-center">
                                <a href="#" target="_blank"><i class="ri-facebook-fill"></i></a>
                                <a href="#" target="_blank"><i class="ri-twitter-x-fill"></i></a>
                                <a href="#" target="_blank"><i class="ri-instagram-fill"></i></a>
                                <a href="#" target="_blank"><i class="ri-linkedin-fill"></i></a>
                                <!-- <a href="#" target="_blank"><i class="ri-youtube-fill"></i></a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <script>
        document.getElementById('card1').addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    </script>