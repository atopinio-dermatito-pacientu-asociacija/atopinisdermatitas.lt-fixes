/**
* Atopinio dermatito pacientų asociacija
* Default
*/

(function () {
    function onResourcesLoaded(Curator) {
        if (window.jQuery) {
            jQuery(window).trigger('curatorCssLoaded');
        }
        if (typeof onCuratorBeforeBootstrap === 'function') {
            onCuratorBeforeBootstrap();
        }
        
        
        
        Curator.loadCSS (config);
        Curator.loadWidget(config);
    }

    function addJsFile (scriptSrc, callback) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        document.body.appendChild(s);
        s.onload = callback;
        s.src = scriptSrc;
    }

    function addCssFile (cssSrc, callback, eCB) {
        var head  = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        head.appendChild(link);
        link.onload = callback;
        link.onerror = eCB;
        link.href = cssSrc;
    }

    function loadNextResource () {
        resourcesLoaded++;
        if (resourcesLoaded === resources.length){
            onResourcesLoaded(window.Curator);
        } else {
            var r = resources[resourcesLoaded];
            if (r.indexOf('.js') === r.length - 3) {
                addJsFile (r, loadNextResource);
            } else {
                addCssFile (r, loadNextResource, loadNextResource);
            }
        }
    }
    
    var config = {"maxHeight":0,"postsPerPage":6,"lang":"en","postClickAction":"open-popup","showShareIcons":true,"showReadMorePost":false,"showReadMorePopup":false,"waterfall":{"showLoadMore":true,"continuousScroll":false,"gridWidth":300,"animate":true,"animateSpeed":400},"grid":{"minWidth":200,"showLoadMore":false,"rows":3},"carousel":{"autoPlay":true,"infinite":true,"minWidth":300},"panel":{},"filter":{"showNetworks":false,"networksLabel":"SourceNetworks:","showSources":false,"sourcesLabel":"Sources:"},"type":"Waterfall","container":"#curator-feed","feedId":"3a2a646f-d0b3-4dba-b6dc-c58ed7d1a7d6","apiEndpoint":"https:\/\/api.curator.io\/v1.1","debug":0};

    var resourcesLoaded = -1;
    var resources = [];
    resources.push('https://cdn.curator.io/3.1/js/curator.min.js');
    resources.push('https://cdn.curator.io/3.1/css/curator.css');
    resources.push('https://atopinio-dermatito-pacientu-asociacija.github.io/atopinisdermatitas.lt-fixes/curator.io/3a2a646f-d0b3-4dba-b6dc-c58ed7d1a7d6.css');

    
    
    loadNextResource ();
})();