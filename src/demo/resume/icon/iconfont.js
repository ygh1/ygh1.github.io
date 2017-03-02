;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconfontbiaozhunmoban01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M685.424818 155.291832l-39.476083-9.712199-125.352963 509.493923c-82.655512-65.398476-205.016327-34.17331-243.86103 45.712111-12.666484 25.993001-6.018064 57.95597 0.202615 75.089186 33.17354 91.364871 153.168472 84.049255 233.44275 13.19144 33.023114-29.148877 43.258223-60.231803 62.442144-138.205689L650.673339 334.437955c47.178509 10.099009 113.477494 86.86437 118.413923 142.888338 3.103688 35.539424-7.522324 79.317487-31.753191 105.942891-6.149047 6.729262-24.789593 29.28293-15.446807 27.576055 17.396205-3.178389 25.749454-9.743922 43.581588-26.340925 16.188704-15.068184 31.66928-39.888476 38.125319-56.249095C872.507704 353.224834 667.787112 296.462039 685.424818 155.291832"  ></path>' +
    '' +
    '<path d="M512 981.675032c-63.398936 0-124.909871-12.420891-182.823885-36.915771-55.929824-23.655769-106.157785-57.519018-149.287071-100.648304-43.129286-43.128263-76.992535-93.356224-100.649328-149.287071-24.495904-57.914014-36.915771-119.423927-36.915771-182.823885 0-63.398936 12.419867-124.909871 36.915771-182.822862 23.656793-55.930847 57.520041-106.157785 100.649328-149.287071 43.129286-43.129286 93.356224-76.992535 149.287071-100.649328 57.914014-24.495904 119.42495-36.915771 182.823885-36.915771s124.908848 12.419867 182.822862 36.915771c55.930847 23.656793 106.157785 57.520041 149.287071 100.649328 43.129286 43.128263 76.992535 93.356224 100.648304 149.287071 24.495904 57.912991 36.915771 119.423927 36.915771 182.822862 0 63.399959-12.420891 124.909871-36.915771 182.823885-23.655769 55.929824-57.519018 106.157785-100.648304 149.287071-43.128263 43.129286-93.355201 76.992535-149.287071 100.648304C636.908848 969.254142 575.398936 981.675032 512 981.675032zM512 73.024154c-59.267848 0-116.755144 11.604292-170.864506 34.490535-52.271504 22.10853-99.217722 53.762461-139.538033 94.081749s-71.973218 87.267553-94.082772 139.538033c-22.886243 54.108339-34.490535 111.595634-34.490535 170.864506s11.604292 116.755144 34.490535 170.864506c22.10853 52.271504 53.763484 99.218746 94.082772 139.538033s87.266529 71.973218 139.538033 94.081749c54.109362 22.886243 111.596657 34.490535 170.864506 34.490535 59.267848 0 116.755144-11.604292 170.864506-34.490535 52.271504-22.10853 99.218746-53.762461 139.538033-94.081749s71.973218-87.266529 94.081749-139.538033c22.886243-54.109362 34.490535-111.596657 34.490535-170.864506s-11.604292-116.755144-34.490535-170.864506c-22.10853-52.271504-53.762461-99.218746-94.081749-139.538033s-87.266529-71.973218-139.538033-94.081749C628.755144 84.628446 571.267848 73.024154 512 73.024154z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shanghua" viewBox="0 0 1171 1024">' +
    '' +
    '<path d="M566.312485 618.082487 198.037943 986.357029 146.289371 934.645029 568.945371 511.989029 620.657371 563.7376 618.134199 566.260773 1005.202286 953.362286 953.380571 1005.184 566.312485 618.082487 566.312485 618.082487ZM566.292846 106.080329 51.712 620.628114 0 568.952686 568.941714 0.010971 620.653714 51.722971 618.116242 54.260297 1151.488 587.666286 1099.666286 639.488 566.292846 106.080329 566.292846 106.080329Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)