"use strict";(self["webpackChunkbos_designer"]=self["webpackChunkbos_designer"]||[]).push([[640],{7640:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var s=function(){var e=this,t=e._self._c;return t("main",{staticClass:"box-border h-full min-h-[calc(100vh-84px)] w-full pb-[84px]"},[t("C-Back-Nav",{attrs:{title:(""!==e.GETTER_MECHANTNAME?e.GETTER_MECHANTNAME+" - ":"")+"預約",routeTarget:{name:"Order"}}}),t("section",{staticClass:"relative z-0 mt-[52px] p-3"},[t("p",{staticClass:"my-2 text-center"},[e._v("新增預約")]),t("ValidationObserver",{ref:"orderForm"},[t("div",{staticClass:"my-2 flex items-center gap-2 text-left"},[t("p",{staticClass:"w-3/12"},[e._v("預約時間")]),t("div",{staticClass:"flex w-9/12 gap-1"},[t("ValidationProvider",{ref:"orderDate",staticClass:"w-3/5",attrs:{name:"日期",rules:"required"},scopedSlots:e._u([{key:"default",fn:function({errors:r}){return[t("VCCalendarSelect",{attrs:{"min-date":new Date,placeholder:"選擇日期",errors:r},model:{value:e.orderDate,callback:function(t){e.orderDate=t},expression:"orderDate"}})]}}])}),t("ValidationProvider",{ref:"timeList",staticClass:"w-2/5",attrs:{name:"時間",rules:"required"},scopedSlots:e._u([{key:"default",fn:function({errors:r}){return[t("C-Select",{staticClass:"w-full",attrs:{list:e.timeList,placeholder:"選擇時間","item-text":"name","item-value":"id","object-return":"",errors:r},model:{value:e.orderTime,callback:function(t){e.orderTime=t},expression:"orderTime"}})]}}])})],1)]),t("div",{staticClass:"my-2 flex items-center gap-2 text-left"},[t("p",{staticClass:"w-3/12"},[e._v("姓名")]),t("div",{staticClass:"w-9/12"},[t("ValidationProvider",{ref:"name",attrs:{name:"姓名",rules:"required"},scopedSlots:e._u([{key:"default",fn:function({errors:r}){return[t("C-Input",{staticClass:"mb-0",attrs:{errors:r},scopedSlots:e._u([{key:"endIcon",fn:function(){return[""!==e.name?t("font-awesome-icon",{staticClass:"text-rose-600",attrs:{icon:"fa-regular fa-xmark"},on:{click:function(t){e.name=""}}}):e._e()]},proxy:!0}],null,!0),model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})]}}])})],1)]),t("div",{staticClass:"my-2 flex items-center gap-2 text-left"},[t("p",{staticClass:"w-3/12"},[e._v("電話")]),t("div",{staticClass:"w-9/12"},[t("ValidationProvider",{ref:"cellphone",attrs:{name:"電話",rules:"required"},scopedSlots:e._u([{key:"default",fn:function({errors:r}){return[t("C-Input",{staticClass:"mb-0",attrs:{errors:r},scopedSlots:e._u([{key:"endIcon",fn:function(){return[""!==e.cellphone?t("font-awesome-icon",{staticClass:"text-rose-600",attrs:{icon:"fa-regular fa-xmark"},on:{click:function(t){e.cellphone=""}}}):e._e()]},proxy:!0}],null,!0),model:{value:e.cellphone,callback:function(t){e.cellphone=t},expression:"cellphone"}})]}}])})],1)]),t("div",{staticClass:"my-2 flex items-center gap-2 text-left"},[t("p",{staticClass:"w-3/12"},[e._v("指定預約")]),t("div",{staticClass:"flex w-9/12 flex-nowrap gap-1 text-left"},[t("C-Checkbox-Full",{staticClass:"!ml-0 !w-fit",model:{value:e.isOrderDesigner,callback:function(t){e.isOrderDesigner=t},expression:"isOrderDesigner"}})],1)]),t("div",{staticClass:"my-2 flex gap-2 text-left"},[t("label",{staticClass:"w-3/12"},[e._v("備註")]),t("div",{staticClass:"relative flex w-9/12 flex-nowrap gap-1"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.remark,expression:"remark"}],staticClass:"w-full rounded-md border border-primary/50",attrs:{name:"remark",id:"",rows:"5"},domProps:{value:e.remark},on:{input:function(t){t.target.composing||(e.remark=t.target.value)}}}),""!==e.remark?t("font-awesome-icon",{staticClass:"absolute right-2 bottom-1 text-rose-600",attrs:{icon:"fa-regular fa-xmark"},on:{click:function(t){e.remark=""}}}):e._e()],1)]),t("div",{staticClass:"fixed bottom-[100px] w-[calc(100%-24px)]"},[t("div",{staticClass:"w-full cursor-pointer bg-second py-2 px-4 text-white",on:{click:e.doFormValidate,keypress:e.doFormValidate}},[e._v("新增預約")])])])],1)],1)},a=[],i=(r(7658),r(629)),n=r(4726),o={components:{VCCalendarSelect:n.Z},name:"order-add",description:"預約的首頁",metaInfo:{title:"BeautyOS 設計師",titleTemplate:"%s | 預約"},data(){return{orderDate:new Date,orderTime:"",name:"",cellphone:"",remark:"",isOrderDesigner:!0,timeList:[]}},mounted(){},methods:{doRoute(e){this.$router.push({name:e.name})},async doFormValidate(){const e=await this.$refs.orderForm.validate();e&&this.doDelivery()},async doDelivery(){const e={designerId:this.userInfo.user.id,dateTime:this.$dayjs(`${this.$dayjs(this.orderDate).format("YYYY-MM-DD")} ${this.orderTime.name}`).valueOf(),cellphone:this.cellphone,merchantId:this.currentMechantId,name:this.name,remark:this.remark,isDesignate:this.isOrderDesigner},t=await this.$api.bookingV2(e),{errors:r}=t.data;r||this.fireSwalToOrder()},fireSwalToOrder(){this.$swal.fire({title:" ",html:'<div class="flex items-center justify-center my-10">\n          <img src="/designer/assets/images/success.svg" alt="" class="inline-block mr-1" /><span>新增成功</span>\n        </div>',confirmButtonText:"回列表",showConfirmButton:!0,showCloseButton:!0,customClass:{confirmButton:"!w-[144px] !rounded !bg-second !px-[14px] !py-2 !text-sm !text-white"}}).then((e=>{e.isConfirmed&&this.doRoute({name:"Order"})}))},async getTimeList(){this.orderTime="";const e=()=>this.isOrderDesigner?{date:this.$dayjs(this.orderDate).valueOf(),storeId:this.currentMechantId,designerId:this.userInfo.user.id}:{storeId:this.currentMechantId,date:this.$dayjs(this.orderDate).valueOf()},t="getBookingTimes",r=await this.$api[t](e()),{data:s,errors:a}=r.data;a||(this.timeList=Array.isArray(s[t])?s[t].map(((e,t)=>({name:this.$dayjs(e.time).isValid()?this.$dayjs(e.time).format("HH:mm"):e.time,id:`bookingTime${t}`,disabled:!1}))):[])}},computed:{...(0,i.rn)("userInfo",["userInfo","currentMechantId"]),...(0,i.Se)("userInfo",["GETTER_MECHANTNAME"])},watch:{orderDate:{immediate:!0,handler(){this.getTimeList()}}}},l=o,d=r(3736),c=(0,d.Z)(l,s,a,!1,null,"b83a5ea6",null),m=c.exports}}]);
//# sourceMappingURL=640.f20fc5f5.js.map