// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__18790,handler){
var map__18791 = p__18790;
var map__18791__$1 = ((((!((map__18791 == null)))?((((map__18791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18791):map__18791);
var uri = cljs.core.get.call(null,map__18791__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__18791__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__18791__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__18791__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__18791__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__18791__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__18791__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__18791,map__18791__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__18789_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__18789_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__18791,map__18791__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___18799 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___18799)){
var response_type_18800 = temp__4657__auto___18799;
this$__$1.responseType = cljs.core.name.call(null,response_type_18800);
} else {
}

var seq__18793_18801 = cljs.core.seq.call(null,headers);
var chunk__18794_18802 = null;
var count__18795_18803 = (0);
var i__18796_18804 = (0);
while(true){
if((i__18796_18804 < count__18795_18803)){
var vec__18797_18805 = cljs.core._nth.call(null,chunk__18794_18802,i__18796_18804);
var k_18806 = cljs.core.nth.call(null,vec__18797_18805,(0),null);
var v_18807 = cljs.core.nth.call(null,vec__18797_18805,(1),null);
this$__$1.setRequestHeader(k_18806,v_18807);

var G__18808 = seq__18793_18801;
var G__18809 = chunk__18794_18802;
var G__18810 = count__18795_18803;
var G__18811 = (i__18796_18804 + (1));
seq__18793_18801 = G__18808;
chunk__18794_18802 = G__18809;
count__18795_18803 = G__18810;
i__18796_18804 = G__18811;
continue;
} else {
var temp__4657__auto___18812 = cljs.core.seq.call(null,seq__18793_18801);
if(temp__4657__auto___18812){
var seq__18793_18813__$1 = temp__4657__auto___18812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18793_18813__$1)){
var c__17701__auto___18814 = cljs.core.chunk_first.call(null,seq__18793_18813__$1);
var G__18815 = cljs.core.chunk_rest.call(null,seq__18793_18813__$1);
var G__18816 = c__17701__auto___18814;
var G__18817 = cljs.core.count.call(null,c__17701__auto___18814);
var G__18818 = (0);
seq__18793_18801 = G__18815;
chunk__18794_18802 = G__18816;
count__18795_18803 = G__18817;
i__18796_18804 = G__18818;
continue;
} else {
var vec__18798_18819 = cljs.core.first.call(null,seq__18793_18813__$1);
var k_18820 = cljs.core.nth.call(null,vec__18798_18819,(0),null);
var v_18821 = cljs.core.nth.call(null,vec__18798_18819,(1),null);
this$__$1.setRequestHeader(k_18820,v_18821);

var G__18822 = cljs.core.next.call(null,seq__18793_18813__$1);
var G__18823 = null;
var G__18824 = (0);
var G__18825 = (0);
seq__18793_18801 = G__18822;
chunk__18794_18802 = G__18823;
count__18795_18803 = G__18824;
i__18796_18804 = G__18825;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16898__auto__ = body;
if(cljs.core.truth_(or__16898__auto__)){
return or__16898__auto__;
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