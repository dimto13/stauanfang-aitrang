(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{685:function(t,e,n){var content=n(741);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("75d380a4",content,!0,{sourceMap:!1})},728:function(t,e,n){"use strict";var o=n(8),r=(n(25),n(105),n(48),n(19),n(32),n(53),n(124)),l=n(787),c=n(33),h=n(34),d=n(199),f=n(203),m=n(78),v=n(51),w=n(147),S={name:"LocationsearchInput",components:{BaseIcon:r.a,AutocompleteInputApi:l.a},props:{floating:{type:Boolean,default:!1},hideClimateResults:{type:Boolean,default:!1},selectedAction:{type:Function,default:null},openInNewTab:{type:Boolean,default:!1},offerGps:{type:Boolean,default:!0},placeholder:{type:String,default:"Ort"},initialValue:{type:String,default:""},widgetSelection:{type:Boolean,default:!1},redesigned:{type:Boolean,default:!1}},data:function(){return{requestedAutoSubmit:!1,hasFetchedSuggestions:!1,testVariant:!1}},computed:{actionToPerform:function(){return this.selectedAction?this.selectedAction:this.goToLocation},endpointPath:function(){return this.hideClimateResults?"/place-searches?term=":"/place-searches?include=climate&term="}},methods:{searchViaGPS:function(){var t=this;navigator.geolocation.getCurrentPosition(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){var o,r,l,c,h,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[n.coords.latitude,n.coords.longitude],r=o[0],l=o[1],c=Object(d.b)(r,l),e.next=4,Object(f.a)(c,!1,t.$apiCache,void 0,t.$axios);case 4:if(h=e.sent,v=Object(m.a)((function(){return h.data.attributes.url}),!1)){e.next=8;break}return e.abrupt("return");case 8:window.location.href=v;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},recentSuggestions:function(){return h.a?v.a("rctSearches",[]):[]},storeRecentSuggestion:function(t){var e=Object(m.a)((function(){return t.attributes.source}),"search-entry");if(!["climate-station","climate-region","climate-country"].includes(e)){var n=this.recentSuggestions();n.splice(0,0,t),n=(n=Object(w.a)(n,"id")).slice(0,5),v.b("rctSearches",n)}},openLink:function(t){this.openInNewTab?window.open(t,"_blank").focus():window.location.href=t},goToLocation:function(t,e){var n;if(e<0)this.requestedAutoSubmit=!0;else{var o="string"==typeof t||t instanceof String,r=o?t:t.attributes.title,l=o?"searchViaTerm":"searchViaSuggestion";Object(c.b)(l,"search",r,e),null===(n=window)||void 0===n||n.LUX.addData("usedSearch",!0),o||this.storeRecentSuggestion(t);var h=encodeURIComponent(r),d=(o?"/suche.html?search=".concat(h):"".concat(t.attributes.url)).replace("relation","r").replace("way","w").replace("node","n");this.openLink(d)}},suggestionsFetched:function(t){this.requestedAutoSubmit&&this.openLink(t[0].attributes.url)}}},y=S,x=(n(840),n(0)),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return t.redesigned?e("autocomplete-input-api",t._b({attrs:{redesigned:"","initial-value":t.initialValue,placeholder:t.placeholder,"widget-selection":t.widgetSelection,floating:t.floating,"offer-gps":t.offerGps,endpoint:t.endpointPath,"initial-suggestions":t.recentSuggestions(),"prop-to-show":"title"},on:{"value-selected":t.actionToPerform,gps:t.searchViaGPS,focus:function(e){return t.$emit("focus")},focusout:function(e){return t.$emit("focusout")},"suggestions-fetched":t.suggestionsFetched}},"autocomplete-input-api",t.$attrs,!1)):e("div",{staticClass:"locationsearch-input",class:["locationsearch-input--".concat(t.testVariant)]},[e("base-icon",{staticClass:"locationsearch-input__icon",attrs:{icon:"search"}}),t._v(" "),e("autocomplete-input-api",t._b({staticClass:"locationsearch-input__autocomplete-input",attrs:{"initial-value":t.initialValue,placeholder:t.placeholder,"widget-selection":t.widgetSelection,floating:t.floating,"offer-gps":t.offerGps,endpoint:t.endpointPath,"initial-suggestions":t.recentSuggestions(),"prop-to-show":"title"},on:{"value-selected":t.actionToPerform,gps:t.searchViaGPS,focus:function(e){return t.$emit("focus")},focusout:function(e){return t.$emit("focusout")},"suggestions-fetched":t.suggestionsFetched}},"autocomplete-input-api",t.$attrs,!1))],1)}),[],!1,null,null,null);e.a=component.exports},740:function(t,e,n){"use strict";n(685)},741:function(t,e,n){var o=n(22)((function(i){return i[1]}));o.push([t.i,".autocomplete-input input{padding-right:2rem}.autocomplete-input .suggestions{border:1px solid #eaeaea;border-radius:.375rem;margin-top:.375rem}.autocomplete-input .suggestions .suggestion{border-bottom:1px solid #eaeaea;cursor:pointer;overflow:hidden;padding:.75rem;position:relative;text-overflow:ellipsis;white-space:nowrap}.autocomplete-input .suggestions .suggestion.focused,.autocomplete-input .suggestions .suggestion:hover{color:#005093}.autocomplete-input .suggestions .suggestion .highlight{color:#005093;font-weight:600}.autocomplete-input .suggestions .suggestion--header{background-color:#fafafb;color:#000;font-weight:300;pointer-events:none;text-transform:uppercase}.autocomplete-input .suggestions .suggestion__icon{position:absolute;right:.75rem;top:.75rem}.autocomplete-input .suggestions .suggestion--gps{border-bottom:2px solid #eaeaea}.autocomplete-input.autocomplete-input--withGps input:focus~.suggestions{display:block}.autocomplete-input.autocomplete-input--floating{position:relative}.autocomplete-input.autocomplete-input--floating .suggestions{background-color:#fff;left:0;position:absolute;right:0;z-index:40005}",""]),o.locals={},t.exports=o},742:function(t,e,n){var content=n(841);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("af0c0adc",content,!0,{sourceMap:!1})},787:function(t,e,n){"use strict";n(62),n(13),n(7),n(3),n(25),n(35),n(27),n(48),n(157);var o=n(124),r=n(34),l=n(207),c=n(212),h=["climate-station","climate-region","climate-country"],d={name:"AutocompleteInput",components:{Icon:c.a,BaseIcon:o.a},props:{initialValue:{type:String,default:""},suggestions:{type:Array,required:!0},maxSuggestions:{type:Number,default:5},floating:{type:Boolean,default:!1},placeholder:{type:String,default:""},offerGps:{type:Boolean,default:!1},widgetSelection:{type:Boolean,default:!1},redesigned:{type:Boolean,default:!1}},data:function(){return{value:this.initialValue||"",activeSuggestion:!1,onClient:!1,showSuggestions:!0}},computed:{showGps:function(){return this.onClient&&this.offerGps&&navigator.geolocation},gpsSuggestion:function(){return{text:"Dein Standort"}},normalizedSuggestions:function(){return this.suggestions.map((function(s){return"string"==typeof s?{text:s}:s}))},highlightedSuggestions:function(){var t=this,e=1;return this.normalizedSuggestions.map((function(s){var n=s.text.toLowerCase().indexOf(t.value.toLowerCase()),o=n>-1;return{key:"".concat(s.text).concat(t.value),text:s.text,before:o?s.text.substr(0,n):s.text,highlight:o?s.text.substr(n,t.value.length):"",after:o?s.text.substr(n+t.value.length):"",n:e++,type:s.type}}))},highlightedSuggestionsPlaces:function(){return this.highlightedSuggestions.slice(0,this.maxSuggestions)},highlightedSuggestionsClimate:function(){return this.highlightedSuggestions.filter((function(t){return h.includes(t.type)})).slice(0,this.maxSuggestions)},hasSuggestions:function(){return this.highlightedSuggestionsPlaces.length>0&&this.showSuggestions},hasClimateSuggestions:function(){return this.highlightedSuggestionsClimate.length>0}},watch:{value:function(){this.$emit("value-changed",this.value)}},mounted:function(){this.onClient=r.a},methods:{whereTextEq:function(t,text){return t.text===text},indexOfActiveSuggestion:function(){var t=this;return this.normalizedSuggestions.findIndex((function(e){return t.whereTextEq(e,t.activeSuggestion)}))},focusNextSuggestion:function(){var t=(this.activeSuggestion?this.indexOfActiveSuggestion():-1)+1;t=t>this.normalizedSuggestions.length-1?0:t,this.activeSuggestion=this.normalizedSuggestions[t].text},focusLastSuggestion:function(){var t=(this.activeSuggestion?this.indexOfActiveSuggestion():this.normalizedSuggestions.length)-1;t=t<0?this.normalizedSuggestions.length-1:t,this.activeSuggestion=this.normalizedSuggestions[t].text},removeActiveSuggestion:function(){this.activeSuggestion=!1},emitApply:function(t,e,n){this.widgetSelection&&this.suggestions&&!n?(this.activeSuggestion?this.value=this.activeSuggestion:this.value=this.normalizedSuggestions[0].text,this.$emit("value-selected",this.value,e),this.showSuggestions=!1):(this.value=t,this.$emit("value-selected",t,e),this.showSuggestions=!1),this.widgetSelection&&Object(l.a)("step2")}}},f=(n(740),n(0)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return t.redesigned?e("div",{staticClass:"tw-relative"},[e("div",{staticClass:"tw-flex tw-px-5 tw-border tw-rounded-full tw-border-basic-grey_3 tw-w-full hover:tw-border-basic-grey_2 tw-shadow-none focus:tw-shadow-none tw-relative tw-z-[40001] tw-cursor-pointer",class:t.hasSuggestions?"tw-border-transparent hover:tw-border-transparent":null},[e("Icon",{attrs:{icon:"search",width:"16px"}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"tw-border-none focus:tw-shadow-none tw-py-4 placeholder:tw-text-basic-grey_1 placeholder:tw-not-italic tw-text-base tw-w-full tw-bg-transparent tw-px-2 tw-h-[40px] md:tw-h-[50px] tw-cursor-pointer",attrs:{placeholder:t.placeholder,autocomplete:"something-new"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},function(e){return t.value=e.target.value}],keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.focusNextSuggestion.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.focusLastSuggestion.apply(null,arguments)},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.emitApply(t.activeSuggestion||t.value,!!t.activeSuggestion&&t.indexOfActiveSuggestion())}],focus:function(e){t.$emit("focus"),t.showSuggestions=!0},focusout:function(e){return t.$emit("focusout")},blur:function(e){return t.$emit("blur")},click:function(e){t.removeActiveSuggestion,t.showSuggestions=!0}}})],1),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.hasSuggestions&t.showSuggestions,expression:"hasSuggestions & showSuggestions"}],staticClass:"suggestion tw-absolute tw-top-0 tw-z-[40000] tw-w-full tw-px-10 tw-py-4 tw-shadow tw-pt-16 tw-rounded-t-[1.5625rem] tw-rounded-b-[0.5rem] tw-bg-white tw-border tw-border-cloudblue-light_1 tw-cursor-pointer tw-text-base"},[t.showGps?e("li",{staticClass:"suggestion suggestion--gps tw-pb-1.5 hover:tw-text-basic-grey_2",on:{mousedown:function(e){return t.$emit("gps")}}},[e("base-icon",{staticClass:"suggestion__icon",attrs:{icon:"poi"}}),t._v(" Dein Standort\n    ")],1):t._e(),t._v(" "),t._l(t.highlightedSuggestionsPlaces,(function(n){return e("li",{key:n.key,staticClass:"suggestion tw-pb-1.5 hover:tw-text-basic-grey_2",class:{focused:t.activeSuggestion===n.text},on:{mousedown:function(e){return t.emitApply(n.text,n.n,!0)}}},[t._v("\n      "+t._s(n.before)),e("span",{staticClass:"highlight"},[t._v(t._s(n.highlight))]),t._v(t._s(n.after)+"\n    ")])})),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.hasClimateSuggestions,expression:"hasClimateSuggestions"}],staticClass:"climate"},[e("li",{staticClass:"suggestion suggestion--header"},[t._v("\n        Beste Reisezeit "),e("base-icon",{staticClass:"suggestion__icon",attrs:{icon:"suitcase"}})],1),t._v(" "),t._l(t.highlightedSuggestionsClimate,(function(n){return e("li",{key:n.text,staticClass:"suggestion",on:{mousedown:function(e){return t.emitApply(n.text,n.n,!0)}}},[t._v("\n        "+t._s(n.before)),e("span",{staticClass:"highlight"},[t._v(t._s(n.highlight))]),t._v(t._s(n.after)+"\n      ")])}))],2)],2)]):e("div",{staticClass:"autocomplete-input",class:{"autocomplete-input--floating":t.floating,"autocomplete-input--withGps":t.showGps}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{placeholder:t.placeholder,autocomplete:"something-new"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},function(e){return t.value=e.target.value}],keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.focusNextSuggestion.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.focusLastSuggestion.apply(null,arguments)},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.emitApply(t.activeSuggestion||t.value,!!t.activeSuggestion&&t.indexOfActiveSuggestion())}],focus:function(e){t.$emit("focus"),t.showSuggestions=!0},focusout:function(e){return t.$emit("focusout")},blur:function(e){return t.$emit("blur")},click:function(e){t.removeActiveSuggestion,t.showSuggestions=!0}}}),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.hasSuggestions,expression:"hasSuggestions"}],staticClass:"suggestions"},[t.showGps?e("li",{staticClass:"suggestion suggestion--gps",on:{mousedown:function(e){return t.$emit("gps")}}},[e("base-icon",{staticClass:"suggestion__icon",attrs:{icon:"poi"}}),t._v(" Dein Standort\n    ")],1):t._e(),t._v(" "),t._l(t.highlightedSuggestionsPlaces,(function(n){return e("li",{key:n.key,staticClass:"suggestion",class:{focused:t.activeSuggestion===n.text},on:{mousedown:function(e){return t.emitApply(n.text,n.n,!0)}}},[t._v("\n      "+t._s(n.before)),e("span",{staticClass:"highlight"},[t._v(t._s(n.highlight))]),t._v(t._s(n.after)+"\n    ")])})),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.hasClimateSuggestions,expression:"hasClimateSuggestions"}],staticClass:"climate"},[e("li",{staticClass:"suggestion suggestion--header"},[t._v("\n        Beste Reisezeit "),e("base-icon",{staticClass:"suggestion__icon",attrs:{icon:"suitcase"}})],1),t._v(" "),t._l(t.highlightedSuggestionsClimate,(function(n){return e("li",{key:n.text,staticClass:"suggestion",on:{mousedown:function(e){return t.emitApply(n.text,n.n,!0)}}},[t._v("\n        "+t._s(n.before)),e("span",{staticClass:"highlight"},[t._v(t._s(n.highlight))]),t._v(t._s(n.after)+"\n      ")])}))],2)],2)])}),[],!1,null,null,null),m=component.exports,v=n(33),w=n(202),S=n(78),y=n(123),x={name:"AutocompleteInputApi",components:{AutocompleteInput:m},props:{endpoint:{type:String,default:""},placeholder:{type:String,default:""},propToShow:{type:String,default:""},delay:{type:Number,default:100},floating:{type:Boolean,default:!1},initialValue:{type:String,default:""},initialSuggestions:{type:Array,default:function(){return[]}},offerGps:{type:Boolean,default:!1},widgetSelection:{type:Boolean,default:!1},redesigned:{type:Boolean,default:!1}},data:function(){return{rawSuggestions:[],suggestions:[],lastValue:!1,debouncedFetch:Object(w.a)(this.fetchSuggestions,this.delay),currentFetchAbortController:!1,typeAttribute:"source",urlAttribute:"url"}},methods:{blur:function(){var t=this;this.$emit("blur"),this.$nextTick((function(){t.suggestions=[]}))},focus:function(){this.$emit("focus"),this.lastValue||this.initialSuggestions&&this.applyServerSuggestions(this.initialSuggestions,"")},valueChanged:function(t){t&&t!==this.lastValue&&this.debouncedFetch(t)},indexOfTerm:function(t){if(!this.suggestions.length)return-1;var e=this.suggestions[0];return"string"==typeof e||e instanceof String?this.suggestions.indexOf(t):this.suggestions.map((function(s){return s.text})).indexOf(t)},valueSelected:function(t){var e=this.indexOfTerm(t),n=e>-1?this.rawSuggestions[e]:t;this.$emit("value-selected",n,e,this.rawSuggestions),this.suggestions=[],this.debouncedFetch(t)},abortPreviousCalls:function(){return!!window.AbortController&&(this.currentFetchAbortController&&this.currentFetchAbortController.abort(),this.currentFetchAbortController=new AbortController,this.currentFetchAbortController.signal)},applyServerSuggestions:function(t,e){var n=this;this.rawSuggestions=t,this.suggestions=t.map((function(s){return{text:s.attributes[n.propToShow],type:Object(S.a)((function(){return s.attributes.source}))}})),Object(v.b)("suggestionsShown","search",e,t.length);var o=t.filter((function(t){return t.attributes.url.includes("/deutschland/")}));e.length>=3&&0===o.length&&Object(v.b)("suggestionsFailed","search",e)},fetchSuggestions:function(t){var e=this;if(!(t.length<1)){var n=this.abortPreviousCalls();Object(y.a)("".concat(this.endpoint).concat(t.toLowerCase(),"&client=web"),n,this.$apiCache,void 0,this.$axios).then((function(t){return t.data})).then((function(n){return e.applyServerSuggestions(n,t)})).then((function(){return e.$emit("suggestions-fetched",e.rawSuggestions)}))}}}},_=Object(f.a)(x,(function(){var t=this,e=t._self._c;return t.redesigned?e("autocomplete-input",t._b({attrs:{redesigned:"",placeholder:t.placeholder,suggestions:t.suggestions,"widget-selection":t.widgetSelection,floating:t.floating,"initial-value":t.initialValue,"offer-gps":t.offerGps},on:{"value-changed":t.valueChanged,"value-selected":t.valueSelected,focus:t.focus,blur:t.blur,gps:function(e){return t.$emit("gps")},focusout:function(e){return t.$emit("focusout")}}},"autocomplete-input",t.$attrs,!1)):e("div",[e("autocomplete-input",t._b({staticClass:"autocomplete-input-api",attrs:{placeholder:t.placeholder,suggestions:t.suggestions,"widget-selection":t.widgetSelection,floating:t.floating,"initial-value":t.initialValue,"offer-gps":t.offerGps},on:{"value-changed":t.valueChanged,"value-selected":t.valueSelected,focus:t.focus,blur:t.blur,gps:function(e){return t.$emit("gps")},focusout:function(e){return t.$emit("focusout")}}},"autocomplete-input",t.$attrs,!1))],1)}),[],!1,null,null,null);e.a=_.exports},840:function(t,e,n){"use strict";n(742)},841:function(t,e,n){var o=n(22)((function(i){return i[1]}));o.push([t.i,'.locationsearch-input{position:relative}.locationsearch-input .locationsearch-input__icon{position:absolute;right:.75rem;top:.5rem;z-index:20000}.locationsearch-input .locationsearch-input__autocomplete-input input{width:100%}.locationsearch-input input{border:1px solid #eaeaea;border-radius:.375rem;font-family:"Open Sans",sans-serif;padding:.375rem}.locationsearch-input input:focus{border-color:rgba(0,52,96,.8);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(0,52,96,.6);outline:0}.locationsearch-input ol,.locationsearch-input ul{list-style:none;margin-left:0}.locationsearch-input--a input{background-color:#fcdef1}.locationsearch-input--b input{background-color:#bbeec7}',""]),o.locals={},t.exports=o}}]);