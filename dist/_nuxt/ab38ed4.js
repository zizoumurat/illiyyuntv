(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{327:function(t,e,o){var content=o(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("4cbc6bf8",content,!0,{sourceMap:!1})},333:function(t,e,o){"use strict";o(327)},334:function(t,e,o){var r=o(61),n=o(235),l=o(335),c=r(!1),d=n(l);c.push([t.i,"#cover[data-v-7715f7eb]{background-image:url("+d+");position:relative;height:400px;margin-bottom:-50px;-webkit-mask-image:-webkit-gradient(linear,center bottom,center top,color-stop(0,transparent),color-stop(1,#000))}a[data-v-7715f7eb]{text-decoration:none!important;color:#fff}",""]),t.exports=c},335:function(t,e,o){t.exports=o.p+"img/videosHeadImage.91d6b77.jpg"},337:function(t,e,o){"use strict";o.r(e);var r={props:["videos"]},n=(o(333),o(56)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container-fluid"},[t.videos.search?o("div",[o("p",{staticClass:"text-muted"},[o("i",[t._v(t._s(t.videos.data.length)+" adet sonuç bulundu")])])]):t._e(),t._v(" "),o("div",{staticClass:"row"},t._l(t.videos,(function(video,e){return o("div",{key:e,staticClass:"col-md-3"},[o("div",{staticStyle:{position:"relative"}},[o("span",{staticClass:"badge p-1 bg-siyah",staticStyle:{position:"absolute",right:"7px",bottom:"5px"}},[t._v(t._s(t.$videoTime(video.duration)))]),t._v(" "),o("nuxt-link",{staticStyle:{width:"100%",cursor:"pointer"},attrs:{to:"/videos/watch/"+video.link.split("/")[3]}},[o("img",{staticStyle:{width:"100%",cursor:"pointer"},attrs:{src:video.pictures.sizes[2].link,alt:""}})])],1),t._v(" "),o("br"),t._v(" "),o("span",[o("nuxt-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/videos/watch/"+video.link.split("/")[3],tag:"a"}},[t._v(t._s(video.name))])],1),t._v(" "),o("br"),t._v(" "),o("span",{staticClass:"text-muted"},[o("small",[o("i",{staticClass:"fa fa-play-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),o("span",{domProps:{innerHTML:t._s(0==video.stats.plays?"Görüntüleme Yok":video.stats.plays+" Görüntülenme")}})])]),t._v("\n          \n        "),o("span",{staticClass:"text-muted"},[o("small",[o("i",{staticClass:"fa fa-clock-o",attrs:{"aria-hidden":"true"}}),t._v(" "),o("span",[t._v(t._s(t.$timeEgo(Date.parse(video.created_time))))])])]),t._v(" "),o("br"),o("br")])})),0)])])}),[],!1,null,"7715f7eb",null);e.default=component.exports}}]);