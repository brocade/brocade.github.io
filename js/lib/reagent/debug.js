// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__19694__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19695__i = 0, G__19695__a = new Array(arguments.length -  0);
while (G__19695__i < G__19695__a.length) {G__19695__a[G__19695__i] = arguments[G__19695__i + 0]; ++G__19695__i;}
  args = new cljs.core.IndexedSeq(G__19695__a,0);
} 
return G__19694__delegate.call(this,args);};
G__19694.cljs$lang$maxFixedArity = 0;
G__19694.cljs$lang$applyTo = (function (arglist__19696){
var args = cljs.core.seq(arglist__19696);
return G__19694__delegate(args);
});
G__19694.cljs$core$IFn$_invoke$arity$variadic = G__19694__delegate;
return G__19694;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19697__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19698__i = 0, G__19698__a = new Array(arguments.length -  0);
while (G__19698__i < G__19698__a.length) {G__19698__a[G__19698__i] = arguments[G__19698__i + 0]; ++G__19698__i;}
  args = new cljs.core.IndexedSeq(G__19698__a,0);
} 
return G__19697__delegate.call(this,args);};
G__19697.cljs$lang$maxFixedArity = 0;
G__19697.cljs$lang$applyTo = (function (arglist__19699){
var args = cljs.core.seq(arglist__19699);
return G__19697__delegate(args);
});
G__19697.cljs$core$IFn$_invoke$arity$variadic = G__19697__delegate;
return G__19697;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map