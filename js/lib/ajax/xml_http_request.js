// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__18713,handler){
var map__18714 = p__18713;
var map__18714__$1 = ((((!((map__18714 == null)))?((((map__18714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18714):map__18714);
var uri = cljs.core.get.call(null,map__18714__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__18714__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__18714__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__18714__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__18714__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__18714__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__18714__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__18714,map__18714__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__18712_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__18712_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__18714,map__18714__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___18722 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___18722)){
var response_type_18723 = temp__4425__auto___18722;
this$__$1.responseType = cljs.core.name.call(null,response_type_18723);
} else {
}

var seq__18716_18724 = cljs.core.seq.call(null,headers);
var chunk__18717_18725 = null;
var count__18718_18726 = (0);
var i__18719_18727 = (0);
while(true){
if((i__18719_18727 < count__18718_18726)){
var vec__18720_18728 = cljs.core._nth.call(null,chunk__18717_18725,i__18719_18727);
var k_18729 = cljs.core.nth.call(null,vec__18720_18728,(0),null);
var v_18730 = cljs.core.nth.call(null,vec__18720_18728,(1),null);
this$__$1.setRequestHeader(k_18729,v_18730);

var G__18731 = seq__18716_18724;
var G__18732 = chunk__18717_18725;
var G__18733 = count__18718_18726;
var G__18734 = (i__18719_18727 + (1));
seq__18716_18724 = G__18731;
chunk__18717_18725 = G__18732;
count__18718_18726 = G__18733;
i__18719_18727 = G__18734;
continue;
} else {
var temp__4425__auto___18735 = cljs.core.seq.call(null,seq__18716_18724);
if(temp__4425__auto___18735){
var seq__18716_18736__$1 = temp__4425__auto___18735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18716_18736__$1)){
var c__17622__auto___18737 = cljs.core.chunk_first.call(null,seq__18716_18736__$1);
var G__18738 = cljs.core.chunk_rest.call(null,seq__18716_18736__$1);
var G__18739 = c__17622__auto___18737;
var G__18740 = cljs.core.count.call(null,c__17622__auto___18737);
var G__18741 = (0);
seq__18716_18724 = G__18738;
chunk__18717_18725 = G__18739;
count__18718_18726 = G__18740;
i__18719_18727 = G__18741;
continue;
} else {
var vec__18721_18742 = cljs.core.first.call(null,seq__18716_18736__$1);
var k_18743 = cljs.core.nth.call(null,vec__18721_18742,(0),null);
var v_18744 = cljs.core.nth.call(null,vec__18721_18742,(1),null);
this$__$1.setRequestHeader(k_18743,v_18744);

var G__18745 = cljs.core.next.call(null,seq__18716_18736__$1);
var G__18746 = null;
var G__18747 = (0);
var G__18748 = (0);
seq__18716_18724 = G__18745;
chunk__18717_18725 = G__18746;
count__18718_18726 = G__18747;
i__18719_18727 = G__18748;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16819__auto__ = body;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map