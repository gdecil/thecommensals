var componi = function(){
  if($.session.get('cartItems')==undefined){
    return
  }
  carrello = $.session.get('cartItems').split(',');
//  alert(carrello)
  window.open('index.html#/apriRicetta?ricetta='+carrello,"_self")
//  alert("Crea menu " + $.session.get('cartItems'))
}
var clearSession = function(){
  $.session.clear();
  var arr = []
  $.session.set("cartItems", "");
  $('.cart__count')[0].innerHTML= 0
}
var support = { animations : Modernizr.cssanimations },
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		onEndAnimation = function( el, callback ) {
			var onEndCallbackFn = function( ev ) {
				if( support.animations ) {
					if( ev.target != this ) return;
					this.removeEventListener( animEndEventName, onEndCallbackFn );
				}
				if( callback && typeof callback === 'function' ) { callback.call(); }
			};
			if( support.animations ) {
				el.addEventListener( animEndEventName, onEndCallbackFn );
			}
			else {
				onEndCallbackFn();
			}
		};

	// from http://www.sberry.me/articles/javascript-event-throttling-debouncing
	function throttle(fn, delay) {
		var allowSample = true;

		return function(e) {
			if (allowSample) {
				allowSample = false;
				setTimeout(function() { allowSample = true; }, delay);
				fn(e);
			}
		};
	}

	// sliders - flickity
	var sliders = [].slice.call(document.querySelectorAll('.slider')),
		// array where the flickity instances are going to be stored
		flkties = [],
		// grid element
		grid = document.querySelector('.grid'),
		// isotope instance
		iso,
		// filter ctrls
		filterCtrls = [].slice.call(document.querySelectorAll('.filter > button')),
		// cart
		cart = document.querySelector('.cart')
        if(cart!=null){cartItems = cart.querySelector('.cart__count');}
		

function addToCart() {
		cart = document.querySelector('.cart'),
		cartItems = cart.querySelector('.cart__count');
		classie.add(cart, 'cart--animate');
		setTimeout(function() {cartItems.innerHTML = Number(cartItems.innerHTML) + 1;}, 200);
		onEndAnimation(cartItems, function() {
			classie.remove(cart, 'cart--animate');
		});
        if(cartItems.innerHTML=="0"){
          $.session.set("cartItems", "");
          $.session.set("cartNomi", "");
        }
        carrello = $.session.get('cartItems').split(',');
        carrello.push(this.parentElement.id)
        $.session.set("cartItems", carrello);
        cartItems.innerHTML= carrello.length -2

        carrellonomi = $.session.get('cartNomi').split(',');
        carrellonomi.push(this.parentElement.attributes[1].nodeValue)
        $.session.set("cartNomi", carrellonomi);
	}

