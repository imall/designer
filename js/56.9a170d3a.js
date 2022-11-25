"use strict";(self["webpackChunkbos_designer"]=self["webpackChunkbos_designer"]||[]).push([[56],{56:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var l=function(){var e=this,t=e._self._c;return t("main",{staticClass:"box-border h-full min-h-[calc(100vh-84px)] w-full pb-[84px]"},[t("C-Back-Nav",{attrs:{title:"帳單列表",routeTarget:{name:"Report"}}}),t("section",{staticClass:"relative z-0 mt-[52px] p-3"},[t("div",{staticClass:"flex items-center gap-2"},[t("p",[e._v("日期：")]),t("vc-date-picker",{attrs:{mode:"date","model-config":e.modelConfig},on:{input:function(t){return e.getOrders()}},scopedSlots:e._u([{key:"default",fn:function({inputValue:s,inputEvents:l}){return[t("input",e._g({staticClass:"rounded border border-stone-400 px-2 py-1 placeholder:text-black focus:border-blue-300 focus:outline-none",attrs:{placeholder:e.$dayjs(e.reviewResult.currentDate).format("YYYY/MM/DD")},domProps:{value:s}},l))]}}]),model:{value:e.searchDate,callback:function(t){e.searchDate=t},expression:"searchDate"}})],1),t("div",{staticClass:"text-left text-sm"},[t("div",{staticClass:"my-4 flex items-center justify-between"},[t("div",{staticClass:"flex items-baseline"},[t("p",{staticClass:"mr-1 text-[24px] font-bold"},[e._v(e._s(e.showYear)+"年")]),t("p",[e._v(e._s(e.showMonth)+"月")])]),t("div",[t("p",[e._v("設計師 "+e._s(e.userInfo.user.name))])])]),e.reviewResult.intervalSummary&&e.reviewResult.orders.length>0?t("ul",{staticClass:"grid grid-cols-12 gap-4"},[t("li",{staticClass:"col-span-3 flex h-full flex-col items-center justify-between gap-2 text-center md:col-span-2"},[t("p",[e._v("服務消費")]),t("p",{staticClass:"text-lg font-bold"},[e._v(e._s(e.reviewResult.intervalSummary.service))])]),t("li",{staticClass:"col-span-3 flex h-full flex-col items-center justify-between gap-2 text-center md:col-span-2"},[t("p",[e._v("店販消費")]),t("p",{staticClass:"text-lg font-bold"},[e._v(e._s(e.reviewResult.intervalSummary.product))])]),t("li",{staticClass:"col-span-3 flex h-full flex-col items-center justify-between gap-2 text-center md:col-span-2"},[t("p",[e._v("卡券使用(入業績)")]),t("p",{staticClass:"text-lg font-bold"},[e._v(e._s(e.reviewResult.intervalSummary.usedTicket))])]),t("li",{staticClass:"col-span-3 flex h-full flex-col items-center justify-between gap-2 text-center md:col-span-2"},[t("p",[e._v("卡券販賣(入業績)")]),t("p",{staticClass:"text-lg font-bold"},[e._v(e._s(e.reviewResult.intervalSummary.ticketSellIntoPerformance))])]),t("li",{staticClass:"col-span-3 flex h-full flex-col items-center justify-between gap-2 text-center md:col-span-2"},[t("p",[e._v("業績收入")]),t("p",{staticClass:"text-lg font-bold"},[e._v(e._s(e.reviewResult.intervalSummary.performanceIncome))])]),t("li",{staticClass:"col-span-3 flex h-full flex-col items-center justify-between gap-2 text-center md:col-span-2"},[t("p",[e._v("卡券販賣(不入業績)")]),t("p",{staticClass:"text-lg font-bold"},[e._v(e._s(e.reviewResult.intervalSummary.ticketSellNotIntoPerformance))])]),t("li",{staticClass:"col-span-3 flex h-full flex-col items-center justify-between gap-2 text-center md:col-span-2"},[t("p",[e._v("卡券使用(-)")]),t("p",{staticClass:"text-lg font-bold"},[e._v(e._s(e.reviewResult.intervalSummary.usedTicketForDecount))])]),t("li",{staticClass:"col-span-3 flex h-full flex-col items-center justify-between gap-2 text-center md:col-span-2"},[t("p",[e._v("第三方卡券(-)")]),t("p",{staticClass:"text-lg font-bold"},[e._v(e._s(e.reviewResult.intervalSummary.thirdPartTicketForDecount))])]),t("li",{staticClass:"col-span-3 flex h-full flex-col items-center justify-between gap-2 text-center md:col-span-2"},[t("p",[e._v("其他付款方式(-)")]),t("p",{staticClass:"text-lg font-bold"},[e._v(e._s(e.reviewResult.intervalSummary.otherPayWayForDecount))])]),t("li",{staticClass:"col-span-3 flex h-full flex-col items-center justify-between gap-2 text-center md:col-span-2"},[t("p",[e._v("入金使用(-)")]),t("p",{staticClass:"text-lg font-bold"},[e._v(e._s(e.reviewResult.intervalSummary.walletUsedForDecount?e.reviewResult.intervalSummary.walletUsedForDecount:0))])]),t("li",{staticClass:"col-span-3 flex h-full flex-col items-center justify-between gap-2 text-center md:col-span-2"},[t("p",[e._v("入金儲值")]),t("p",{staticClass:"text-lg font-bold"},[e._v(e._s(e.reviewResult.intervalSummary.walletDeposit))])]),t("li",{staticClass:"col-span-3 flex h-full flex-col items-center justify-between gap-2 text-center md:col-span-2"},[t("p",[e._v("營業現金應收")]),t("p",{staticClass:"text-lg font-bold"},[e._v(e._s(e.reviewResult.intervalSummary.businessCash))])])]):e._e(),e.reviewResult.orders&&e.reviewResult.orders.length>0?t("h2",{staticClass:"mt-5 mb-3 text-xl font-bold"},[e._v("訂單列表")]):e._e(),e.reviewResult.orders&&e.reviewResult.orders.length>0?t("ul",{staticClass:"grid gap-4"},e._l(e.reviewResult.orders,(function(s){return t("li",{key:s.id,staticClass:"w-full bg-[#08424c] p-2 text-white"},[t("p",{staticClass:"mb-2 text-xl font-bold"},[e._v("訂單編號 "+e._s(s.no))]),t("div",{staticClass:"grid grid-cols-12 gap-2"},[t("div",{staticClass:"col-span-12 flex justify-between border-b border-b-white"},[t("p",[e._v("服務消費")]),t("p",[e._v("$"+e._s(s.serviceFakeTotal))])]),t("div",{staticClass:"col-span-12 flex justify-between border-b border-b-white"},[t("p",[e._v("店販消費")]),t("p",[e._v("$"+e._s(s.productFakeTotal))])]),t("div",{staticClass:"col-span-12 flex justify-between border-b border-b-white"},[t("p",[e._v("卡券使用(入業績)")]),t("p",[e._v("$"+e._s(s.useTicketTotal))])]),t("div",{staticClass:"col-span-12 flex justify-between border-b border-b-white"},[t("p",[e._v("卡券販賣(入業績)")]),t("p",[e._v("$"+e._s(s.ticketSellIntoPerformance))])]),t("div",{staticClass:"col-span-12 flex justify-between border-b border-b-white"},[t("p",[e._v("業績收入")]),t("p",[e._v("$"+e._s(s.performanceIncome))])]),t("div",{staticClass:"col-span-12 flex justify-between border-b border-b-white"},[t("p",[e._v("卡券販賣(不入業績)")]),t("p",[e._v("$"+e._s(s.ticketSellNotIntoPerformance))])]),t("div",{staticClass:"col-span-12 flex justify-between border-b border-b-white"},[t("p",[e._v("卡券使用(-)")]),t("p",[e._v("$"+e._s(s.usedTicketForDecount))])]),t("div",{staticClass:"col-span-12 flex justify-between border-b border-b-white"},[t("p",[e._v("第三方卡券(-)")]),t("p",[e._v("$"+e._s(s.thirdPartTicketForDecount))])]),t("div",{staticClass:"col-span-12 flex justify-between border-b border-b-white"},[t("p",[e._v("其他付款方式(-)")]),t("p",[e._v("$"+e._s(s.otherPayWayForDecount))])]),t("div",{staticClass:"col-span-12 flex justify-between border-b border-b-white"},[t("p",[e._v("入金使用(-)")]),t("p",[e._v("$"+e._s(s.walletUsedForDecount))])]),t("div",{staticClass:"col-span-12 flex justify-between"},[t("p",[e._v("營業現金應收")]),t("p",[e._v("$"+e._s(s.businessCash))])])]),t("ul",{staticClass:"my-2"},[t("li",{staticClass:"flex items-center justify-between bg-black/20 py-3 px-2",on:{click:function(e){s.isOpen=!s.isOpen},keypress:function(e){s.isOpen=!s.isOpen}}},[t("p",{staticClass:"text-lg"},[e._v("詳細資料")]),t("font-awesome-icon",{staticClass:"cursor-pointer text-lg duration-300",class:{"rotate-180":s.isOpen},attrs:{icon:"fa-regular fa-angle-up"}})],1),t("ul",{staticClass:"overflow-hidden bg-black/20 px-2 duration-300",class:{"max-h-[200vh]":s.isOpen,"max-h-[0px]":!s.isOpen}},[t("li",[t("table",{staticClass:"w-full"},[e._m(0,!0),t("tbody",e._l(s.staticDetail,(function(l,a){return t("tr",{key:a,class:{"border-b border-b-white py-1.5":a!==s.staticDetail.length-1}},[t("td",{staticClass:"p-1.5"},[e._v(e._s(l.designerName))]),t("td",{staticClass:"p-1.5"},[e._v(e._s(l.itemName))]),t("td",{staticClass:"p-1.5"},[e._v("$"+e._s(l.price))]),t("td",{staticClass:"p-1.5"},e._l(l.helperList,(function(s,l){return t("p",{key:l},[e._v(" "+e._s(s.helperName)+" ")])})),0)])})),0)])])])])])})),0):e._e(),e.reviewResult.orders&&0!==e.reviewResult.orders.length?e._e():t("p",{staticClass:"mt-10 text-center text-stone-500"},[e._v("查無資料")])])])],1)},a=[function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("th",[e._v("設計師")]),t("th",[e._v("項目")]),t("th",[e._v("價格")]),t("th",[e._v("互助人")])])])}],r=(s(7658),s(629)),i={name:"priceList-index",description:"報表的帳單列表",metaInfo:{title:"BeautyOS 設計師",titleTemplate:"%s | 帳單列表"},data(){return{modelConfig:{start:{timeAdjust:"00:00:00"},end:{timeAdjust:"23:59:59"}},pageOffset:0,searchDate:this.$dayjs().add(0,"month").format("YYYY-MM-DD"),date:"",reviewResult:{},showDetail:[]}},methods:{doRoute(){this.$router.push({name:"Punch"})},async getOrders(){if(!this.searchDate)return;const e={startDate:this.searchDate.getTime(),endDate:this.searchDate.getTime(),pageLimit:20,pageOffset:this.pageOffset,isReserved:!1},t=await this.$api.designerOrders(e),{data:s}=t.data;s.orders.orders.length>0?s.orders.orders.forEach(((e,t)=>{e["isOpen"]=!1,t===s.orders.orders.length-1&&(this.reviewResult=s.orders)})):this.reviewResult=s.orders,this.reviewResult["currentDate"]=this.searchDate}},computed:{...(0,r.rn)("userInfo",["userInfo"]),isReviewResult(){return this.reviewResult.length},showMonth(){return`${this.$dayjs(this.reviewResult.currentDate).format("MM")}`},showYear(){return`${this.$dayjs(this.reviewResult.currentDate).format("YYYY")}`},currentMM(){let e="";return e=this.date?this.$dayjs(this.date).format("MM"):this.$dayjs(new Date).format("MM"),e},currentYYYY(){let e="";return e=this.date?this.$dayjs(this.date).format("YYYY"):this.$dayjs(new Date).format("YYYY"),e}}},n=i,o=s(3736),c=(0,o.Z)(n,l,a,!1,null,null,null),u=c.exports}}]);
//# sourceMappingURL=56.9a170d3a.js.map