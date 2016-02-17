// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.dom.server');
goog.require('cljs.core');
goog.require('cljsjs.react.dom.server');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.interop');
if(typeof reagent.dom.server.server !== 'undefined'){
} else {
reagent.dom.server.server = (function (){var or__16805__auto__ = (function (){var and__16793__auto__ = typeof ReactDOMServer !== 'undefined';
if(and__16793__auto__){
return ReactDOMServer;
} else {
return and__16793__auto__;
}
})();
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
var and__16793__auto__ = typeof require !== 'undefined';
if(and__16793__auto__){
return require("react-dom/server");
} else {
return and__16793__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.server.server)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOMServer"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"server","server",-1155245649,null)))].join('')));
}
/**
 * Turns a component into an HTML string.
 */
reagent.dom.server.render_to_string = (function reagent$dom$server$render_to_string(component){
var _STAR_non_reactive_STAR_24010 = reagent.impl.util._STAR_non_reactive_STAR_;
reagent.impl.util._STAR_non_reactive_STAR_ = true;

try{return (reagent.dom.server.server["renderToString"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_24010;
}});
/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
reagent.dom.server.render_to_static_markup = (function reagent$dom$server$render_to_static_markup(component){
var _STAR_non_reactive_STAR_24012 = reagent.impl.util._STAR_non_reactive_STAR_;
reagent.impl.util._STAR_non_reactive_STAR_ = true;

try{return (reagent.dom.server.server["renderToStaticMarkup"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_24012;
}});

//# sourceMappingURL=server.js.map?rel=1455751533144