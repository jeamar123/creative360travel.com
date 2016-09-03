$( document ).ready( function() {

    /*------------------------------*/
    /*----------Main Slider---------*/ 
    /*------------------------------*/
    var url_path = 'file:///C:/Users/Billy%20Joel%20Ranario/Google%20Drive/__PROJECTS/__DWS%20Projects/Mockups/creative360travel.com/';
    
    // var url_path = "http://mockupdevs.esy.es/~dws/creative360travel.com/";
    
    $( '#banner-content' ).layerSlider({
        autostart: true,
        skin: 'v5',
        twoWaySlideshow : true,
        skinsPath: url_path + 'skins/',
        responsiveUnder: 960,
        layersContainer: 960,
        hoverBottomNav: true,
        thumbnailNavigation : 'hover',
        durationIn : 10000,
        durationOut : 10000
    });

    /*------------------------------*/
    /*----------plugins-------------*/ 
    /*------------------------------*/
    // Transformicon Plugin
    transformicons.add('.tcon');
    // WOW Plugin
    new WOW().init();
    // Nice Scroll Plugin
    $( "html" ).niceScroll( {
        cursorcolor: "#A3212C",
        cursorwidth: "9px",
        zindex: 9999,
        bouncescroll: true,
        scrollspeed: 120
    } );

    var waypoint = new Waypoint( {
        element: document.getElementById( 'reset-waypoint-target' ),
        handler: function() {
            $( '.main-navigation' ).removeClass( 'animate-header' );
            $( '.scrolltop-wrapper' ).fadeOut();
        }
    } );

    var waypoint2 = new Waypoint( {
        element: document.getElementById( 'main-content-wrapper' ),
        handler: function() {
            $( '.main-navigation' ).addClass( 'animate-header' );
            $( '.scrolltop-wrapper' ).fadeIn();
        }
    } );

    // var $document = $(document),
    //     $element = $('#top-nav'),
    //     className = 'hasScrolled';

    // $document.scroll(function() {
    //   if ($document.scrollTop() >= 50) {
    //     // user scrolled 50 pixels or more;
    //     // do stuff
    //     $element.addClass(className);
    //   } else {
    //     $element.removeClass(className);
    //   }
    // });    

    /*------------------------------*/
    /*--------Hover Animation-------*/ 
    /*------------------------------*/
    // For Images
    $( '.img-wrapper' ).mouseover( function() {
        $( this ).children( ':first-child' ).addClass( 'animated pulse hovered' );
        $( this ).children( 'i' ).addClass( 'text-hovered' );
    } );
    $( '.img-wrapper' ).mouseout( function() {
        $( this ).children( ':first-child' ).removeClass( 'animated pulse hovered' );
        $( this ).children( 'i' ).removeClass( 'text-hovered' );
    } );
    // For Features
    $( '.icon-wrapper' ).mouseover( function() {
        $( this ).children( ':first-child' ).addClass( 'animated tada hovered' );
        $( this ).children( 'i' ).addClass( 'text-hovered' );
    } );
    $( '.icon-wrapper' ).mouseout( function() {
        $( this ).children( ':first-child' ).removeClass( 'animated tada hovered' );
        $( this ).children( 'i' ).removeClass( 'text-hovered' );
    } );
} );