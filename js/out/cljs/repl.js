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
var seq__24471_24485 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24472_24486 = null;
var count__24473_24487 = (0);
var i__24474_24488 = (0);
while(true){
if((i__24474_24488 < count__24473_24487)){
var f_24489 = cljs.core._nth.call(null,chunk__24472_24486,i__24474_24488);
cljs.core.println.call(null,"  ",f_24489);

var G__24490 = seq__24471_24485;
var G__24491 = chunk__24472_24486;
var G__24492 = count__24473_24487;
var G__24493 = (i__24474_24488 + (1));
seq__24471_24485 = G__24490;
chunk__24472_24486 = G__24491;
count__24473_24487 = G__24492;
i__24474_24488 = G__24493;
continue;
} else {
var temp__4425__auto___24494 = cljs.core.seq.call(null,seq__24471_24485);
if(temp__4425__auto___24494){
var seq__24471_24495__$1 = temp__4425__auto___24494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24471_24495__$1)){
var c__17622__auto___24496 = cljs.core.chunk_first.call(null,seq__24471_24495__$1);
var G__24497 = cljs.core.chunk_rest.call(null,seq__24471_24495__$1);
var G__24498 = c__17622__auto___24496;
var G__24499 = cljs.core.count.call(null,c__17622__auto___24496);
var G__24500 = (0);
seq__24471_24485 = G__24497;
chunk__24472_24486 = G__24498;
count__24473_24487 = G__24499;
i__24474_24488 = G__24500;
continue;
} else {
var f_24501 = cljs.core.first.call(null,seq__24471_24495__$1);
cljs.core.println.call(null,"  ",f_24501);

var G__24502 = cljs.core.next.call(null,seq__24471_24495__$1);
var G__24503 = null;
var G__24504 = (0);
var G__24505 = (0);
seq__24471_24485 = G__24502;
chunk__24472_24486 = G__24503;
count__24473_24487 = G__24504;
i__24474_24488 = G__24505;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24506 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16819__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24506);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24506)))?cljs.core.second.call(null,arglists_24506):arglists_24506));
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
var seq__24475 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24476 = null;
var count__24477 = (0);
var i__24478 = (0);
while(true){
if((i__24478 < count__24477)){
var vec__24479 = cljs.core._nth.call(null,chunk__24476,i__24478);
var name = cljs.core.nth.call(null,vec__24479,(0),null);
var map__24480 = cljs.core.nth.call(null,vec__24479,(1),null);
var map__24480__$1 = ((((!((map__24480 == null)))?((((map__24480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24480):map__24480);
var doc = cljs.core.get.call(null,map__24480__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24480__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24507 = seq__24475;
var G__24508 = chunk__24476;
var G__24509 = count__24477;
var G__24510 = (i__24478 + (1));
seq__24475 = G__24507;
chunk__24476 = G__24508;
count__24477 = G__24509;
i__24478 = G__24510;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24475);
if(temp__4425__auto__){
var seq__24475__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24475__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__24475__$1);
var G__24511 = cljs.core.chunk_rest.call(null,seq__24475__$1);
var G__24512 = c__17622__auto__;
var G__24513 = cljs.core.count.call(null,c__17622__auto__);
var G__24514 = (0);
seq__24475 = G__24511;
chunk__24476 = G__24512;
count__24477 = G__24513;
i__24478 = G__24514;
continue;
} else {
var vec__24482 = cljs.core.first.call(null,seq__24475__$1);
var name = cljs.core.nth.call(null,vec__24482,(0),null);
var map__24483 = cljs.core.nth.call(null,vec__24482,(1),null);
var map__24483__$1 = ((((!((map__24483 == null)))?((((map__24483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24483):map__24483);
var doc = cljs.core.get.call(null,map__24483__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24483__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24515 = cljs.core.next.call(null,seq__24475__$1);
var G__24516 = null;
var G__24517 = (0);
var G__24518 = (0);
seq__24475 = G__24515;
chunk__24476 = G__24516;
count__24477 = G__24517;
i__24478 = G__24518;
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

//# sourceMappingURL=repl.js.map?rel=1456199290402