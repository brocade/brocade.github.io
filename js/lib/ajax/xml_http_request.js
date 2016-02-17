// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22936,handler){
var map__22937 = p__22936;
var map__22937__$1 = ((((!((map__22937 == null)))?((((map__22937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22937):map__22937);
var uri = cljs.core.get.call(null,map__22937__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__22937__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__22937__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__22937__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__22937__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__22937__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__22937__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__22937,map__22937__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__22935_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__22935_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__22937,map__22937__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___22945 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___22945)){
var response_type_22946 = temp__4425__auto___22945;
this$__$1.responseType = cljs.core.name.call(null,response_type_22946);
} else {
}

var seq__22939_22947 = cljs.core.seq.call(null,headers);
var chunk__22940_22948 = null;
var count__22941_22949 = (0);
var i__22942_22950 = (0);
while(true){
if((i__22942_22950 < count__22941_22949)){
var vec__22943_22951 = cljs.core._nth.call(null,chunk__22940_22948,i__22942_22950);
var k_22952 = cljs.core.nth.call(null,vec__22943_22951,(0),null);
var v_22953 = cljs.core.nth.call(null,vec__22943_22951,(1),null);
this$__$1.setRequestHeader(k_22952,v_22953);

var G__22954 = seq__22939_22947;
var G__22955 = chunk__22940_22948;
var G__22956 = count__22941_22949;
var G__22957 = (i__22942_22950 + (1));
seq__22939_22947 = G__22954;
chunk__22940_22948 = G__22955;
count__22941_22949 = G__22956;
i__22942_22950 = G__22957;
continue;
} else {
var temp__4425__auto___22958 = cljs.core.seq.call(null,seq__22939_22947);
if(temp__4425__auto___22958){
var seq__22939_22959__$1 = temp__4425__auto___22958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22939_22959__$1)){
var c__17608__auto___22960 = cljs.core.chunk_first.call(null,seq__22939_22959__$1);
var G__22961 = cljs.core.chunk_rest.call(null,seq__22939_22959__$1);
var G__22962 = c__17608__auto___22960;
var G__22963 = cljs.core.count.call(null,c__17608__auto___22960);
var G__22964 = (0);
seq__22939_22947 = G__22961;
chunk__22940_22948 = G__22962;
count__22941_22949 = G__22963;
i__22942_22950 = G__22964;
continue;
} else {
var vec__22944_22965 = cljs.core.first.call(null,seq__22939_22959__$1);
var k_22966 = cljs.core.nth.call(null,vec__22944_22965,(0),null);
var v_22967 = cljs.core.nth.call(null,vec__22944_22965,(1),null);
this$__$1.setRequestHeader(k_22966,v_22967);

var G__22968 = cljs.core.next.call(null,seq__22939_22959__$1);
var G__22969 = null;
var G__22970 = (0);
var G__22971 = (0);
seq__22939_22947 = G__22968;
chunk__22940_22948 = G__22969;
count__22941_22949 = G__22970;
i__22942_22950 = G__22971;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16805__auto__ = body;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1455751529043