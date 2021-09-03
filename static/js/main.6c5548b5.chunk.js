(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,n){e.exports={ImageGalleryItem:"_2Kpi2vEcvJOOEAXOyRMGTc",ImageGalleryItemImage:"_2BejwE9Rd3yEdXb2aBycRj"}},12:function(e,t,n){e.exports={Overlay:"_2nBOynerxnBQcZpCB7FLW-",Modal:"_2iAtACXDLuQMU_7cCdsFgc"}},23:function(e,t,n){e.exports={ImageGallery:"_3qxpcvEbhJA_mVUY19fRPZ"}},24:function(e,t,n){e.exports={Button:"cJ6x6a7mVGzdZ1TvOojRf"}},26:function(e,t,n){e.exports={loader:"RdwiQeGY6ItGTUNCtezO3"}},31:function(e,t,n){},32:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(9),c=n.n(o),i=(n(31),n(4)),s=n(5),u=n(7),l=n(6),h=(n(32),n(8)),d=n.n(h),m=n(0),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.reset()},e.reset=function(){e.setState({query:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsx)("header",{className:d.a.Searchbar,children:Object(m.jsxs)("form",{onSubmit:this.handleSubmit,className:d.a.SearchForm,children:[Object(m.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(m.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),n}(a.Component),j=n(13),b=n(11),f=n.n(b),p=function(e){var t=e.webformatURL,n=e.onToggleModal,a=e.largeImageURL;return Object(m.jsx)("li",{className:f.a.ImageGalleryItem,children:Object(m.jsx)("img",{src:t,alt:"",className:f.a.ImageGalleryItemImage,onClick:function(){return n(a)}})})},y=n(22),O=n.n(y),v=function(e){var t=e.query,n=void 0===t?"":t,a=e.currentPage,r=void 0===a?1:a,o=e.pageSize,c=void 0===o?12:o;return O.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(r,"&key=").concat("21320653-fe4a570a23bb891fd74acd9f9","&image_type=photo&orientation=horizontal&per_page=").concat(c)).then((function(e){return e.data.hits}))},x=n(23),S=n.n(x),w=n(12),C=n.n(w),k=document.querySelector("#modal-root"),I=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(m.jsx)("div",{className:C.a.Overlay,onClick:this.handleBackdropClick,children:Object(m.jsxs)("div",{className:C.a.Modal,children:[this.props.children,Object(m.jsx)("img",{src:"",alt:""})]})}),k)}}]),n}(a.Component),L=n(24),q=n.n(L),R=function(e){var t=e.onClick;e.isLoading;return Object(m.jsx)("button",{type:"button",className:q.a.Button,onClick:t,children:"Load more"})},B=(n(52),n(25)),M=n.n(B),_=n(26),F=n.n(_),P=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsx)(M.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100,className:F.a.loader})}}]),n}(a.Component),T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",isLoading:!1,showModal:!1},e.fetchImg=function(){var t=e.state.currentPage,n={query:e.props.query,currentPage:t};e.setState({isLoading:!0}),v(n).then((function(t){e.setState((function(e){return{images:[].concat(Object(j.a)(e.images),Object(j.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleModalImage=function(t){e.toggleModal(),e.setState({largeImageURL:t})},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this;e.query!==this.props.query&&this.setState({currentPage:1,images:[],error:null},(function(){return n.fetchImg()})),t.currentPage!==this.state.currentPage&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,n=t.images,a=t.isLoading,r=t.error,o=t.showModal,c=t.largeImageURL,i=n.length>0&&!a;return Object(m.jsxs)("div",{children:[r&&Object(m.jsx)("h1",{children:"Try again"}),Object(m.jsx)("ul",{className:S.a.ImageGallery,children:n.map((function(t){var n=t.id,a=t.webformatURL,r=t.largeImageURL;return Object(m.jsx)(p,{webformatURL:a,onToggleModal:e.handleModalImage,largeImageURL:r},n)}))}),a&&Object(m.jsx)(P,{}),i&&Object(m.jsx)(R,{onClick:this.fetchImg}),o&&Object(m.jsx)(I,{onClose:this.toggleModal,children:Object(m.jsx)("img",{src:c,alt:"",style:{width:900}})})]})}}]),n}(a.Component),N=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.inputSubmitHandler=function(t){e.setState({query:t})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(g,{onSubmit:this.inputSubmitHandler}),Object(m.jsx)(T,{query:this.state.query})]})}}]),n}(a.Component),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),U()},8:function(e,t,n){e.exports={Searchbar:"Q9gjx1RHRv8-v6Bmj3Py5",SearchForm:"_31Y9Jq9n0whv_krAKNZjZR",SearchFormButton:"_3H7Owfo8GRxFPLkZsRZmCG",SearchFormButtonLabel:"_2sTXJ1DM4T_yHgB6tB0kkP",SearchFormInput:"_3mECDT_f_jsjqutog-Yk_g"}}},[[73,1,2]]]);
//# sourceMappingURL=main.6c5548b5.chunk.js.map