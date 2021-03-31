/**
 * Precompiled Nunjucks template: vf-form.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<form class=\"vf-stack vf-stack--400\"";
if(runtime.contextOrFrameLookup(context, frame, "form_action")) {
output += "action=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "form_action"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.contextOrFrameLookup(context, frame, "form_method")) {
output += "method=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "form_method"), env.opts.autoescape);
output += "\"";
;
}
output += ">\n";
env.getExtension("render")["run"](context,"@vf-form__item--example", function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += runtime.suppressValue(t_1, true && env.opts.autoescape);
output += "\n";
env.getExtension("render")["run"](context,"@vf-form__item--example", function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += runtime.suppressValue(t_3, true && env.opts.autoescape);
output += "\n";
env.getExtension("render")["run"](context,"@vf-form__checkbox--stacked", function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += runtime.suppressValue(t_5, true && env.opts.autoescape);
output += "\n";
env.getExtension("render")["run"](context,"@vf-form__radio--stacked", function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += runtime.suppressValue(t_7, true && env.opts.autoescape);
output += "\n";
env.getExtension("render")["run"](context,"@vf-form__select", function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += runtime.suppressValue(t_9, true && env.opts.autoescape);
output += "\n";
env.getExtension("render")["run"](context,"@vf-form__textarea", function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += runtime.suppressValue(t_11, true && env.opts.autoescape);
output += "\n  <button class=\"vf-button vf-button--primary\">Submit</button>\n\n</form>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
