// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$log,(function (p1__10968_SHARP_){
return console.log(p1__10968_SHARP_);
}),cljs.core.cst$kw$warn,(function (p1__10969_SHARP_){
return console.warn(p1__10969_SHARP_);
}),cljs.core.cst$kw$error,(function (p1__10970_SHARP_){
return console.error(p1__10970_SHARP_);
}),cljs.core.cst$kw$group,(function (p1__10971_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__10971_SHARP_);
} else {
return console.log(p1__10971_SHARP_);
}
}),cljs.core.cst$kw$groupEnd,(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(re_frame.utils.default_loggers) : cljs.core.atom.call(null,re_frame.utils.default_loggers));
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_loggers)),cljs.core.set(cljs.core.keys(re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$empty_QMARK_,cljs.core.list(cljs.core.cst$sym$difference,cljs.core.list(cljs.core.cst$sym$set,cljs.core.list(cljs.core.cst$sym$keys,cljs.core.cst$sym$new_DASH_loggers)),cljs.core.list(cljs.core.cst$sym$set,cljs.core.list(cljs.core.cst$sym$keys,cljs.core.cst$sym$default_DASH_loggers))))], 0)))].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__5736__auto__ = [];
var len__5729__auto___10973 = arguments.length;
var i__5730__auto___10974 = (0);
while(true){
if((i__5730__auto___10974 < len__5729__auto___10973)){
args__5736__auto__.push((arguments[i__5730__auto___10974]));

var G__10975 = (i__5730__auto___10974 + (1));
i__5730__auto___10974 = G__10975;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$log.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq10972){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10972));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__5736__auto__ = [];
var len__5729__auto___10977 = arguments.length;
var i__5730__auto___10978 = (0);
while(true){
if((i__5730__auto___10978 < len__5729__auto___10977)){
args__5736__auto__.push((arguments[i__5730__auto___10978]));

var G__10979 = (i__5730__auto___10978 + (1));
i__5730__auto___10978 = G__10979;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$warn.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq10976){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10976));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__5736__auto__ = [];
var len__5729__auto___10981 = arguments.length;
var i__5730__auto___10982 = (0);
while(true){
if((i__5730__auto___10982 < len__5729__auto___10981)){
args__5736__auto__.push((arguments[i__5730__auto___10982]));

var G__10983 = (i__5730__auto___10982 + (1));
i__5730__auto___10982 = G__10983;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq10980){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10980));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__5736__auto__ = [];
var len__5729__auto___10985 = arguments.length;
var i__5730__auto___10986 = (0);
while(true){
if((i__5730__auto___10986 < len__5729__auto___10985)){
args__5736__auto__.push((arguments[i__5730__auto___10986]));

var G__10987 = (i__5730__auto___10986 + (1));
i__5730__auto___10986 = G__10987;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$groupEnd.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq10984){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10984));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__5736__auto__ = [];
var len__5729__auto___10989 = arguments.length;
var i__5730__auto___10990 = (0);
while(true){
if((i__5730__auto___10990 < len__5729__auto___10989)){
args__5736__auto__.push((arguments[i__5730__auto___10990]));

var G__10991 = (i__5730__auto___10990 + (1));
i__5730__auto___10990 = G__10991;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq10988){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10988));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: expected a vector event, but got: ",v], 0));
}
});
