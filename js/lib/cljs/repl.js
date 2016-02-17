// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24457_24471 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24458_24472 = null;
var count__24459_24473 = (0);
var i__24460_24474 = (0);
while(true){
if((i__24460_24474 < count__24459_24473)){
var f_24475 = cljs.core._nth.call(null,chunk__24458_24472,i__24460_24474);
cljs.core.println.call(null,"  ",f_24475);

var G__24476 = seq__24457_24471;
var G__24477 = chunk__24458_24472;
var G__24478 = count__24459_24473;
var G__24479 = (i__24460_24474 + (1));
seq__24457_24471 = G__24476;
chunk__24458_24472 = G__24477;
count__24459_24473 = G__24478;
i__24460_24474 = G__24479;
continue;
} else {
var temp__4425__auto___24480 = cljs.core.seq.call(null,seq__24457_24471);
if(temp__4425__auto___24480){
var seq__24457_24481__$1 = temp__4425__auto___24480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24457_24481__$1)){
var c__17608__auto___24482 = cljs.core.chunk_first.call(null,seq__24457_24481__$1);
var G__24483 = cljs.core.chunk_rest.call(null,seq__24457_24481__$1);
var G__24484 = c__17608__auto___24482;
var G__24485 = cljs.core.count.call(null,c__17608__auto___24482);
var G__24486 = (0);
seq__24457_24471 = G__24483;
chunk__24458_24472 = G__24484;
count__24459_24473 = G__24485;
i__24460_24474 = G__24486;
continue;
} else {
var f_24487 = cljs.core.first.call(null,seq__24457_24481__$1);
cljs.core.println.call(null,"  ",f_24487);

var G__24488 = cljs.core.next.call(null,seq__24457_24481__$1);
var G__24489 = null;
var G__24490 = (0);
var G__24491 = (0);
seq__24457_24471 = G__24488;
chunk__24458_24472 = G__24489;
count__24459_24473 = G__24490;
i__24460_24474 = G__24491;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24492 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16805__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24492);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24492)))?cljs.core.second.call(null,arglists_24492):arglists_24492));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24461 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24462 = null;
var count__24463 = (0);
var i__24464 = (0);
while(true){
if((i__24464 < count__24463)){
var vec__24465 = cljs.core._nth.call(null,chunk__24462,i__24464);
var name = cljs.core.nth.call(null,vec__24465,(0),null);
var map__24466 = cljs.core.nth.call(null,vec__24465,(1),null);
var map__24466__$1 = ((((!((map__24466 == null)))?((((map__24466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24466):map__24466);
var doc = cljs.core.get.call(null,map__24466__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24466__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24493 = seq__24461;
var G__24494 = chunk__24462;
var G__24495 = count__24463;
var G__24496 = (i__24464 + (1));
seq__24461 = G__24493;
chunk__24462 = G__24494;
count__24463 = G__24495;
i__24464 = G__24496;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24461);
if(temp__4425__auto__){
var seq__24461__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24461__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__24461__$1);
var G__24497 = cljs.core.chunk_rest.call(null,seq__24461__$1);
var G__24498 = c__17608__auto__;
var G__24499 = cljs.core.count.call(null,c__17608__auto__);
var G__24500 = (0);
seq__24461 = G__24497;
chunk__24462 = G__24498;
count__24463 = G__24499;
i__24464 = G__24500;
continue;
} else {
var vec__24468 = cljs.core.first.call(null,seq__24461__$1);
var name = cljs.core.nth.call(null,vec__24468,(0),null);
var map__24469 = cljs.core.nth.call(null,vec__24468,(1),null);
var map__24469__$1 = ((((!((map__24469 == null)))?((((map__24469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24469):map__24469);
var doc = cljs.core.get.call(null,map__24469__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24469__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24501 = cljs.core.next.call(null,seq__24461__$1);
var G__24502 = null;
var G__24503 = (0);
var G__24504 = (0);
seq__24461 = G__24501;
chunk__24462 = G__24502;
count__24463 = G__24503;
i__24464 = G__24504;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1455751535676