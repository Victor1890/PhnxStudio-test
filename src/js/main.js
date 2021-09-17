function setSlider() {
  $(".content_slider").each(function () {
    let $slider = $(this);
    let $itemscontainer = $slider.find(".slider__list");

    if ($itemscontainer.find(".slider-item.active").length === 0) {
      $itemscontainer.find(".slider-item").first().addClass("active");
    }

    function setWidth() {
      let totalWidth = 0;

      $($itemscontainer)
        .find(".slider-item")
        .each(function () {
          totalWidth += $(this).outerWidth();
        });

      $itemscontainer.width(totalWidth);
    }
    function setTransform() {
      let $activeItem = $itemscontainer.find(".slider-item.active");
      let activeItemOffset = $activeItem.offset().left;
      let itemsContainerOffset = $itemscontainer.offset().left;
      let totalOffset = activeItemOffset - itemsContainerOffset;

      $itemscontainer.css({
        transform: `translate(-${totalOffset}px, 0px)`,
      });
    }
    function nextSlide() {
      let activeItem = $itemscontainer.find(".slider-item.active");
      let activeItemIndex = activeItem.index();
      let sliderItemTotal = $itemscontainer.find(".slider-item").length;
      let nextSlide = 0;

      if (activeItemIndex + 1 > sliderItemTotal - 1) {
        nextSlide = 0;
      } else if (activeItemIndex === 3) {
        nextSlide = 3;
      } else {
        nextSlide = activeItemIndex + 1;
      }

      let nextSlideSelect = $itemscontainer.find(".slider-item").eq(nextSlide);
      let itemContainerOffset = $itemscontainer.offset().left;
      let totalOffset = nextSlideSelect.offset().left - itemContainerOffset;

      $itemscontainer.find(".slider-item.active").removeClass("active");
      nextSlideSelect.addClass("active");
      $slider.find(".dots").find(".dot").removeClass("active");
      $slider.find(".dots").find(".dot").eq(nextSlide).addClass("active");
      $itemscontainer.css({
        transform: `translate(-${totalOffset}px, 0px)`,
      });
    }
    function prevSlide() {
      let activeItem = $itemscontainer.find(".slider-item.active");
      let activeItemIndex = activeItem.index();
      let sliderItemTotal = $itemscontainer.find(".slider-item").length;
      let nextSlide = 0;

      if (activeItemIndex - 1 < 0) {
        nextSlide = sliderItemTotal - 1;
      } else if (activeItemIndex === 4) {
        nextSlide = 4;
      } else {
        nextSlide = activeItemIndex - 1;
      }

      let nextSlideSelect = $itemscontainer.find(".slider-item").eq(nextSlide);
      let itemContainerOffset = $itemscontainer.offset().left;
      let totalOffset = nextSlideSelect.offset().left - itemContainerOffset;

      $itemscontainer.find(".slider-item.active").removeClass("active");
      nextSlideSelect.addClass("active");
      $slider.find(".dots").find(".dot").removeClass("active");
      $slider.find(".dots").find(".dot").eq(nextSlide).addClass("active");
      $itemscontainer.css({
        transform: `translate(-${totalOffset}px, 0px)`,
      });
    }
    function makeDots() {
      let activeItem = $itemscontainer.find(".slider-item.active");
      let activeItemIndex = activeItem.index();
      let sliderItemTotal = $itemscontainer.find(".slider-item").length;

      for (i = 0; i < sliderItemTotal; i++) {
        console.log(i);
        $slider.find(".dots").append("<div class='dot'></div>");
      }

      $slider.find(".dots").find(".dot").eq(activeItemIndex).addClass("active");
    }

    setWidth();
    setTransform();
    makeDots();

    $(window).resize(function () {
      setWidth();
      setTransform();
    });

    let nextBtn = $slider.find(".controls").find(".next-btn");
    let prevBtn = $slider.find(".controls").find(".prev-btn");

    nextBtn.on("click", function (e) {
      e.preventDefault();
      nextSlide();
    });

    prevBtn.on("click", function (e) {
      e.preventDefault();
      prevSlide();
    });

    $slider
      .find(".dots")
      .find(".dot")
      .on("click", function (e) {
        let dotIndex = $(this).index(),
          totalOffset =
            $itemscontainer.find(".slider-item").eq(dotIndex).offset().left -
            $itemscontainer.offset().left;

        $itemscontainer.find(".slider-item.active").removeClass("active");
        $itemscontainer.find(".slider-item").eq(dotIndex).addClass("active");
        $slider.find(".dots").find(".dot").removeClass("active");
        $(this).addClass("active");

        $itemscontainer.css({
          transform: "translate( -" + totalOffset + "px, 0px)",
        });
      });
  });
}

setSlider();
