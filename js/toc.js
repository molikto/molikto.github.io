


!function ($) {

  $(function () {

    var toc = $(".bs-docs-sidebar");
    toc.toc({
      scope: "#content",
      list_type: "ul"
    });


    // IE10 viewport hack for Surface/desktop Windows 8 bug
    //
    // See Getting Started docs for more information
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style')
      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      )
      document.querySelector('head').appendChild(msViewportStyle)
    }

    var $window = $(window)
    var $body   = $(document.body)

    //var navHeight = $('.navbar').outerHeight(true) + 10


    $body.scrollspy({
      target: '.bs-docs-sidebar'
    });

    $window.on('load', function () {
      $body.scrollspy('refresh')
    });


 
    $('.bs-docs-container [href=#]').click(function (e) {
      e.preventDefault()
    })

    // back to top
    setTimeout(function () {
      var $sideBar = $('.bs-docs-sidebar')
      $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop      = $sideBar.offset().top
            var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
            var navOuterHeight = $('.navbar-default').height()

            return (this.top = offsetTop - navOuterHeight - sideBarMargin)
          },
          bottom: function () {
            return (this.bottom = $('.footer').outerHeight(true))
          }
        }
      })
    }, 100);

    setTimeout(function () {
      $('.top').affix()
    }, 100);



  })

}(jQuery)