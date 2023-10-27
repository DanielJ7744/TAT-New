/******/ (() => { // webpackBootstrap
  var __webpack_exports__ = {};
  window.PXUTheme.jsSlideshowWithText = {
    init: function($section) {
  
      // Add settings from schema to current object
      window.PXUTheme.jsSlideshowWithText = $.extend(this, window.PXUTheme.getSectionData($section));
  
      const textTransition = this.text_transition;
  
      // Selectors
      const $imageSlideshowEl = $section.find('[data-image-slideshow]').removeClass('is-hidden');
  
      const $imageSlideshow = $imageSlideshowEl.flickity({
        contain: true,
        // wrapAround: true,
        adaptiveHeight: false,
        prevNextButtons: this.number_of_slides > 1 ? this.show_arrows : false,
        pageDots: false,
        draggable: true,
        imagesLoaded: true,
        fade: this.image_transition == 'fade' ? true : false,
        // autoPlay: this.image_slideshow_speed * 1000,
        autoPlay: false,
        arrowShape: "m22.35 38.95-13.9-13.9q-.25-.25-.35-.5Q8 24.3 8 24q0-.3.1-.55.1-.25.35-.5L22.4 9q.4-.4 1-.4t1.05.45q.45.45.45 1.05 0 .6-.45 1.05L13.1 22.5h24.8q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425H13.1l11.4 11.4q.4.4.4 1t-.45 1.05q-.45.45-1.05.45-.6 0-1.05-.45Z"
      });
  
  
      $section.find('.flickity-button').wrapAll('<div class="flickity-buttons-container"></div>');

      setTimeout(function() {
        const allSlider =  document.querySelectorAll('.main-slider .image-slideshow__slide')
        for (const slider of allSlider) {
            slider.style.height="100%"
        }
      }, 100);
  
  
    },
    blockSelect: function($section, blockId) {
      const $slider = $section.find('[data-image-slideshow]');
      const $sliderIndex = $('#shopify-section-' + blockId).data('slide-index');
  
      $slider.flickity('select', $sliderIndex, true, true);
  
      // Resize flickity when the slider is settled
      $slider.on( 'settle.flickity', function() {
        $slider.flickity('resize');
      }, 500);
  
    },
    unload: function($section) {
      $section.find('.flickity-button').unwrap();
    }
  }
  
  /******/ })()
  ;