// Compiled by ClojureScript 1.7.170 {}
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
var seq__18832_18836 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__18833_18837 = null;
var count__18834_18838 = (0);
var i__18835_18839 = (0);
while(true){
if((i__18835_18839 < count__18834_18838)){
var k_18840 = cljs.core._nth.call(null,chunk__18833_18837,i__18835_18839);
var v_18841 = (b[k_18840]);
(a[k_18840] = v_18841);

var G__18842 = seq__18832_18836;
var G__18843 = chunk__18833_18837;
var G__18844 = count__18834_18838;
var G__18845 = (i__18835_18839 + (1));
seq__18832_18836 = G__18842;
chunk__18833_18837 = G__18843;
count__18834_18838 = G__18844;
i__18835_18839 = G__18845;
continue;
} else {
var temp__4657__auto___18846 = cljs.core.seq.call(null,seq__18832_18836);
if(temp__4657__auto___18846){
var seq__18832_18847__$1 = temp__4657__auto___18846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18832_18847__$1)){
var c__17701__auto___18848 = cljs.core.chunk_first.call(null,seq__18832_18847__$1);
var G__18849 = cljs.core.chunk_rest.call(null,seq__18832_18847__$1);
var G__18850 = c__17701__auto___18848;
var G__18851 = cljs.core.count.call(null,c__17701__auto___18848);
var G__18852 = (0);
seq__18832_18836 = G__18849;
chunk__18833_18837 = G__18850;
count__18834_18838 = G__18851;
i__18835_18839 = G__18852;
continue;
} else {
var k_18853 = cljs.core.first.call(null,seq__18832_18847__$1);
var v_18854 = (b[k_18853]);
(a[k_18853] = v_18854);

var G__18855 = cljs.core.next.call(null,seq__18832_18847__$1);
var G__18856 = null;
var G__18857 = (0);
var G__18858 = (0);
seq__18832_18836 = G__18855;
chunk__18833_18837 = G__18856;
count__18834_18838 = G__18857;
i__18835_18839 = G__18858;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cognitect.transit/VectorBuilder");
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
var args18859 = [];
var len__17956__auto___18862 = arguments.length;
var i__17957__auto___18863 = (0);
while(true){
if((i__17957__auto___18863 < len__17956__auto___18862)){
args18859.push((arguments[i__17957__auto___18863]));

var G__18864 = (i__17957__auto___18863 + (1));
i__17957__auto___18863 = G__18864;
continue;
} else {
}
break;
}

var G__18861 = args18859.length;
switch (G__18861) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18859.length)].join('')));

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
var G__18866 = (i + (2));
var G__18867 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__18866;
ret = G__18867;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cognitect.transit/SymbolHandler");
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
var seq__18868_18872 = cljs.core.seq.call(null,v);
var chunk__18869_18873 = null;
var count__18870_18874 = (0);
var i__18871_18875 = (0);
while(true){
if((i__18871_18875 < count__18870_18874)){
var x_18876 = cljs.core._nth.call(null,chunk__18869_18873,i__18871_18875);
ret.push(x_18876);

var G__18877 = seq__18868_18872;
var G__18878 = chunk__18869_18873;
var G__18879 = count__18870_18874;
var G__18880 = (i__18871_18875 + (1));
seq__18868_18872 = G__18877;
chunk__18869_18873 = G__18878;
count__18870_18874 = G__18879;
i__18871_18875 = G__18880;
continue;
} else {
var temp__4657__auto___18881 = cljs.core.seq.call(null,seq__18868_18872);
if(temp__4657__auto___18881){
var seq__18868_18882__$1 = temp__4657__auto___18881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18868_18882__$1)){
var c__17701__auto___18883 = cljs.core.chunk_first.call(null,seq__18868_18882__$1);
var G__18884 = cljs.core.chunk_rest.call(null,seq__18868_18882__$1);
var G__18885 = c__17701__auto___18883;
var G__18886 = cljs.core.count.call(null,c__17701__auto___18883);
var G__18887 = (0);
seq__18868_18872 = G__18884;
chunk__18869_18873 = G__18885;
count__18870_18874 = G__18886;
i__18871_18875 = G__18887;
continue;
} else {
var x_18888 = cljs.core.first.call(null,seq__18868_18882__$1);
ret.push(x_18888);

var G__18889 = cljs.core.next.call(null,seq__18868_18882__$1);
var G__18890 = null;
var G__18891 = (0);
var G__18892 = (0);
seq__18868_18872 = G__18889;
chunk__18869_18873 = G__18890;
count__18870_18874 = G__18891;
i__18871_18875 = G__18892;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cognitect.transit/MapHandler");
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
var seq__18893_18897 = cljs.core.seq.call(null,v);
var chunk__18894_18898 = null;
var count__18895_18899 = (0);
var i__18896_18900 = (0);
while(true){
if((i__18896_18900 < count__18895_18899)){
var x_18901 = cljs.core._nth.call(null,chunk__18894_18898,i__18896_18900);
ret.push(x_18901);

var G__18902 = seq__18893_18897;
var G__18903 = chunk__18894_18898;
var G__18904 = count__18895_18899;
var G__18905 = (i__18896_18900 + (1));
seq__18893_18897 = G__18902;
chunk__18894_18898 = G__18903;
count__18895_18899 = G__18904;
i__18896_18900 = G__18905;
continue;
} else {
var temp__4657__auto___18906 = cljs.core.seq.call(null,seq__18893_18897);
if(temp__4657__auto___18906){
var seq__18893_18907__$1 = temp__4657__auto___18906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18893_18907__$1)){
var c__17701__auto___18908 = cljs.core.chunk_first.call(null,seq__18893_18907__$1);
var G__18909 = cljs.core.chunk_rest.call(null,seq__18893_18907__$1);
var G__18910 = c__17701__auto___18908;
var G__18911 = cljs.core.count.call(null,c__17701__auto___18908);
var G__18912 = (0);
seq__18893_18897 = G__18909;
chunk__18894_18898 = G__18910;
count__18895_18899 = G__18911;
i__18896_18900 = G__18912;
continue;
} else {
var x_18913 = cljs.core.first.call(null,seq__18893_18907__$1);
ret.push(x_18913);

var G__18914 = cljs.core.next.call(null,seq__18893_18907__$1);
var G__18915 = null;
var G__18916 = (0);
var G__18917 = (0);
seq__18893_18897 = G__18914;
chunk__18894_18898 = G__18915;
count__18895_18899 = G__18916;
i__18896_18900 = G__18917;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cognitect.transit/SetHandler");
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
var seq__18918_18922 = cljs.core.seq.call(null,v);
var chunk__18919_18923 = null;
var count__18920_18924 = (0);
var i__18921_18925 = (0);
while(true){
if((i__18921_18925 < count__18920_18924)){
var x_18926 = cljs.core._nth.call(null,chunk__18919_18923,i__18921_18925);
ret.push(x_18926);

var G__18927 = seq__18918_18922;
var G__18928 = chunk__18919_18923;
var G__18929 = count__18920_18924;
var G__18930 = (i__18921_18925 + (1));
seq__18918_18922 = G__18927;
chunk__18919_18923 = G__18928;
count__18920_18924 = G__18929;
i__18921_18925 = G__18930;
continue;
} else {
var temp__4657__auto___18931 = cljs.core.seq.call(null,seq__18918_18922);
if(temp__4657__auto___18931){
var seq__18918_18932__$1 = temp__4657__auto___18931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18918_18932__$1)){
var c__17701__auto___18933 = cljs.core.chunk_first.call(null,seq__18918_18932__$1);
var G__18934 = cljs.core.chunk_rest.call(null,seq__18918_18932__$1);
var G__18935 = c__17701__auto___18933;
var G__18936 = cljs.core.count.call(null,c__17701__auto___18933);
var G__18937 = (0);
seq__18918_18922 = G__18934;
chunk__18919_18923 = G__18935;
count__18920_18924 = G__18936;
i__18921_18925 = G__18937;
continue;
} else {
var x_18938 = cljs.core.first.call(null,seq__18918_18932__$1);
ret.push(x_18938);

var G__18939 = cljs.core.next.call(null,seq__18918_18932__$1);
var G__18940 = null;
var G__18941 = (0);
var G__18942 = (0);
seq__18918_18922 = G__18939;
chunk__18919_18923 = G__18940;
count__18920_18924 = G__18941;
i__18921_18925 = G__18942;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cognitect.transit/UUIDHandler");
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
var args18943 = [];
var len__17956__auto___18954 = arguments.length;
var i__17957__auto___18955 = (0);
while(true){
if((i__17957__auto___18955 < len__17956__auto___18954)){
args18943.push((arguments[i__17957__auto___18955]));

var G__18956 = (i__17957__auto___18955 + (1));
i__17957__auto___18955 = G__18956;
continue;
} else {
}
break;
}

var G__18945 = args18943.length;
switch (G__18945) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18943.length)].join('')));

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
var G__18946 = obj;
G__18946.push(kfn.call(null,k),vfn.call(null,v));

return G__18946;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x18947 = cljs.core.clone.call(null,handlers);
x18947.forEach = ((function (x18947,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__18948 = cljs.core.seq.call(null,coll);
var chunk__18949 = null;
var count__18950 = (0);
var i__18951 = (0);
while(true){
if((i__18951 < count__18950)){
var vec__18952 = cljs.core._nth.call(null,chunk__18949,i__18951);
var k = cljs.core.nth.call(null,vec__18952,(0),null);
var v = cljs.core.nth.call(null,vec__18952,(1),null);
f.call(null,v,k);

var G__18958 = seq__18948;
var G__18959 = chunk__18949;
var G__18960 = count__18950;
var G__18961 = (i__18951 + (1));
seq__18948 = G__18958;
chunk__18949 = G__18959;
count__18950 = G__18960;
i__18951 = G__18961;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__18948);
if(temp__4657__auto__){
var seq__18948__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18948__$1)){
var c__17701__auto__ = cljs.core.chunk_first.call(null,seq__18948__$1);
var G__18962 = cljs.core.chunk_rest.call(null,seq__18948__$1);
var G__18963 = c__17701__auto__;
var G__18964 = cljs.core.count.call(null,c__17701__auto__);
var G__18965 = (0);
seq__18948 = G__18962;
chunk__18949 = G__18963;
count__18950 = G__18964;
i__18951 = G__18965;
continue;
} else {
var vec__18953 = cljs.core.first.call(null,seq__18948__$1);
var k = cljs.core.nth.call(null,vec__18953,(0),null);
var v = cljs.core.nth.call(null,vec__18953,(1),null);
f.call(null,v,k);

var G__18966 = cljs.core.next.call(null,seq__18948__$1);
var G__18967 = null;
var G__18968 = (0);
var G__18969 = (0);
seq__18948 = G__18966;
chunk__18949 = G__18967;
count__18950 = G__18968;
i__18951 = G__18969;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18947,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x18947;
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
var args18970 = [];
var len__17956__auto___18976 = arguments.length;
var i__17957__auto___18977 = (0);
while(true){
if((i__17957__auto___18977 < len__17956__auto___18976)){
args18970.push((arguments[i__17957__auto___18977]));

var G__18978 = (i__17957__auto___18977 + (1));
i__17957__auto___18977 = G__18978;
continue;
} else {
}
break;
}

var G__18972 = args18970.length;
switch (G__18972) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18970.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit18973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit18973 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta18974){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta18974 = meta18974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit18973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18975,meta18974__$1){
var self__ = this;
var _18975__$1 = this;
return (new cognitect.transit.t_cognitect$transit18973(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta18974__$1));
});

cognitect.transit.t_cognitect$transit18973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18975){
var self__ = this;
var _18975__$1 = this;
return self__.meta18974;
});

cognitect.transit.t_cognitect$transit18973.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18973.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18973.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18973.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta18974","meta18974",213654395,null)], null);
});

cognitect.transit.t_cognitect$transit18973.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit18973.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit18973";

cognitect.transit.t_cognitect$transit18973.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cognitect.transit/t_cognitect$transit18973");
});

cognitect.transit.__GT_t_cognitect$transit18973 = (function cognitect$transit$__GT_t_cognitect$transit18973(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18974){
return (new cognitect.transit.t_cognitect$transit18973(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18974));
});

}

return (new cognitect.transit.t_cognitect$transit18973(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__16898__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16898__auto__)){
return or__16898__auto__;
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

//# sourceMappingURL=transit.js.map