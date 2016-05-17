// Compiled by ClojureScript 1.8.51 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__20403_20407 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__20404_20408 = null;
var count__20405_20409 = (0);
var i__20406_20410 = (0);
while(true){
if((i__20406_20410 < count__20405_20409)){
var k_20411 = cljs.core._nth.call(null,chunk__20404_20408,i__20406_20410);
var v_20412 = (b[k_20411]);
(a[k_20411] = v_20412);

var G__20413 = seq__20403_20407;
var G__20414 = chunk__20404_20408;
var G__20415 = count__20405_20409;
var G__20416 = (i__20406_20410 + (1));
seq__20403_20407 = G__20413;
chunk__20404_20408 = G__20414;
count__20405_20409 = G__20415;
i__20406_20410 = G__20416;
continue;
} else {
var temp__4657__auto___20417 = cljs.core.seq.call(null,seq__20403_20407);
if(temp__4657__auto___20417){
var seq__20403_20418__$1 = temp__4657__auto___20417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20403_20418__$1)){
var c__19266__auto___20419 = cljs.core.chunk_first.call(null,seq__20403_20418__$1);
var G__20420 = cljs.core.chunk_rest.call(null,seq__20403_20418__$1);
var G__20421 = c__19266__auto___20419;
var G__20422 = cljs.core.count.call(null,c__19266__auto___20419);
var G__20423 = (0);
seq__20403_20407 = G__20420;
chunk__20404_20408 = G__20421;
count__20405_20409 = G__20422;
i__20406_20410 = G__20423;
continue;
} else {
var k_20424 = cljs.core.first.call(null,seq__20403_20418__$1);
var v_20425 = (b[k_20424]);
(a[k_20424] = v_20425);

var G__20426 = cljs.core.next.call(null,seq__20403_20418__$1);
var G__20427 = null;
var G__20428 = (0);
var G__20429 = (0);
seq__20403_20407 = G__20426;
chunk__20404_20408 = G__20427;
count__20405_20409 = G__20428;
i__20406_20410 = G__20429;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args20430 = [];
var len__19525__auto___20433 = arguments.length;
var i__19526__auto___20434 = (0);
while(true){
if((i__19526__auto___20434 < len__19525__auto___20433)){
args20430.push((arguments[i__19526__auto___20434]));

var G__20435 = (i__19526__auto___20434 + (1));
i__19526__auto___20434 = G__20435;
continue;
} else {
}
break;
}

var G__20432 = args20430.length;
switch (G__20432) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20430.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__20437 = (i + (2));
var G__20438 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20437;
ret = G__20438;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20439_20443 = cljs.core.seq.call(null,v);
var chunk__20440_20444 = null;
var count__20441_20445 = (0);
var i__20442_20446 = (0);
while(true){
if((i__20442_20446 < count__20441_20445)){
var x_20447 = cljs.core._nth.call(null,chunk__20440_20444,i__20442_20446);
ret.push(x_20447);

var G__20448 = seq__20439_20443;
var G__20449 = chunk__20440_20444;
var G__20450 = count__20441_20445;
var G__20451 = (i__20442_20446 + (1));
seq__20439_20443 = G__20448;
chunk__20440_20444 = G__20449;
count__20441_20445 = G__20450;
i__20442_20446 = G__20451;
continue;
} else {
var temp__4657__auto___20452 = cljs.core.seq.call(null,seq__20439_20443);
if(temp__4657__auto___20452){
var seq__20439_20453__$1 = temp__4657__auto___20452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20439_20453__$1)){
var c__19266__auto___20454 = cljs.core.chunk_first.call(null,seq__20439_20453__$1);
var G__20455 = cljs.core.chunk_rest.call(null,seq__20439_20453__$1);
var G__20456 = c__19266__auto___20454;
var G__20457 = cljs.core.count.call(null,c__19266__auto___20454);
var G__20458 = (0);
seq__20439_20443 = G__20455;
chunk__20440_20444 = G__20456;
count__20441_20445 = G__20457;
i__20442_20446 = G__20458;
continue;
} else {
var x_20459 = cljs.core.first.call(null,seq__20439_20453__$1);
ret.push(x_20459);

var G__20460 = cljs.core.next.call(null,seq__20439_20453__$1);
var G__20461 = null;
var G__20462 = (0);
var G__20463 = (0);
seq__20439_20443 = G__20460;
chunk__20440_20444 = G__20461;
count__20441_20445 = G__20462;
i__20442_20446 = G__20463;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20464_20468 = cljs.core.seq.call(null,v);
var chunk__20465_20469 = null;
var count__20466_20470 = (0);
var i__20467_20471 = (0);
while(true){
if((i__20467_20471 < count__20466_20470)){
var x_20472 = cljs.core._nth.call(null,chunk__20465_20469,i__20467_20471);
ret.push(x_20472);

var G__20473 = seq__20464_20468;
var G__20474 = chunk__20465_20469;
var G__20475 = count__20466_20470;
var G__20476 = (i__20467_20471 + (1));
seq__20464_20468 = G__20473;
chunk__20465_20469 = G__20474;
count__20466_20470 = G__20475;
i__20467_20471 = G__20476;
continue;
} else {
var temp__4657__auto___20477 = cljs.core.seq.call(null,seq__20464_20468);
if(temp__4657__auto___20477){
var seq__20464_20478__$1 = temp__4657__auto___20477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20464_20478__$1)){
var c__19266__auto___20479 = cljs.core.chunk_first.call(null,seq__20464_20478__$1);
var G__20480 = cljs.core.chunk_rest.call(null,seq__20464_20478__$1);
var G__20481 = c__19266__auto___20479;
var G__20482 = cljs.core.count.call(null,c__19266__auto___20479);
var G__20483 = (0);
seq__20464_20468 = G__20480;
chunk__20465_20469 = G__20481;
count__20466_20470 = G__20482;
i__20467_20471 = G__20483;
continue;
} else {
var x_20484 = cljs.core.first.call(null,seq__20464_20478__$1);
ret.push(x_20484);

var G__20485 = cljs.core.next.call(null,seq__20464_20478__$1);
var G__20486 = null;
var G__20487 = (0);
var G__20488 = (0);
seq__20464_20468 = G__20485;
chunk__20465_20469 = G__20486;
count__20466_20470 = G__20487;
i__20467_20471 = G__20488;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20489_20493 = cljs.core.seq.call(null,v);
var chunk__20490_20494 = null;
var count__20491_20495 = (0);
var i__20492_20496 = (0);
while(true){
if((i__20492_20496 < count__20491_20495)){
var x_20497 = cljs.core._nth.call(null,chunk__20490_20494,i__20492_20496);
ret.push(x_20497);

var G__20498 = seq__20489_20493;
var G__20499 = chunk__20490_20494;
var G__20500 = count__20491_20495;
var G__20501 = (i__20492_20496 + (1));
seq__20489_20493 = G__20498;
chunk__20490_20494 = G__20499;
count__20491_20495 = G__20500;
i__20492_20496 = G__20501;
continue;
} else {
var temp__4657__auto___20502 = cljs.core.seq.call(null,seq__20489_20493);
if(temp__4657__auto___20502){
var seq__20489_20503__$1 = temp__4657__auto___20502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20489_20503__$1)){
var c__19266__auto___20504 = cljs.core.chunk_first.call(null,seq__20489_20503__$1);
var G__20505 = cljs.core.chunk_rest.call(null,seq__20489_20503__$1);
var G__20506 = c__19266__auto___20504;
var G__20507 = cljs.core.count.call(null,c__19266__auto___20504);
var G__20508 = (0);
seq__20489_20493 = G__20505;
chunk__20490_20494 = G__20506;
count__20491_20495 = G__20507;
i__20492_20496 = G__20508;
continue;
} else {
var x_20509 = cljs.core.first.call(null,seq__20489_20503__$1);
ret.push(x_20509);

var G__20510 = cljs.core.next.call(null,seq__20489_20503__$1);
var G__20511 = null;
var G__20512 = (0);
var G__20513 = (0);
seq__20489_20493 = G__20510;
chunk__20490_20494 = G__20511;
count__20491_20495 = G__20512;
i__20492_20496 = G__20513;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args20514 = [];
var len__19525__auto___20525 = arguments.length;
var i__19526__auto___20526 = (0);
while(true){
if((i__19526__auto___20526 < len__19525__auto___20525)){
args20514.push((arguments[i__19526__auto___20526]));

var G__20527 = (i__19526__auto___20526 + (1));
i__19526__auto___20526 = G__20527;
continue;
} else {
}
break;
}

var G__20516 = args20514.length;
switch (G__20516) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20514.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__20517 = obj;
G__20517.push(kfn.call(null,k),vfn.call(null,v));

return G__20517;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x20518 = cljs.core.clone.call(null,handlers);
x20518.forEach = ((function (x20518,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__20519 = cljs.core.seq.call(null,coll);
var chunk__20520 = null;
var count__20521 = (0);
var i__20522 = (0);
while(true){
if((i__20522 < count__20521)){
var vec__20523 = cljs.core._nth.call(null,chunk__20520,i__20522);
var k = cljs.core.nth.call(null,vec__20523,(0),null);
var v = cljs.core.nth.call(null,vec__20523,(1),null);
f.call(null,v,k);

var G__20529 = seq__20519;
var G__20530 = chunk__20520;
var G__20531 = count__20521;
var G__20532 = (i__20522 + (1));
seq__20519 = G__20529;
chunk__20520 = G__20530;
count__20521 = G__20531;
i__20522 = G__20532;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20519);
if(temp__4657__auto__){
var seq__20519__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20519__$1)){
var c__19266__auto__ = cljs.core.chunk_first.call(null,seq__20519__$1);
var G__20533 = cljs.core.chunk_rest.call(null,seq__20519__$1);
var G__20534 = c__19266__auto__;
var G__20535 = cljs.core.count.call(null,c__19266__auto__);
var G__20536 = (0);
seq__20519 = G__20533;
chunk__20520 = G__20534;
count__20521 = G__20535;
i__20522 = G__20536;
continue;
} else {
var vec__20524 = cljs.core.first.call(null,seq__20519__$1);
var k = cljs.core.nth.call(null,vec__20524,(0),null);
var v = cljs.core.nth.call(null,vec__20524,(1),null);
f.call(null,v,k);

var G__20537 = cljs.core.next.call(null,seq__20519__$1);
var G__20538 = null;
var G__20539 = (0);
var G__20540 = (0);
seq__20519 = G__20537;
chunk__20520 = G__20538;
count__20521 = G__20539;
i__20522 = G__20540;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20518,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x20518;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args20541 = [];
var len__19525__auto___20547 = arguments.length;
var i__19526__auto___20548 = (0);
while(true){
if((i__19526__auto___20548 < len__19525__auto___20547)){
args20541.push((arguments[i__19526__auto___20548]));

var G__20549 = (i__19526__auto___20548 + (1));
i__19526__auto___20548 = G__20549;
continue;
} else {
}
break;
}

var G__20543 = args20541.length;
switch (G__20543) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20541.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit20544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit20544 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta20545){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta20545 = meta20545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit20544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20546,meta20545__$1){
var self__ = this;
var _20546__$1 = this;
return (new cognitect.transit.t_cognitect$transit20544(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta20545__$1));
});

cognitect.transit.t_cognitect$transit20544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20546){
var self__ = this;
var _20546__$1 = this;
return self__.meta20545;
});

cognitect.transit.t_cognitect$transit20544.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20544.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20544.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20544.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta20545","meta20545",1032698265,null)], null);
});

cognitect.transit.t_cognitect$transit20544.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit20544.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit20544";

cognitect.transit.t_cognitect$transit20544.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cognitect.transit/t_cognitect$transit20544");
});

cognitect.transit.__GT_t_cognitect$transit20544 = (function cognitect$transit$__GT_t_cognitect$transit20544(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20545){
return (new cognitect.transit.t_cognitect$transit20544(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20545));
});

}

return (new cognitect.transit.t_cognitect$transit20544(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__18455__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18455__auto__)){
return or__18455__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1463495153273