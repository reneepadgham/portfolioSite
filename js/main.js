$(document).ready(function(){

  $('.project-images').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    touchMove: true,
    arrows: false,
    swipeToSlide: true
  });

  $(function(){
    $('#Container').mixItUp();
  });

  var ModalEffects = (function() {

  	function init() {

  		var overlay = document.querySelector( '.md-overlay' );

  		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

  			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
  				close = modal.querySelector( '.md-close' );

  			function removeModal( hasPerspective ) {
  				classie.remove( modal, 'md-show' );
          $("body").css({ overflow: 'inherit' });

  				if( hasPerspective ) {
  					classie.remove( document.documentElement, 'md-perspective' );
  				}
  			}

  			function removeModalHandler() {
  				removeModal( classie.has( el, 'md-setperspective' ) );
  			}

  			el.addEventListener( 'click', function( ev ) {
  				classie.add( modal, 'md-show' );
  				overlay.removeEventListener( 'click', removeModalHandler );
  				overlay.addEventListener( 'click', removeModalHandler );
          $("body").css({ overflow: 'hidden' })

  				if( classie.has( el, 'md-setperspective' ) ) {
  					setTimeout( function() {
  						classie.add( document.documentElement, 'md-perspective' );
  					}, 25 );
  				}
  			});

  			close.addEventListener( 'click', function( ev ) {
  				ev.stopPropagation();
  				removeModalHandler();
          $("body").css({ overflow: 'inherit' })
  			});

  		} );

  	}

  	init();

  })();

});
