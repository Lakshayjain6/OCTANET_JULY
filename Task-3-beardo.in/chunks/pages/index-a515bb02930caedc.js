(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(3678)}])},581:function(a,b,c){"use strict";var d=c(1438),e=c(2951),f=c(4924),g=c(8029),h=c(460),i=c(5893),j=c(7294),k=c(2962),l=c(1163),m=c(1931),n=function(a){(0,g.Z)(f,a);var b=(0,h.Z)(f);function f(a){(0,d.Z)(this,f);var c,e,g,h,i,j,k=null!==(e=(c=b.call(this,a)).props.canonical)&& void 0!==e?e:c.props.router.asPath;"http"!=k.substr(0,4)&&(k="https://beardo.in"+k),void 0!==c.props.canonical_override&&""!=c.props.canonical_override&&(k=c.props.canonical_override);var l=!0;return(null!==(g=c.props.indexed)&& void 0!==g?g:0)==1&&(l=!1),c.state={title:null!==(h=c.props.page_title)&& void 0!==h?h:"Beardo",description:null!==(i=c.props.page_description)&& void 0!==i?i:"",noindex:l,socialMediaImage:c.props.shareimage_json&&null!==(j=c.props.shareimage_json.src)&& void 0!==j?j:"",icon:"/images/logo.png",canonical:k},c}return(0,e.Z)(f,[{key:"componentDidMount",value:function(){this.context.shared.updateState(this.props.userInfo),this.props.userInfo.isLoggedIn&&Promise.resolve().then(c.bind(c,6968)).then((function(a){a.userProfileTrack(this.props.userInfo.userDetails)}).bind(this))}},{key:"render",value:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k.PB,{title:this.state.title,description:this.state.description,noindex:this.state.noindex,canonical:this.state.canonical,openGraph:{url:this.state.canonical,title:this.state.title,description:this.state.description,images:[{url:this.state.socialMediaImage}],site_name:"Beardo"},twitter:{cardType:"summary_large_image"},additionalLinkTags:[{rel:"icon",href:this.state.icon},]}),void 0!==this.props.productSchema&&Object.keys(this.props.productSchema).length>0?(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:"".concat(JSON.stringify(this.props.productSchema))}},"product_schema"):""]})}}]),f}(j.Component);(0,f.Z)(n,"contextType",m.I),b.Z=(0,l.withRouter)(n)},3678:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return x},default:function(){return y}});var d=c(1438),e=c(2951),f=c(4924),g=c(8029),h=c(6042),i=c(9396),j=c(460),k=c(5893),l=c(7294),m=c(581),n=c(7684),o=c(7387),p=c(3193),q=c(6387),r=c(8732),s=c.n(r),t=c(1931),u=c(4145),v=c(4298),w=c.n(v),x=!0,y=function(a){(0,g.Z)(c,a);var b=(0,j.Z)(c);function c(a){var e;return(0,d.Z)(this,c),(e=b.call(this,a)).state={pageData:e.props.pageData,allCategory:e.props.allCategory,heroBanner:!0},e.heroBannerRef=l.createRef(),e}return(0,e.Z)(c,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.hideHeroBanner.bind(this)),null!=localStorage.getItem("showHeroBanner")&&this.setState({heroBanner:!1})}},{key:"hideHeroBanner",value:function(){void 0!=this.heroBannerRef&&null!=this.heroBannerRef.current&&window.pageYOffset>this.heroBannerRef.current.offsetHeight&&(this.setState({heroBanner:!1}),localStorage.setItem("showHeroBanner",!1))}},{key:"render",value:function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m.Z,(0,i.Z)((0,h.Z)({},this.props.pageData.seo),{userInfo:this.props.userInfo})),(0,k.jsxs)(q.Z,{row:"true",classNames:s().homePage,children:[void 0!==this.state.pageData.pageContent&& void 0!==this.state.pageData.pageContent[0].content_json&& void 0!==this.state.pageData.pageContent[0].content_json.additional&&this.state.heroBanner&&this.state.pageData.pageContent[0].content_json.additional[0]?(0,k.jsx)("div",{ref:this.heroBannerRef,className:s().homePage__topBanner,children:(0,k.jsx)(o.Z,(0,i.Z)((0,h.Z)({},this.state.pageData.pageContent[0].content_json.additional[0].image_json),{priority:!0}))}):"",(0,k.jsx)(n.Z,{allCategory:this.props.allCategory,fbContentName:this.props.fbContentName}),(0,k.jsx)(w(),{id:"admitad-retag-home",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:'\n              window._retag = window._retag || [];\n              window._retag.push({code: "9ce88841d1", level: 0});\n              (function () {\n                  var id = "admitad-retag";\n                  if (document.getElementById(id)) {return;}\n                  var s = document.createElement("script");\n                  s.async = true; s.id = id;\n                  var r = (new Date).getDate();\n                  s.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//cdn.lenmit.com/static/js/retag.js?r="+r;\n                  var a = document.getElementsByTagName("script")[0]\n                  a.parentNode.insertBefore(s, a);\n              })()'}}),(0,k.jsx)(u.Z,{pageContent:this.props.pageData.pageContent,additionaldata:this.props.pageData.additionaldata,alias:"/",eager:!0}),(0,k.jsx)(p.Z,{})]})]})}}]),c}(l.Component);(0,f.Z)(y,"contextType",t.I)}},function(a){a.O(0,[388,675,962,935,710,684,193,116,824,774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])