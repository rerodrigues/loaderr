(function(){
    var demoStyles = "demo/css/demo_module2.css",
        demoScripts = [
            ["demo/js/dist/jquery-1.10.2.min.js", !window.jQuery ], /* will be skipped. jQuery is already loaded */
            ["demo/js/dist/underscore-1.6.0.min.js", !window._ ]
        ];
        
    loaderr.loadStyles(demoStyles, function() {
        
        loaderr.loadScripts(demoScripts, function() {
            console.info('Demo module 2 loaded! (jQuery + Underscore.js)');
            
            initDemo2();
        });
    });
})();


function initDemo2(){
    $.get('demo/tpl/box1.tpl', function(responseText){
        var tplData = {
            date: new Date().toDateString(),
            ua : navigator.userAgent
        };
        
        var tpl = _.template(responseText, tplData);
        
        $('#example_box').after(tpl);
    });
}