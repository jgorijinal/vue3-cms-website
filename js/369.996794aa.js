"use strict";(self["webpackChunkvue3_ts_cms"]=self["webpackChunkvue3_ts_cms"]||[]).push([[369],{9251:function(e,t,a){a.d(t,{Z:function(){return S}});var l=a(6252),o=a(3577);const n={class:"page-content"},d={class:"handler-btns"},i=(0,l.Uk)("编辑"),r=(0,l.Uk)("删除");function s(e,t,a,s,u,p){const c=(0,l.up)("el-button"),g=(0,l.up)("Edit"),m=(0,l.up)("el-icon"),f=(0,l.up)("Delete"),h=(0,l.up)("hy-table");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(h,(0,l.dG)({tableData:e.dataList},e.contentTableConfig,{total:e.dataCount,page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=t=>e.pageInfo=t)}),(0,l.Nv)({"header-handler":(0,l.w5)((()=>[e.isCreate?((0,l.wg)(),(0,l.j4)(c,{key:0,type:"primary",onClick:e.handleCreateClick},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.createBtn),1)])),_:1},8,["onClick"])):(0,l.kq)("",!0)])),createAt:(0,l.w5)((t=>[(0,l.Uk)((0,o.zw)(e.$filters.formatTime(t.row.createAt)),1)])),updateAt:(0,l.w5)((t=>[(0,l.Uk)((0,o.zw)(e.$filters.formatTime(t.row.updateAt)),1)])),handler:(0,l.w5)((t=>[(0,l._)("div",d,[e.isUpdate?((0,l.wg)(),(0,l.j4)(c,{key:0,text:"",type:"primary",onClick:a=>e.handleEditClick(t.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{size:"default"},{default:(0,l.w5)((()=>[(0,l.Wm)(g)])),_:1}),i])),_:2},1032,["onClick"])):(0,l.kq)("",!0),e.isDelete?((0,l.wg)(),(0,l.j4)(c,{key:1,text:"",type:"primary",onClick:a=>e.handleDeleteClick(t.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{size:"default"},{default:(0,l.w5)((()=>[(0,l.Wm)(f)])),_:1}),r])),_:2},1032,["onClick"])):(0,l.kq)("",!0)])])),_:2},[(0,l.Ko)(e.otherPropSlots,(t=>({name:t.slotName,fn:(0,l.w5)((a=>[t.slotName?(0,l.WI)(e.$slots,t.slotName,{key:0,row:a.row},void 0,!0):(0,l.kq)("",!0)]))})))]),1040,["tableData","total","page"])])}var u=a(2262);const p={class:"table"},c={class:"table-header"},g={class:"title"},m={class:"handler"},f={key:0,class:"footer"};function h(e,t,a,n,d,i){const r=(0,l.up)("el-table-column"),s=(0,l.up)("el-table"),u=(0,l.up)("el-pagination");return(0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("div",c,[(0,l.WI)(e.$slots,"header",{},(()=>[(0,l._)("div",g,(0,o.zw)(e.title),1),(0,l._)("div",m,[(0,l.WI)(e.$slots,"header-handler",{},void 0,!0)])]),!0)]),(0,l.Wm)(s,(0,l.dG)({data:e.tableData,border:"",style:{width:"100%"},onSelectionChange:e.handleSelectionChange},e.childrenProps),{default:(0,l.w5)((()=>[e.showSelectColumn?((0,l.wg)(),(0,l.j4)(r,{key:0,type:"selection"})):(0,l.kq)("",!0),e.showIndexColumn?((0,l.wg)(),(0,l.j4)(r,{key:1,type:"index",label:"序号",width:60,align:"center"})):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.propList,(t=>((0,l.wg)(),(0,l.j4)(r,(0,l.dG)({key:t.prop,align:"center"},t,{"show-overflow-tooltip":""}),{default:(0,l.w5)((a=>[(0,l.WI)(e.$slots,t.slotName,{row:a.row},(()=>[(0,l.Uk)((0,o.zw)(a.row[t.prop?t.prop:"无"]),1)]),!0)])),_:2},1040)))),128))])),_:3},16,["data","onSelectionChange"]),e.showFooter?((0,l.wg)(),(0,l.iD)("div",f,[(0,l.WI)(e.$slots,"table-footer",{},(()=>[(0,l.Wm)(u,{currentPage:e.page.currentPage,"page-size":e.page.pageSize,"page-sizes":[10,20,30],layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])]),!0)])):(0,l.kq)("",!0)])}var w=(0,l.aZ)({props:{tableData:{type:Array,required:!0},propList:{type:Array},showIndexColumn:{type:Boolean,default:!1},showSelectColumn:{type:Boolean,default:!1},title:{type:String,default:""},total:{type:Number,default:0},page:{type:Object,default:()=>({currentPage:1,pageSize:10})},childrenProps:{type:Object,default:()=>({})},showFooter:{type:Boolean,default:!0}},emits:["selectionChange","update:page"],setup(e,{emit:t}){const a=e=>{t("selectionChange",e)},l=a=>{t("update:page",{...e.page,pageSize:a})},o=a=>{t("update:page",{...e.page,currentPage:a})};return{handleSelectionChange:a,handleSizeChange:l,handleCurrentChange:o}}}),y=a(3744);const C=(0,y.Z)(w,[["render",h],["__scopeId","data-v-372ad80c"]]);var k=C,v=k,b=a(1411);function _(e,t){const a=(0,b.oR)(),l=a.state.login.permissions,o=`system:${e}:${t}`;return Boolean(l.find((e=>e===o)))}var I=(0,l.aZ)({components:{HyTable:v},props:{contentTableConfig:{type:Object,required:!0},pageName:{type:String,required:!0},createBtn:{type:String,default:"新建"}},emits:["createBtnClick","editBtnClick"],setup(e,t){const a=_(e.pageName,"create"),o=_(e.pageName,"delete"),n=_(e.pageName,"update"),d=_(e.pageName,"query"),i=(0,u.iH)({currentPage:1,pageSize:10});(0,l.YP)(i,(()=>{s()}));const r=(0,b.oR)(),s=(t={})=>{d&&r.dispatch("system/getPageListAction",{pageName:e.pageName,queryInfo:{offset:(i.value.currentPage-1)*i.value.pageSize,size:i.value.pageSize,...t}})};s();const p=(0,l.Fl)((()=>r.getters["system/pageListData"](e.pageName))),c=(0,l.Fl)((()=>r.getters["system/pageListCount"](e.pageName))),g=e.contentTableConfig.propList.filter((e=>"createAt"!==e.slotName&&("updateAt"!==e.slotName&&"handler"!==e.slotName))),m=t=>{r.dispatch("system/deletePageDataAction",{pageName:e.pageName,id:t.id})},f=()=>{t.emit("createBtnClick")},h=e=>{t.emit("editBtnClick",e)};return{dataList:p,dataCount:c,getPageData:s,pageInfo:i,otherPropSlots:g,isCreate:a,isDelete:o,isUpdate:n,handleDeleteClick:m,handleCreateClick:f,handleEditClick:h}}});const D=(0,y.Z)(I,[["render",s],["__scopeId","data-v-f7b24fa0"]]);var V=D,S=V},3172:function(e,t,a){a.d(t,{Z:function(){return h}});var l=a(6252);const o={class:"page-modal"},n={class:"dialog-footer"},d=(0,l.Uk)("取消"),i=(0,l.Uk)("确定");function r(e,t,a,r,s,u){const p=(0,l.up)("hy-form"),c=(0,l.up)("el-button"),g=(0,l.up)("el-dialog");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(g,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=t=>e.dialogVisible=t),title:e.title,width:"30%",center:"","destroy-on-close":""},{footer:(0,l.w5)((()=>[(0,l._)("span",n,[(0,l.Wm)(c,{onClick:t[1]||(t[1]=t=>e.dialogVisible=!1)},{default:(0,l.w5)((()=>[d])),_:1}),(0,l.Wm)(c,{type:"primary",onClick:e.handleConfirmClick},{default:(0,l.w5)((()=>[i])),_:1},8,["onClick"])])])),default:(0,l.w5)((()=>[(0,l.Wm)(p,(0,l.dG)(e.modalConfig,{modelValue:e.formData,"onUpdate:modelValue":t[0]||(t[0]=t=>e.formData=t)}),null,16,["modelValue"]),(0,l.WI)(e.$slots,"default")])),_:3},8,["modelValue","title"])])}var s=a(2262),u=a(2257),p=a(1411),c=(0,l.aZ)({components:{HyForm:u.Z},props:{title:{type:String,default:"新建"},modalConfig:{type:Object,required:!0},defaultInfo:{type:Object,default:()=>({})},pageName:{type:String,required:!0},otherInfo:{type:Object,default:()=>({})}},setup(e){const t=(0,s.iH)(!1),a=(0,s.iH)({});(0,l.YP)((()=>e.defaultInfo),(t=>{for(const l of e.modalConfig.formItems)a.value[l.field]=t[l.field]}));const o=(0,p.oR)(),n=()=>{t.value=!1,0===Object.keys(e.defaultInfo).length?o.dispatch("system/createPageDataAction",{pageName:e.pageName,newData:{...a.value,...e.otherInfo}}):o.dispatch("system/editPageDataAction",{pageName:e.pageName,id:e.defaultInfo.id,newData:{...a.value,...e.otherInfo}})};return{dialogVisible:t,formData:a,handleConfirmClick:n}}}),g=a(3744);const m=(0,g.Z)(c,[["render",r]]);var f=m,h=f},8256:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(2262);function o(e,t){const a=(0,l.iH)(),o=()=>{n.value={},a.value&&(a.value.dialogVisible=!0),e&&e()},n=(0,l.iH)({}),d=e=>{n.value={...e},a.value&&(a.value.dialogVisible=!0),t&&t(e)};return{pageModalRef:a,handleCreateData:o,handleEditData:d,defaultInfo:n}}},2257:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(6252),o=a(3577);const n={class:"form"},d={class:"header"},i={class:"footer"};function r(e,t,a,r,s,u){const p=(0,l.up)("el-input"),c=(0,l.up)("el-option"),g=(0,l.up)("el-select"),m=(0,l.up)("el-date-picker"),f=(0,l.up)("el-form-item"),h=(0,l.up)("el-col"),w=(0,l.up)("el-row"),y=(0,l.up)("el-form");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",d,[(0,l.WI)(e.$slots,"header",{},void 0,!0)]),(0,l.Wm)(y,{"label-width":e.labelWidth},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.formItems,(t=>((0,l.wg)(),(0,l.j4)(h,(0,o.vs)((0,l.dG)({key:t.label},e.colLayout)),{default:(0,l.w5)((()=>[t.isHidden?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(f,{key:0,label:t.label,style:(0,o.j5)(e.formItemStyle)},{default:(0,l.w5)((()=>["input"===t.type||"password"===t.type?((0,l.wg)(),(0,l.j4)(p,{key:0,"show-password":"password"===t.type,"model-value":e.modelValue[t.field],"onUpdate:modelValue":a=>e.handleValueChange(a,t.field),placeholder:t.placeholder},null,8,["show-password","model-value","onUpdate:modelValue","placeholder"])):"select"===t.type?((0,l.wg)(),(0,l.j4)(g,{key:1,style:{width:"100%"},"model-value":e.modelValue[t.field],"onUpdate:modelValue":a=>e.handleValueChange(a,t.field),placeholder:t.placeholder},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.selectOptions,(e=>((0,l.wg)(),(0,l.j4)(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["model-value","onUpdate:modelValue","placeholder"])):(0,l.kq)("",!0),"datePicker"===t.type?((0,l.wg)(),(0,l.j4)(m,(0,l.dG)({key:2,style:{width:"100%"}},t.datePickerOptions,{"model-value":e.modelValue[t.field],"onUpdate:modelValue":a=>e.handleValueChange(a,t.field)}),null,16,["model-value","onUpdate:modelValue"])):(0,l.kq)("",!0)])),_:2},1032,["label","style"]))])),_:2},1040)))),128))])),_:1})])),_:1},8,["label-width"]),(0,l._)("div",i,[(0,l.WI)(e.$slots,"footer",{},void 0,!0)])])}var s=(0,l.aZ)({props:{modelValue:{type:Object,required:!0},formItems:{type:Array},labelWidth:{type:String,default:"100px"},formItemStyle:{type:Object,default:()=>({padding:"10px 10px"})},colLayout:{type:Object,default:()=>({xl:8,lg:8,md:8,sm:12,xs:24})}},emits:["update:modelValue"],setup(e,t){const a=(a,l)=>{t.emit("update:modelValue",Object.assign({...e.modelValue},{[`${l}`]:a}))};return{handleValueChange:a}}}),u=a(3744);const p=(0,u.Z)(s,[["render",r],["__scopeId","data-v-33feecd6"]]);var c=p}}]);
//# sourceMappingURL=369.996794aa.js.map