/**
 * Precompiled Nunjucks template: vf-inlay.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-inlay"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-body\">\n\n    <section class=\"vf-inlay\">\n      <section class=\"vf-inlay__content\">\n        <div class=\"vf-inlay__content--full-width\">\n";
env.getExtension("render")["run"](context,"@vf-summary--article", function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += runtime.suppressValue(t_1, true && env.opts.autoescape);
output += "        </div>\n        <div class=\"vf-inlay__content--main\">\n";
env.getExtension("render")["run"](context,"@vf-content", function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += runtime.suppressValue(t_3, true && env.opts.autoescape);
output += "        </div>\n        <div class=\"vf-inlay__content--additional\">\n";
env.getExtension("render")["run"](context,"@vf-box--normal-primary", function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += runtime.suppressValue(t_5, true && env.opts.autoescape);
output += "        </div>\n        <div class=\"vf-inlay__content--full-width\">\n";
env.getExtension("render")["run"](context,"@vf-summary--article", function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += runtime.suppressValue(t_7, true && env.opts.autoescape);
output += "        </div>\n      </section>\n    </section>\n\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
