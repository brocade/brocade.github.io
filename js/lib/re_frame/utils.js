// Compiled by ClojureScript 1.8.51 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__20232_SHARP_){
return console.log(p1__20232_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__20233_SHARP_){
return console.warn(p1__20233_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__20234_SHARP_){
return console.error(p1__20234_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__20235_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__20235_SHARP_);
} else {
return console.log(p1__20235_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str("(empty? (difference (set (keys new-loggers)) (set (keys default-loggers))))")].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__19532__auto__ = [];
var len__19525__auto___20237 = arguments.length;
var i__19526__auto___20238 = (0);
while(true){
if((i__19526__auto___20238 < len__19525__auto___20237)){
args__19532__auto__.push((arguments[i__19526__auto___20238]));

var G__20239 = (i__19526__auto___20238 + (1));
i__19526__auto___20238 = G__20239;
continue;
} else {
}
break;
}

var argseq__19533__auto__ = ((((0) < args__19532__auto__.length))?(new cljs.core.IndexedSeq(args__19532__auto__.slice((0)),(0),null)):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__19533__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq20236){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20236));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__19532__auto__ = [];
var len__19525__auto___20241 = arguments.length;
var i__19526__auto___20242 = (0);
while(true){
if((i__19526__auto___20242 < len__19525__auto___20241)){
args__19532__auto__.push((arguments[i__19526__auto___20242]));

var G__20243 = (i__19526__auto___20242 + (1));
i__19526__auto___20242 = G__20243;
continue;
} else {
}
break;
}

var argseq__19533__auto__ = ((((0) < args__19532__auto__.length))?(new cljs.core.IndexedSeq(args__19532__auto__.slice((0)),(0),null)):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__19533__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq20240){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20240));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__19532__auto__ = [];
var len__19525__auto___20245 = arguments.length;
var i__19526__auto___20246 = (0);
while(true){
if((i__19526__auto___20246 < len__19525__auto___20245)){
args__19532__auto__.push((arguments[i__19526__auto___20246]));

var G__20247 = (i__19526__auto___20246 + (1));
i__19526__auto___20246 = G__20247;
continue;
} else {
}
break;
}

var argseq__19533__auto__ = ((((0) < args__19532__auto__.length))?(new cljs.core.IndexedSeq(args__19532__auto__.slice((0)),(0),null)):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__19533__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq20244){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20244));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__19532__auto__ = [];
var len__19525__auto___20249 = arguments.length;
var i__19526__auto___20250 = (0);
while(true){
if((i__19526__auto___20250 < len__19525__auto___20249)){
args__19532__auto__.push((arguments[i__19526__auto___20250]));

var G__20251 = (i__19526__auto___20250 + (1));
i__19526__auto___20250 = G__20251;
continue;
} else {
}
break;
}

var argseq__19533__auto__ = ((((0) < args__19532__auto__.length))?(new cljs.core.IndexedSeq(args__19532__auto__.slice((0)),(0),null)):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__19533__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq20248){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20248));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__19532__auto__ = [];
var len__19525__auto___20253 = arguments.length;
var i__19526__auto___20254 = (0);
while(true){
if((i__19526__auto___20254 < len__19525__auto___20253)){
args__19532__auto__.push((arguments[i__19526__auto___20254]));

var G__20255 = (i__19526__auto___20254 + (1));
i__19526__auto___20254 = G__20255;
continue;
} else {
}
break;
}

var argseq__19533__auto__ = ((((0) < args__19532__auto__.length))?(new cljs.core.IndexedSeq(args__19532__auto__.slice((0)),(0),null)):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__19533__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq20252){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20252));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1463495152403