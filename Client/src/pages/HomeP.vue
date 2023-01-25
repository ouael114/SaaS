<template>
  <body>
    <div class="page-wrapper">
      <header style="font-size: 15px" id="site-header" class="header header-3">
        <div id="header-wrap">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <!-- Navbar -->
                <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand logo" href="index-2.html">
                    <img
                      id="logo-img"
                      class="img-fluid"
                      src="frontend/images/logo-customizer/logo-color-4.png"
                      alt=""
                    />
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav mx-auto">
                      <!-- Home -->
                      <li class="nav-item">
                        <a class="nav-link active" href="#home">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#services">Services</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#pricing">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#blog">Blogs</a>
                      </li>
                    </ul>
                  </div>
                  <div class="right-nav d-sm-block d-none">
                    <button
                      @click.prevent="GoToLogin"
                      class="btn btn-theme btn-sm"
                    >
                      <span>Login</span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!--header end-->

      <!--hero section start-->

      <section id="home" class="banner p-0 position-relative fullscreen-banner">
        <div id="particles-js"></div>
        <div class="hero-shape6"></div>
        <div class="align-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12 order-lg-1">
                <img
                  class="img-fluid"
                  src="frontend/images/banner/08.png"
                  alt=""
                />
              </div>
              <div class="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <h1
                  class="mb-4 font-w-4 wow fadeInLeft"
                  data-wow-duration="1.5s"
                >
                  NextConsult is <span class="font-w-7">digital agency</span> for
                  Business Startup
                </h1>
                <p
                  class="lead mb-4 wow fadeInDown"
                  data-wow-duration="2s"
                  data-wow-delay="0.3s"
                >
                  Next Consult is an the obligations of business it will frequently
                  occur that pleasures have to be repudiated and annoyances
                  accepted.
                </p>
                <a class="btn btn-theme" href="#"><span>Learn More</span></a>
                <a class="btn btn-dark" href="#"><span>Contact Us</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--hero section end-->

      <!--body content start-->

      <div class="page-content">
        <!--feature start-->

        <section class="pb-0">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-12">
                <div class="featured-item style-2">
                  <div class="featured-icon">
                    <svg
                      class="icon-vivus bd-color-1 feather feather-sliders"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="4" y1="21" x2="4" y2="14"></line>
                      <line x1="4" y1="10" x2="4" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12" y2="3"></line>
                      <line x1="20" y1="21" x2="20" y2="16"></line>
                      <line x1="20" y1="12" x2="20" y2="3"></line>
                      <line x1="1" y1="14" x2="7" y2="14"></line>
                      <line x1="9" y1="8" x2="15" y2="8"></line>
                      <line x1="17" y1="16" x2="23" y2="16"></line>
                    </svg>
                  </div>
                  <div class="featured-title">
                    <h5>Design and Block.</h5>
                  </div>
                  <div class="featured-desc">
                    <p>
                      The wise man therefore always holds in these matters to
                      this Next Consult of selection
                    </p>
                    <a class="btn-iconic mt-4" href="#"
                      ><i class="la la-long-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div class="featured-item style-2">
                  <div class="featured-icon">
                    <svg
                      class="icon-vivus bd-color-2 feather feather-settings"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path
                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                      ></path>
                    </svg>
                  </div>
                  <div class="featured-title">
                    <h5>Easy Customizable</h5>
                  </div>
                  <div class="featured-desc">
                    <p>
                      The wise man therefore always holds in these matters to
                      this Next Consult of selection
                    </p>
                    <a class="btn-iconic mt-4" href="#"
                      ><i class="la la-long-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div class="featured-item style-2">
                  <div class="featured-icon">
                    <svg
                      class="icon-vivus bd-color-1 feather feather-layout"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <div class="featured-title">
                    <h5>Fully Responsive</h5>
                  </div>
                  <div class="featured-desc">
                    <p>
                      The wise man therefore always holds in these matters to
                      this Next Consult of selection
                    </p>
                    <a class="btn-iconic mt-4" href="#"
                      ><i class="la la-long-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--feature end-->

        <!--client start-->

        <section class="grey-bg custom-pt-2 custom-mt-20 z-index-0">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div
                  class="owl-carousel no-pb"
                  data-dots="false"
                  data-items="5"
                  data-md-items="4"
                  data-sm-items="3"
                  data-margin="30"
                  data-autoplay="true"
                >
                  <div class="item">
                    <div class="client-logo style-2">
                      <img
                        class="img-fluid"
                        src="frontend/images/client/01.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="item">
                    <div class="client-logo style-2">
                      <img
                        class="img-fluid"
                        src="frontend/images/client/02.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="item">
                    <div class="client-logo style-2">
                      <img
                        class="img-fluid"
                        src="frontend/images/client/03.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="item">
                    <div class="client-logo style-2">
                      <img
                        class="img-fluid"
                        src="frontend/images/client/04.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="item">
                    <div class="client-logo style-2">
                      <img
                        class="img-fluid"
                        src="frontend/images/client/05.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="item">
                    <div class="client-logo style-2">
                      <img
                        class="img-fluid"
                        src="frontend/images/client/06.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="item">
                    <div class="client-logo style-2">
                      <img
                        class="img-fluid"
                        src="frontend/images/client/07.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="item">
                    <div class="client-logo style-2">
                      <img
                        class="img-fluid"
                        src="frontend/images/client/08.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--client end-->

        <!--text block start-->

        <section id="about">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-7 col-md-12 position-relative">
                <img
                  class="img-fluid topBottom"
                  src="frontend/images/about/17.png"
                  alt=""
                />
                <div class="video-btn video-btn-pos">
                  <a
                    class="play-btn popup-youtube"
                    href="https://www.youtube.com/watch?v=P_wKDMcr1Tg"
                    ><i class="la la-play"></i
                  ></a>
                </div>
              </div>
              <div class="col-lg-5 col-md-12 ms-auto">
                <div class="section-title">
                  <h2 class="title">
                    Perfect solution for small <span>business</span>
                  </h2>
                  <div class="title-bdr">
                    <div class="left-bdr"></div>
                    <div class="right-bdr"></div>
                  </div>
                  <p class="text-black">
                    Powerfull Template customer service with our tools,
                    hendrerit omittantur mel, es vidit Ius te omittantur meles
                    vidit Ius te altera essent incorrupte.
                  </p>
                </div>
                <ul class="list-unstyled list-icon">
                  <li class="mb-3">
                    <i class="fas fa-check-circle"></i> Distinctively brand
                    adaptive innovation
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i> You need to be sure
                    there isn't anything
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!--text block end-->

        <!--services start-->

        <section id="services" class="position-relative">
          <div class="round-anim right"></div>
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-12 ps-lg-5">
                <div class="section-title">
                  <h2 class="title">
                    Next Consult Provide <span>Great Services</span>
                  </h2>
                  <div class="title-bdr">
                    <div class="left-bdr"></div>
                    <div class="right-bdr"></div>
                  </div>
                  <p class="text-black">
                    Powerfull Template customer service with our tools,
                    hendrerit omittantur mel, es vidit Ius te omittantur meles
                    vidit Ius te altera essent incorrupte.
                  </p>
                </div>
                <a class="btn btn-theme" href="#">View All</a>
              </div>
              <div class="col-lg-8 col-md-12">
                <div
                  class="owl-carousel no-pb"
                  data-dots="false"
                  data-items="3 "
                  data-md-items="2"
                  data-sm-items="1"
                  data-autoplay="true"
                >
                  <div class="item">
                    <div class="featured-item style-4">
                      <div class="featured-icon">
                        <i class="la la-wordpress"></i>
                      </div>
                      <div class="featured-title">
                        <h5>Web Development</h5>
                      </div>
                      <div class="featured-desc">
                        <p>
                          Top quality Software services, labore et dolore magna
                          ali qua Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="featured-item style-4">
                      <div class="featured-icon">
                        <i class="la la-diamond"></i>
                      </div>
                      <div class="featured-title">
                        <h5>UI/UX Design</h5>
                      </div>
                      <div class="featured-desc">
                        <p>
                          Top quality Software services, labore et dolore magna
                          ali qua Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="featured-item style-4">
                      <div class="featured-icon">
                        <i class="la la-code-fork"></i>
                      </div>
                      <div class="featured-title">
                        <h5>Clean Code</h5>
                      </div>
                      <div class="featured-desc">
                        <p>
                          Top quality Software services, labore et dolore magna
                          ali qua Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="featured-item style-4">
                      <div class="featured-icon">
                        <i class="la la-lightbulb-o"></i>
                      </div>
                      <div class="featured-title">
                        <h5>Seo & Marketing</h5>
                      </div>
                      <div class="featured-desc">
                        <p>
                          Top quality Software services, labore et dolore magna
                          ali qua Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--services end-->

        <!--counter start-->

        <section class="pt-0">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="counter style-4">
                  <div class="counter-icon">
                    <svg
                      class="icon-vivus bd-color-1 feather feather-check-square"
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path
                        d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                      ></path>
                    </svg>
                  </div>
                  <div class="counter-desc">
                    <span class="count-number" data-to="234" data-speed="10000"
                      >234</span
                    >
                    <h5>Project Done</h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 mt-5 mt-sm-0">
                <div class="counter style-4">
                  <div class="counter-icon">
                    <svg
                      class="icon-vivus bd-color-2 feather feather-users"
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div class="counter-desc">
                    <span class="count-number" data-to="455" data-speed="10000"
                      >455</span
                    >
                    <h5>Member</h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 mt-5 mt-lg-0">
                <div class="counter style-4">
                  <div class="counter-icon">
                    <svg
                      class="icon-vivus bd-color-1 feather feather-heart"
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      ></path>
                    </svg>
                  </div>
                  <div class="counter-desc">
                    <span class="count-number" data-to="365" data-speed="10000"
                      >365</span
                    >
                    <h5>Love Us</h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 mt-5 mt-lg-0">
                <div class="counter style-4">
                  <div class="counter-icon">
                    <svg
                      class="icon-vivus bd-color-2 feather feather-smile"
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                  </div>
                  <div class="counter-desc">
                    <span class="count-number" data-to="528" data-speed="10000"
                      >528</span
                    >
                    <h5>Happy Client</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--counter end-->

        <!--about start-->

        <section>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-7 col-md-12">
                <img
                  class="img-fluid"
                  src="frontend/images/about/10.svg"
                  alt=""
                />
              </div>
              <div class="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                <div class="section-title">
                  <h2 class="title">Read More About <span>Next Consult</span></h2>
                  <div class="title-bdr">
                    <div class="left-bdr"></div>
                    <div class="right-bdr"></div>
                  </div>
                </div>
                <blockquote class="text-bg">
                  It’s free to sign up for a Next Consult account and there’s no
                  transaction fee to use Next Consult for your purchases.
                </blockquote>
                <a class="btn btn-theme btn-circle" href="#"
                  ><span>Try It Free</span></a
                >
                <a class="btn btn-white btn-circle" href="#"
                  ><span>Learn More</span></a
                >
              </div>
            </div>
          </div>
        </section>

        <!--about end-->

        <!--team start-->

        <section
          id="team"
          class="position-relative bg-contain bg-pos-lb"
          data-bg-img="frontend/images/bg/06.png"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12">
                <div class="team-member style-3">
                  <div class="team-frontend/images">
                    <img
                      class="img-fluid box-shadow"
                      src="frontend/images/team/01.jpg"
                      alt=""
                    />
                  </div>
                  <div class="team-description leftRight">
                    <span>Manager</span>
                    <h5>Lena Dexto</h5>
                    <div class="social-icons team-social-icon">
                      <ul>
                        <li class="social-facebook">
                          <a href="#"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="social-twitter">
                          <a href="#"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li class="social-gplus">
                          <a href="#"><i class="fab fa-google-plus-g"></i></a>
                        </li>
                        <li class="social-linkedin">
                          <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                      </ul>
                    </div>
                    <a class="btn-simple mt-3" href="team-single.html"
                      >Read More</a
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div class="team-member style-3">
                  <div class="team-frontend/images">
                    <img
                      class="img-fluid box-shadow"
                      src="frontend/images/team/02.jpg"
                      alt=""
                    />
                  </div>
                  <div class="team-description leftRight">
                    <span>Supervisor</span>
                    <h5>Simon law</h5>
                    <div class="social-icons team-social-icon">
                      <ul>
                        <li class="social-facebook">
                          <a href="#"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="social-twitter">
                          <a href="#"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li class="social-gplus">
                          <a href="#"><i class="fab fa-google-plus-g"></i></a>
                        </li>
                        <li class="social-linkedin">
                          <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                      </ul>
                    </div>
                    <a class="btn-simple mt-3" href="team-single.html"
                      >Read More</a
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div class="team-member style-3">
                  <div class="team-frontend/images">
                    <img
                      class="img-fluid box-shadow"
                      src="frontend/images/team/03.jpg"
                      alt=""
                    />
                  </div>
                  <div class="team-description leftRight">
                    <span>Founder</span>
                    <h5>Kelly Jae</h5>
                    <div class="social-icons team-social-icon">
                      <ul>
                        <li class="social-facebook">
                          <a href="#"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="social-twitter">
                          <a href="#"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li class="social-gplus">
                          <a href="#"><i class="fab fa-google-plus-g"></i></a>
                        </li>
                        <li class="social-linkedin">
                          <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                      </ul>
                    </div>
                    <a class="btn-simple mt-3" href="team-single.html"
                      >Read More</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--team end-->

        <!--price start-->

        <section id="pricing">
          <div class="row text-center">
            <div class="col-lg-8 col-md-12 mx-auto">
              <div class="section-title">
                <h2 class="title">
                  No Any Hidden Charge Select Your <span>Pricing Plan</span>
                </h2>
                <div class="title-bdr">
                  <div class="left-bdr"></div>
                  <div class="right-bdr"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12 col-md-12">
                <div class="price-table style-4">
                  <div class="price-header">
                    <h3 class="price-title">Starter</h3>
                    <div class="price-value">
                      <h2><span>£</span>50</h2>
                    </div>
                  </div>
                  <div class="price-list">
                    <ul class="list-unstyled">
                      <li>
                        <i class="fas fa-check-circle"></i> 15 Analytics
                        Compaign
                      </li>
                      <li>
                        <i class="fas fa-check-circle"></i> Unlimited Site
                        licenses
                      </li>
                      <li>
                        <i class="fas fa-check-circle"></i> 10 Free Optimization
                      </li>
                      <li><i class="fas fa-check-circle"></i> 24x7 Support</li>
                    </ul>
                  </div>
                  <stripe-checkout
                    ref="checkoutRef"
                    mode="subscription"
                    :pk="publishableKey"
                    :line-items="lineItems"
                    :success-url="successURL"
                    :cancel-url="cancelURL"
                    @loading="(v) => (loading = v)"
                  />
                  <button @click="gmao" class="btn btn-dark btn-circle">
                    <span>Get It Now</span>
                  </button>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 mt-5">
                <div class="price-table style-4">
                  <div class="price-header">
                    <h3 class="price-title">Medium</h3>
                    <div class="price-value">
                      <h2><span>£</span>70</h2>
                    </div>
                  </div>
                  <div class="price-list">
                    <ul class="list-unstyled">
                      <li>
                        <i class="fas fa-check-circle"></i> 15 Analytics
                        Compaign
                      </li>
                      <li>
                        <i class="fas fa-check-circle"></i> Unlimited Site
                        licenses
                      </li>
                      <li>
                        <i class="fas fa-check-circle"></i> 10 Free Optimization
                      </li>
                      <li><i class="fas fa-check-circle"></i> 24x7 Support</li>
                    </ul>
                  </div>
                  <stripe-checkout
                    ref="checkoutRef1"
                    mode="subscription"
                    :pk="publishableKey"
                    :line-items="lineItems1"
                    :success-url="successURL"
                    :cancel-url="cancelURL"
                    @loading="(v) => (loading = v)"
                  />
                  <button @click="test1" class="btn btn-dark btn-circle">
                    <span>Get It Now</span>
                  </button>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 mt-5">
                <div class="price-table style-4">
                  <div class="price-header">
                    <h3 class="price-title">Larger</h3>
                    <div class="price-value">
                      <h2><span>£</span>120</h2>
                    </div>
                  </div>
                  <div class="price-list">
                    <ul class="list-unstyled">
                      <li>
                        <i class="fas fa-check-circle"></i> 15 Analytics
                        Compaign
                      </li>
                      <li>
                        <i class="fas fa-check-circle"></i> Unlimited Site
                        licenses
                      </li>
                      <li>
                        <i class="fas fa-check-circle"></i> 10 Free Optimization</li>
                      <li><i class="fas fa-check-circle"></i> 24x7 Support</li>
                      <li><i class="fas fa-check-circle"></i> Free Maintenance</li>
                      <li><i class="fas fa-check-circle"></i> Daily Dashboard</li>
                    </ul>
                  </div>
                  <stripe-checkout
                    ref="checkoutRef2"
                    mode="subscription"
                    :pk="publishableKey"
                    :line-items="lineItems2"
                    :success-url="successURL"
                    :cancel-url="cancelURL"
                    @loading="(v) => (loading = v)"
                  />
                  <button @click="gmao" class="btn btn-dark btn-circle">
                    <span>Get It Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--price end-->

        <!--blog start-->

        <section id="blog" class="position-relative">
          <div class="round-anim"></div>
          <div class="container">
            <div class="row align-items-end mb-5">
              <div class="col-lg-6 col-md-12">
                <div class="section-title mb-0">
                  <h2 class="title">
                    Read Our Update <span>Latest Blog</span>
                  </h2>
                  <div class="title-bdr mb-0">
                    <div class="left-bdr"></div>
                    <div class="right-bdr"></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 mt-3 mt-lg-0">
                <p class="text-black lead mb-0">
                  Powerfull Template customer service with our tools, hendrerit
                  omittantur mel, es vidit Ius te omittantur meles vidit Ius te
                  altera essent incorrupte.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-12">
                <div class="post style-4">
                  <div class="post-image">
                    <img
                      class="img-fluid h-100 w-100"
                      src="frontend/images/blog/01.jpg"
                      alt=""
                    />
                  </div>
                  <div class="post-desc">
                    <div class="post-categories mt-4">
                      <ul class="list-inline">
                        <li>Sass</li>
                        <li>Marketing</li>
                      </ul>
                    </div>
                    <div class="post-title">
                      <h4>
                        <a href="blog-single.html"
                          >Next Consult Built With Powerfull Sass</a
                        >
                      </h4>
                    </div>
                    <div class="post-meta">
                      <ul class="list-inline">
                        <li>
                          <i class="la la-calendar me-1"></i> 23 Jan, 2019
                        </li>
                        <li><i class="la la-user me-1"></i> By ThemeHt</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div class="post style-4">
                  <div class="post-image">
                    <img
                      class="img-fluid h-100 w-100"
                      src="frontend/images/blog/02.jpg"
                      alt=""
                    />
                  </div>
                  <div class="post-desc">
                    <div class="post-categories mt-4">
                      <ul class="list-inline">
                        <li>Sass</li>
                        <li>Marketing</li>
                      </ul>
                    </div>
                    <div class="post-title">
                      <h4>
                        <a href="blog-single.html"
                          >latest Modern design in features</a
                        >
                      </h4>
                    </div>
                    <div class="post-meta">
                      <ul class="list-inline">
                        <li>
                          <i class="la la-calendar me-1"></i> 23 Jan, 2019
                        </li>
                        <li><i class="la la-user me-1"></i> By ThemeHt</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div class="post style-4">
                  <div class="post-image">
                    <img
                      class="img-fluid h-100 w-100"
                      src="frontend/images/blog/03.jpg"
                      alt=""
                    />
                  </div>
                  <div class="post-desc">
                    <div class="post-categories mt-4">
                      <ul class="list-inline">
                        <li>Sass</li>
                        <li>Marketing</li>
                      </ul>
                    </div>
                    <div class="post-title">
                      <h4>
                        <a href="blog-single.html"
                          >All Powerful Design feature In Next Consult</a
                        >
                      </h4>
                    </div>
                    <div class="post-meta">
                      <ul class="list-inline">
                        <li>
                          <i class="la la-calendar me-1"></i> 23 Jan, 2019
                        </li>
                        <li><i class="la la-user me-1"></i> By ThemeHt</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--blog end-->

        <!--subscribe end-->
      </div>

      <!--body content end-->

      <!--footer start-->
      <div id="waterdrop"></div>
      <footer class="footer theme-bg">
        <div class="primary-footer">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-6">
                <div class="footer-logo mb-3">
                  <img
                    id="footer-logo-white-img"
                    src="frontend/images/logo-white.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <p class="mb-0">
                  Next Consult - SaaS, Startup & WebApp Prebuilt Template Is fully
                  responsible, Next Consult is the Creative, Modern HTML5 Template.
                  Sassaht is an the obligations of business it will frequently
                  occur that pleasures have to be repudiated and annoyances
                  accepted.
                </p>
              </div>
              <div class="col-lg-4 col-md-6 mt-5 mt-md-0">
                <h4 class="mb-4 text-white">Usefull link</h4>
                <div class="footer-list justify-content-between d-flex">
                  <ul class="list-unstyled w-100">
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="services.html">Service</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="team-single.html">Team Single</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                  <ul class="list-unstyled w-100">
                    <li><a href="blog-right-sidebar.html">Blog</a></li>
                    <li><a href="faq.html">Faq</a></li>
                    <li><a href="error-404.html">Error 404</a></li>
                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    <li><a href="terms-and-conditions.html">Terms</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div class="footer-cntct">
                  <h4 class="mb-4 text-white">Get In Touch</h4>
                  <ul class="media-icon list-unstyled">
                    <li>
                      <p class="mb-0">
                        <i class="la la-map-o"></i>
                        <b>423B, Road Wordwide Country, USA</b>
                      </p>
                    </li>
                    <li>
                      <i class="la la-envelope-o"></i>
                      <a href="mailto:themeht23@gmail.com"
                        ><b>themeht23@gmail.com</b></a
                      >
                    </li>
                    <li>
                      <i class="la la-phone"></i>
                      <a href="tel:+912345678900"><b>+91-234-567-8900</b></a>
                    </li>
                  </ul>
                  <div class="social-icons mt-3">
                    <ul class="list-inline">
                      <li>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fab fa-dribbble"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fab fa-skype"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="secondary-footer mt-5 text-center">
          <div class="container">
            <div class="copyright">
              <div class="row"></div>
            </div>
          </div>
        </div>
      </footer>

      <!--footer end-->
    </div>

    <div class="scroll-top">
      <a class="smoothscroll" href="#top"
        ><i class="la la-hand-pointer-o"></i
      ></a>
    </div>
  </body>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  name: "HomeP",
  methods: {
    gmao() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
    test1() {
      this.$refs.checkoutRef1.redirectToCheckout();
    },
    test2() {
      this.$refs.checkoutRef2.redirectToCheckout();
    },
    GoToLogin() {
      this.$router.push({ path: "/login" });
    },
  },

  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey =
      "pk_test_51KrLhoJRotNnNWHlBzR95niG6QeqB6DYuoET5yDTDc9aX1psybXLAYNBm15NKEXgekD922RIyil7QFw4c05mpwcR00r8P4hHCE";
    return {
      loading: false,
      lineItems: [
        {
          price: "price_1KsnyMJRotNnNWHlEwo7JeHu",
          quantity: 1,
        },
      ],
      lineItems1: [
        {
          price: "price_1L0UHYJRotNnNWHl4dc7PEih",
          quantity: 1,
        },
      ],
      lineItems2: [
        {
          price: "price_1L0UQCJRotNnNWHlLrVATWB0",
          quantity: 1,
        },
      ],
      mode: "subscription",
      successURL: "http://localhost:8082/",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 10px 0 0;
}

.navbar-expand-lg {
  height: 100px;
}
.primary-footer {
  height: 250px;
}

footer theme-bg ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
