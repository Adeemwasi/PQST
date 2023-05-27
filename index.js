var newsHeading = [
  '<li class="item1 news-li"><a href="https://www.google.com">ProQual Level 6 NVQ diploma in Occupational Heath and Safety. <b style="color: #222831 !important;">Click here.</b></a></li>',
  '<li class="item2 news-li"><a href="https://www.google.com">A range of short courses in Occupational Health and Safety. <b style="color: #222831;">Click here.</b></a></li>',
  '<li class="item3 news-li"><a href="https://www.google.com">Get <b>GradIOSH</b> membership with ProQual Level 6 NVQ diploma in OHS. <b style="color: #222831;">Click here.</b></a></li>',
];

var currentIndex = 0;
var animationInterval;
var secFadeInterval;

function secFade() {
  $(".news").fadeOut(250, function () {
    $(this)
      .html(newsHeading[currentIndex])
      .fadeIn(250, function () {
        secFadeInterval = setTimeout(secFade, 500);
      });
  });
}

function fadeNews() {
  $(".news").fadeOut(0, function () {
    $(this).html(newsHeading[currentIndex]).fadeIn(0);
    currentIndex = (currentIndex + 1) % newsHeading.length;
  });
}

function startAnimation() {
  stopAnimation(); // Clear any existing interval
  fadeNews();
  animationInterval = setInterval(fadeNews, 4000);
}

function stopAnimation() {
  clearInterval(animationInterval);
  clearTimeout(secFadeInterval);
}

$(document).ready(function () {
  // Start the animation
  startAnimation();

  // Set mouseenter and mouseleave events for news
  $(".news").on("mouseenter", stopAnimation).on("mouseleave", startAnimation);

  // Set click events for img-left and img-right
  $(".img-left")
    .off("click")
    .on("click", function () {
      currentIndex =
        (currentIndex - 1 + newsHeading.length) % newsHeading.length;
      $(".news").html(newsHeading[currentIndex]);
    });
  $(".img-right")
    .off("click")
    .on("click", function () {
      currentIndex = (currentIndex + 1) % newsHeading.length;
      $(".news").html(newsHeading[currentIndex]);
    });

  // Set mouseenter and mouseleave events for img-left and img-right
  $(".img-left, .img-right")
    .off("mouseenter mouseleave")
    .on("mouseenter", function () {
      stopAnimation();
      clearTimeout(secFadeInterval);
    })
    .on("mouseleave", function () {
      secFade();
    });

  // Toggle "active" class for items every 1 second
  var items = $(".item");
  setInterval(function () {
    items.toggleClass("active");
  }, 1000);

  // Toggle "pressed" class for banners every 1 second
  var banners = $(".banner");
  setInterval(function () {
    banners.toggleClass("pressed");
  }, 1000);

  // Toggle "pressed2" class for img-left and img-right every 1 second
  var imgs = $(".img-left, .img-right , .button.owl-prev");
  setInterval(function () {
    imgs.toggleClass("pressed2");
  }, 1000);

  // Set mouseenter and mouseleave events for list, logo and main-img
  var elements = $(".list, .logo, .main-img");
  elements
    .on("mouseenter", function () {
      $(this).addClass("pressed");
    })
    .on("mouseleave", function () {
      $(this).removeClass("pressed");
    });

  // Set navbar toggle events
  var navbarToggle = $(".navbar-toggle");
  var navbarList = $(".navbar-list");
  navbarToggle.click(function () {
    navbarList.slideToggle();
  });
  $(window).resize(function () {
    if ($(window).width() > 760) {
      navbarList.css("display", "flex");
    } else {
      navbarList.css("display", "none");
    }
  });
});
$(".carousel").owlCarousel({
  items: 1,
  loop: true,
  dots: true,
  margin: 10,
  autoplay: false,
  nav: true,

  navText: ["<", ">"],
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    650: {
      items: 2,
    },

    1000: {
      items: 3,
    },
  },
});
