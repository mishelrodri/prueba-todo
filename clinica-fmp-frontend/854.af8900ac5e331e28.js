"use strict";(self.webpackChunkclinica_fmp_frontend=self.webpackChunkclinica_fmp_frontend||[]).push([[854],{9854:(se,v,l)=>{l.r(v),l.d(v,{DepurarModule:()=>oe});var m=l(6895),b=l(3599),s=l(433),u=l(7926),Z=l(9861),C=l(8372),x=l(1884),U=l(5226),p=l.n(U),e=l(1571),T=l(2340),D=l(529);let q=(()=>{class r{constructor(i){this.http=i,this.api=`${T.N.api}/expediente`,this.apiCertificado=`${T.N.api}/certificacion`}get formatDate(){return Z.Z}obtenerAnio(){return this.formatDate().year()-5}listarParametros(i=2,t=0,n="numeroExpediente,asc",o=""+this.obtenerAnio(),c=""){this.http.get(`${this.api}/buscar-purga`,{params:{page:t,size:i,sort:n,filtro:c,year:o}}).subscribe({next:f=>{this.expedienteList=f}})}purgar(i){return this.http.get(`${this.api}/purga`,{params:{filtro:i}})}listarParametrosCertificado(i=2,t=0,n="numeroExpediente,asc",o=""+this.obtenerAnio(),c=""){this.http.get(`${this.apiCertificado}/buscar-purga`,{params:{page:t,size:i,sort:n,filtro:c,year:o}}).subscribe({next:f=>{this.certificadoList=f}})}purgarCertificado(i){return this.http.get(`${this.apiCertificado}/purga`,{params:{filtro:i}})}}return r.\u0275fac=function(i){return new(i||r)(e.LFG(D.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var _=l(9061),h=l(723);function E(r,a){if(1&r){const i=e.EpF();e.TgZ(0,"button",37),e.NdJ("click",function(){e.CHM(i);const n=e.oxw();return e.KtG(n.purgar())}),e._UZ(1,"i",38),e.qZA()}}function J(r,a){1&r&&(e.TgZ(0,"div"),e._uU(1,"El a\xf1o es requerido"),e.qZA())}function N(r,a){1&r&&(e.TgZ(0,"div"),e._uU(1,"El a\xf1o no es v\xe1lido"),e.qZA())}function k(r,a){if(1&r&&(e.TgZ(0,"div",39),e.YNc(1,J,2,0,"div",40),e.YNc(2,N,2,0,"div",40),e.qZA()),2&r){const i=e.oxw();let t,n;e.xp6(1),e.Q6J("ngIf",null==(t=i.form.get("year"))||null==t.errors?null:t.errors.required),e.xp6(1),e.Q6J("ngIf",null==(n=i.form.get("year"))||null==n.errors?null:n.errors.min)}}function O(r,a){1&r&&(e.TgZ(0,"span",47),e._uU(1,"Activo"),e.qZA())}function I(r,a){1&r&&(e.TgZ(0,"span",48),e._uU(1,"Inactivo"),e.qZA())}function Q(r,a){if(1&r){const i=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e.YNc(8,O,2,0,"span",42),e.YNc(9,I,2,0,"span",43),e.qZA(),e.TgZ(10,"td",44)(11,"button",45),e.NdJ("click",function(){const o=e.CHM(i).$implicit,c=e.oxw(2),f=e.MAs(70);return e.KtG(c.openLgView(f,o))}),e._UZ(12,"i",46),e.qZA()()()}if(2&r){const i=a.$implicit,t=e.oxw(2);e.xp6(2),e.Oqu(i.numeroExpediente),e.xp6(2),e.Oqu(t.formatDate(i.fecha).format("LL")),e.xp6(2),e.Oqu(i.paciente.nombre+" "+i.paciente.apellido),e.xp6(2),e.Q6J("ngIf",i.estado),e.xp6(1),e.Q6J("ngIf",!i.estado)}}function z(r,a){if(1&r&&(e.ynx(0),e.YNc(1,Q,13,5,"tr",41),e.BQk()),2&r){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.listar)}}function S(r,a){1&r&&(e.TgZ(0,"tr")(1,"td",49),e._uU(2,"No existen registros disponibles"),e.qZA()())}function F(r,a){if(1&r&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA()()),2&r){const i=a.$implicit;e.xp6(2),e.Oqu(i.familia.nombre),e.xp6(2),e.Oqu(i.familia.apellido),e.xp6(2),e.Oqu(i.familia.parentesco),e.xp6(2),e.Oqu(i.telefono?i.telefono:"No se proporciono")}}function w(r,a){if(1&r&&(e.ynx(0),e.YNc(1,F,9,4,"tr",41),e.BQk()),2&r){const i=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",i.expediente.expedienteFamilias)}}function Y(r,a){1&r&&(e.TgZ(0,"tr")(1,"td",66),e._uU(2,"No existen registros disponibles"),e.qZA()())}function L(r,a){if(1&r){const i=e.EpF();e.TgZ(0,"div",50)(1,"h4",51),e._uU(2,"Ver detalles del antiguo ingreso"),e.qZA(),e.TgZ(3,"button",52),e.NdJ("click",function(){const o=e.CHM(i).$implicit;return e.KtG(o.dismiss("Cross click"))}),e.qZA()(),e.TgZ(4,"div",53)(5,"div",0)(6,"div",54)(7,"div",55)(8,"h5",56),e._uU(9,"Detalle expediente"),e.qZA()()(),e.TgZ(10,"div",54)(11,"div",57)(12,"div",58)(13,"label",59),e._uU(14,"N\xfamero de expediente"),e.qZA(),e.TgZ(15,"p"),e._uU(16),e.qZA()()(),e.TgZ(17,"div",57)(18,"div",58)(19,"label",59),e._uU(20,"Fecha de creaci\xf3n"),e.qZA(),e.TgZ(21,"p"),e._uU(22),e.qZA()()()(),e.TgZ(23,"div",54)(24,"div",57)(25,"div",58)(26,"label",59),e._uU(27,"Paciente"),e.qZA(),e.TgZ(28,"p",60),e._uU(29),e.qZA()()(),e.TgZ(30,"div",57)(31,"div",58)(32,"label",59),e._uU(33,"Estado"),e.qZA(),e.TgZ(34,"p"),e._uU(35),e.qZA()()()(),e.TgZ(36,"div",54)(37,"div",61)(38,"h5",62),e._uU(39,"Detalle familia"),e.qZA()()(),e.TgZ(40,"div",54)(41,"div",24)(42,"table",25)(43,"thead")(44,"tr",26)(45,"th",30),e._uU(46,"Nombre"),e.qZA(),e.TgZ(47,"th",30),e._uU(48,"Apellido"),e.qZA(),e.TgZ(49,"th",30),e._uU(50,"Parentesco"),e.qZA(),e.TgZ(51,"th",30),e._uU(52,"Tel\xe9fono"),e.qZA()()(),e.TgZ(53,"tbody"),e.YNc(54,w,2,1,"ng-container",31),e.YNc(55,Y,3,0,"ng-template",null,63,e.W1O),e.qZA()()()()()(),e.TgZ(57,"div",64)(58,"button",65),e.NdJ("click",function(){const o=e.CHM(i).$implicit;return e.KtG(o.close("Close click"))}),e._uU(59,"Cerrar"),e.qZA()()}if(2&r){const i=e.MAs(56),t=e.oxw();e.xp6(16),e.Oqu(t.expediente.numeroExpediente),e.xp6(6),e.Oqu(t.formatDate(t.expediente.fecha).format("LL")),e.xp6(7),e.hij(" ",t.expediente.paciente.nombre+" "+t.expediente.paciente.apellido," "),e.xp6(6),e.Oqu(t.expediente.estado?"Activo":"Inactivo"),e.xp6(19),e.Q6J("ngIf",t.expediente.expedienteFamilias.length>0)("ngIfElse",i)}}const M=function(r,a){return{"is-invalid":r,"is-valid":a}},g=function(r){return{"d-none":r}};let V=(()=>{class r{constructor(i,t,n,o){this.service=i,this.modalService=t,this.fb=n,this.config=o,this.pageList=u.Hj,this.maxSize=u.$,this.page=u.Md,this.size=u.dp,this.seGuardo=!1,this.cambioOrden=!0,this.mostrarEstado=!1,this.estadoActual="Activo",this.sort="numeroExpediente,asc",this.config.notFoundText="No se encontraron resultados",this.buscar=this.fb.group({filter:["",[]]}),this.form=this.fb.group({year:["",[s.kI.required,s.kI.min(0)]]}),this.valorInicial()}ngOnInit(){this.buscar.get("filter")?.valueChanges.pipe((0,C.b)(500),(0,x.x)()).subscribe(i=>{this.page=0,this.service.listarParametros(this.size,this.page,this.sort,this.year,i)}),this.service.listarParametros()}get listar(){return this.service.expedienteList?this.service.expedienteList.content:[]}get listarTotal(){return this.service.expedienteList?this.service.expedienteList.totalElements:0}get year(){return this.form.get("year")?this.form.get("year")?.value:""}get filter(){return this.buscar.get("filter")?this.buscar.get("filter")?.value:""}openLgView(i,t){this.expediente=t,this.modalService.open(i,{size:"lg"})}ordenar(i){this.cambioOrden=!this.sort.includes(i)||!this.cambioOrden,this.page=0,this.sort=this.cambioOrden?i+",asc":i+",desc",this.service.listarParametros(this.size,this.page,this.sort,this.year,this.filter)}refreshSize(){this.page=0,this.service.listarParametros(this.size,this.page,this.sort,this.year,this.filter)}get formatDate(){return Z.Z}maxYear(){return this.formatDate().year()-5}refresh(){this.service.listarParametros(this.size,this.page-1,this.sort,this.year,this.filter)}purgar(){p().fire({title:"\xbfConfirmar inhabilitaci\xf3n de registros?",text:"Esta acci\xf3n marcar\xe1 los registros como inhabilitados, pero no los eliminar\xe1 definitivamente.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, inhabilitar",cancelButtonText:"Cancelar"}).then(i=>{if(i.isConfirmed){let t=this.listarTotal;this.service.purgar(this.year).subscribe({next:n=>{n.length>0&&(this.page=0,this.service.listarParametros(this.size,this.page,this.sort,this.year,this.filter),this.seGuardo=!1)}}),p().fire("Inhabilitaci\xf3n Exitosa",`Se han inhabilitado ${t} registros de expediente.`,"success")}})}enviar(){if(this.seGuardo=!0,this.form.valid)return this.year>this.maxYear()?(p().fire({position:"center",title:"Error en la selecci\xf3n de a\xf1o",text:"Por favor, selecciona un a\xf1o con una antig\xfcedad de al menos 5 a\xf1os.",icon:"warning"}),this.seGuardo=!1,void this.valorInicial()):(p().fire({position:"center",title:"\xa1\xc9xito!",text:"Los datos se han consultado correctamente.",icon:"success"}),this.page=0,this.service.listarParametros(this.size,this.page,this.sort,this.year,this.filter),void(this.seGuardo=!1));p().fire({position:"center",title:"Datos incompletos",text:"Por favor, revisa los campos marcados.",icon:"warning"})}valorInicial(){this.form.patchValue({year:this.maxYear()})}}return r.\u0275fac=function(i){return new(i||r)(e.Y36(q),e.Y36(_.FF),e.Y36(s.qu),e.Y36(h.$q))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-depurar-expediente"]],decls:71,vars:44,consts:[[1,"container-fluid"],[1,"header__page","d-flex","justify-content-end","mb-3"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink",""],["aria-current","page",1,"breadcrumb-item","active"],[1,"d-flex","flex-column","gap-2","flex-lg-row","justify-content-between","mb-3"],[1,"fs-3"],["type","button","class","btn btn-danger",3,"click",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"d-flex","flex-column","gap-2","flex-lg-row","align-items-center"],["for","year",1,"form-label"],["type","number","formControlName","year","id","year","min","0",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","submit",1,"btn","btn-primary"],[1,"bi","bi-search"],[1,"d-flex","align-items-center","mb-3"],["for","pageSize",1,"col-form-label","me-2"],["id","pageSize","bindLabel","value","bindValue","value",3,"items","ngModel","clearable","ngModelChange"],["for","pageSize",1,"col-form-label","ms-2"],[3,"formGroup"],["for","filter",1,"col-form-label","me-2"],["id","filter","type","text","formControlName","filter",1,"form-control"],[1,"table-responsive","mb-3"],[1,"table","align-middle"],[1,"border-dark"],["scope","col",3,"click"],[1,"bi","bi-caret-up-fill",3,"ngClass"],[1,"bi","bi-caret-down-fill",3,"ngClass"],["scope","col"],[4,"ngIf","ngIfElse"],["noRecords",""],[1,"d-flex","flex-column","gap-2","flex-lg-row","justify-content-between"],[1,"text-black"],[3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"],["contentView",""],["type","button",1,"btn","btn-danger",3,"click"],[1,"bi","bi-x-lg"],[1,"invalid-feedback"],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","badge bg-success",4,"ngIf"],["class","badge bg-danger",4,"ngIf"],[1,"d-flex","flex-row"],["type","button",1,"btn","btn-outline-secondary","me-2",3,"click"],[1,"bi","bi-eye"],[1,"badge","bg-success"],[1,"badge","bg-danger"],["colspan","5",1,"text-center"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"row"],[1,"d-flex","justify-content-center","mb-3"],[1,"fs-5","fw-bold"],[1,"col-12","col-lg-6"],[1,"mb-3"],[1,"form-label","fw-bold"],[1,""],[1,"mb-3","mt-3"],[1,"d-flex","justify-content-center","fs-5","fw-bold"],["noRecordsFamilia",""],[1,"modal-footer"],["type","button",1,"btn","btn-light",3,"click"],["colspan","4",1,"text-center"]],template:function(i,t){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"nav",2)(3,"ol",3)(4,"li",4)(5,"a",5),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"li",6),e._uU(8,"Depurar antiguos ingresos"),e.qZA()()()(),e.TgZ(9,"div",7)(10,"div")(11,"h1",8),e._uU(12,"Depurar antiguos ingresos"),e.qZA()(),e.TgZ(13,"div"),e.YNc(14,E,2,0,"button",9),e.qZA()(),e.TgZ(15,"form",10),e.NdJ("ngSubmit",function(){return t.enviar()}),e.TgZ(16,"div",7)(17,"div",11)(18,"div")(19,"label",12),e._uU(20,"A\xf1o"),e.qZA(),e._UZ(21,"input",13),e.YNc(22,k,3,2,"div",14),e.qZA()(),e.TgZ(23,"div",11)(24,"button",15),e._UZ(25,"i",16),e.qZA()()()(),e.TgZ(26,"div",7)(27,"div",17)(28,"label",18),e._uU(29,"Mostrar:"),e.qZA(),e.TgZ(30,"ng-select",19),e.NdJ("ngModelChange",function(o){return t.size=o})("ngModelChange",function(){return t.refreshSize()}),e.qZA(),e.TgZ(31,"label",20),e._uU(32,"registros"),e.qZA()(),e.TgZ(33,"form",21)(34,"div",17)(35,"label",22),e._uU(36,"Buscar:"),e.qZA(),e._UZ(37,"input",23),e.qZA()()(),e.TgZ(38,"div",24)(39,"table",25)(40,"thead")(41,"tr",26)(42,"th",27),e.NdJ("click",function(){return t.ordenar("numeroExpediente")}),e._uU(43," # Expediente"),e._UZ(44,"i",28)(45,"i",29),e.qZA(),e.TgZ(46,"th",27),e.NdJ("click",function(){return t.ordenar("fecha")}),e._uU(47," Fecha de Creaci\xf3n"),e._UZ(48,"i",28)(49,"i",29),e.qZA(),e.TgZ(50,"th",27),e.NdJ("click",function(){return t.ordenar("paciente.nombre")}),e._uU(51," Paciente"),e._UZ(52,"i",28)(53,"i",29),e.qZA(),e.TgZ(54,"th",27),e.NdJ("click",function(){return t.ordenar("estado")}),e._uU(55," Estado"),e._UZ(56,"i",28)(57,"i",29),e.qZA(),e.TgZ(58,"th",30),e._uU(59,"Acciones"),e.qZA()()(),e.TgZ(60,"tbody"),e.YNc(61,z,2,1,"ng-container",31),e.YNc(62,S,3,0,"ng-template",null,32,e.W1O),e.qZA()()(),e.TgZ(64,"div",33)(65,"div")(66,"p",34),e._uU(67),e.qZA()(),e.TgZ(68,"ngb-pagination",35),e.NdJ("pageChange",function(o){return t.page=o})("pageChange",function(){return t.refresh()}),e.qZA()()(),e.YNc(69,L,60,6,"ng-template",null,36,e.W1O)),2&i){const n=e.MAs(63);let o,c;e.xp6(14),e.Q6J("ngIf",t.listar.length>0),e.xp6(1),e.Q6J("formGroup",t.form),e.xp6(6),e.Q6J("ngClass",e.WLB(25,M,t.seGuardo&&(null==(o=t.form.get("year"))?null:o.errors),t.seGuardo&&(null==(o=t.form.get("year"))?null:o.valid))),e.xp6(1),e.Q6J("ngIf",null==(c=t.form.get("year"))?null:c.errors),e.xp6(8),e.Q6J("items",t.pageList)("ngModel",t.size)("clearable",!1),e.xp6(3),e.Q6J("formGroup",t.buscar),e.xp6(11),e.Q6J("ngClass",e.VKq(28,g,"numeroExpediente,asc"!==t.sort||!t.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(30,g,"numeroExpediente,desc"!==t.sort||t.cambioOrden)),e.xp6(3),e.Q6J("ngClass",e.VKq(32,g,"fecha,asc"!==t.sort||!t.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(34,g,"fecha,desc"!==t.sort||t.cambioOrden)),e.xp6(3),e.Q6J("ngClass",e.VKq(36,g,"paciente.nombre,asc"!==t.sort||!t.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(38,g,"paciente.nombre,desc"!==t.sort||t.cambioOrden)),e.xp6(3),e.Q6J("ngClass",e.VKq(40,g,"estado,desc"!==t.sort||t.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(42,g,"estado,asc"!==t.sort||!t.cambioOrden)),e.xp6(4),e.Q6J("ngIf",t.listar.length>0)("ngIfElse",n),e.xp6(6),e.hij("Total de resgistros: ",t.listarTotal,""),e.xp6(1),e.Q6J("collectionSize",t.listarTotal)("page",t.page)("pageSize",t.size)("maxSize",t.maxSize)("rotate",!0)("boundaryLinks",!0)}},dependencies:[m.mk,m.sg,m.O5,b.yS,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.qQ,s.On,s.sg,s.u,_.N9,h.w9]}),r})();var A=l(8484);function G(r,a){if(1&r){const i=e.EpF();e.TgZ(0,"button",37),e.NdJ("click",function(){e.CHM(i);const n=e.oxw();return e.KtG(n.purgar())}),e._UZ(1,"i",38),e.qZA()}}function P(r,a){1&r&&(e.TgZ(0,"div"),e._uU(1,"El a\xf1o es requerido"),e.qZA())}function K(r,a){1&r&&(e.TgZ(0,"div"),e._uU(1,"El a\xf1o no es v\xe1lido"),e.qZA())}function B(r,a){if(1&r&&(e.TgZ(0,"div",39),e.YNc(1,P,2,0,"div",40),e.YNc(2,K,2,0,"div",40),e.qZA()),2&r){const i=e.oxw();let t,n;e.xp6(1),e.Q6J("ngIf",null==(t=i.form.get("year"))||null==t.errors?null:t.errors.required),e.xp6(1),e.Q6J("ngIf",null==(n=i.form.get("year"))||null==n.errors?null:n.errors.min)}}function $(r,a){1&r&&(e.TgZ(0,"span",49),e._uU(1,"Entregado"),e.qZA())}function j(r,a){1&r&&(e.TgZ(0,"span",50),e._uU(1,"Pendiente"),e.qZA())}function H(r,a){1&r&&(e.TgZ(0,"span",51),e._uU(1,"Activo"),e.qZA())}function W(r,a){1&r&&(e.TgZ(0,"span",52),e._uU(1,"Inactivo"),e.qZA())}function R(r,a){if(1&r){const i=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e.YNc(8,$,2,0,"span",42),e.YNc(9,j,2,0,"span",43),e.qZA(),e.TgZ(10,"td"),e.YNc(11,H,2,0,"span",44),e.YNc(12,W,2,0,"span",45),e.qZA(),e.TgZ(13,"td",46)(14,"button",47),e.NdJ("click",function(){const o=e.CHM(i).$implicit,c=e.oxw(2),f=e.MAs(74);return e.KtG(c.openLgView(f,o))}),e._UZ(15,"i",48),e.qZA()()()}if(2&r){const i=a.$implicit,t=e.oxw(2);e.xp6(2),e.Oqu(i.numeroExpediente),e.xp6(2),e.Oqu(t.formatDate(i.fecha).format("LL")),e.xp6(2),e.Oqu(i.paciente.nombre+" "+i.paciente.apellido),e.xp6(2),e.Q6J("ngIf",i.certificado),e.xp6(1),e.Q6J("ngIf",!i.certificado),e.xp6(2),e.Q6J("ngIf",i.estado),e.xp6(1),e.Q6J("ngIf",!i.estado)}}function X(r,a){if(1&r&&(e.ynx(0),e.YNc(1,R,16,7,"tr",41),e.BQk()),2&r){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.listar)}}function ee(r,a){1&r&&(e.TgZ(0,"tr")(1,"td",53),e._uU(2,"No existen registros disponibles"),e.qZA()())}function te(r,a){if(1&r){const i=e.EpF();e.TgZ(0,"div",54)(1,"h4",55),e._uU(2,"Ver detalles del nuevo ingreso"),e.qZA(),e.TgZ(3,"button",56),e.NdJ("click",function(){const o=e.CHM(i).$implicit;return e.KtG(o.dismiss("Cross click"))}),e.qZA()(),e.TgZ(4,"div",57)(5,"div",0)(6,"div",58)(7,"div",59)(8,"div",60)(9,"label",61),e._uU(10,"N\xfamero de Expediente"),e.qZA(),e.TgZ(11,"p"),e._uU(12),e.qZA()()(),e.TgZ(13,"div",59)(14,"div",60)(15,"label",61),e._uU(16,"Fecha de creaci\xf3n"),e.qZA(),e.TgZ(17,"p"),e._uU(18),e.qZA()()()(),e.TgZ(19,"div",58)(20,"div",59)(21,"div",60)(22,"label",61),e._uU(23,"Paciente"),e.qZA(),e.TgZ(24,"p"),e._uU(25),e.qZA()()(),e.TgZ(26,"div",59)(27,"div",60)(28,"label",61),e._uU(29,"Certificado"),e.qZA(),e.TgZ(30,"p"),e._uU(31),e.qZA()()()(),e.TgZ(32,"div",58)(33,"div",59)(34,"div",60)(35,"label",61),e._uU(36,"Estado"),e.qZA(),e.TgZ(37,"p"),e._uU(38),e.qZA()()(),e.TgZ(39,"div",59),e._UZ(40,"div",60),e.qZA()()()(),e.TgZ(41,"div",62)(42,"button",63),e.NdJ("click",function(){const o=e.CHM(i).$implicit;return e.KtG(o.close("Close click"))}),e._uU(43,"Cerrar"),e.qZA()()}if(2&r){const i=e.oxw();e.xp6(12),e.Oqu(i.certificado.numeroExpediente),e.xp6(6),e.Oqu(i.formatDate(i.certificado.fecha).format("LL")),e.xp6(7),e.hij(" ",i.certificado.paciente.nombre+" "+i.certificado.paciente.apellido," "),e.xp6(6),e.hij(" ",i.certificado.certificado?"Entregado":"Pendiente"," "),e.xp6(7),e.Oqu(i.certificado.estado?"Activo":"Inactivo")}}const ie=function(r,a){return{"is-invalid":r,"is-valid":a}},d=function(r){return{"d-none":r}};let re=(()=>{class r{constructor(i,t,n,o){this.service=i,this.modalService=t,this.fb=n,this.config=o,this.pageList=u.Hj,this.maxSize=u.$,this.page=u.Md,this.size=u.dp,this.seGuardo=!1,this.cambioOrden=!0,this.mostrarEstado=!1,this.estadoActual="Activo",this.sort="numeroExpediente,asc",this.config.notFoundText="No se encontraron resultados",this.buscar=this.fb.group({filter:["",[]]}),this.form=this.fb.group({year:["",[s.kI.required,s.kI.min(0)]]}),this.valorInicial()}ngOnInit(){this.buscar.get("filter")?.valueChanges.pipe((0,C.b)(500),(0,x.x)()).subscribe(i=>{this.page=0,this.service.listarParametrosCertificado(this.size,this.page,this.sort,this.year,i)}),this.service.listarParametrosCertificado()}get listar(){return this.service.certificadoList?this.service.certificadoList.content:[]}get listarTotal(){return this.service.certificadoList?this.service.certificadoList.totalElements:0}get year(){return this.form.get("year")?this.form.get("year")?.value:""}get filter(){return this.buscar.get("filter")?this.buscar.get("filter")?.value:""}openLgView(i,t){this.certificado=t,this.modalService.open(i,{size:"lg"})}ordenar(i){this.cambioOrden=!this.sort.includes(i)||!this.cambioOrden,this.page=0,this.sort=this.cambioOrden?i+",asc":i+",desc",this.service.listarParametrosCertificado(this.size,this.page,this.sort,this.year,this.filter)}refreshSize(){this.page=0,this.service.listarParametrosCertificado(this.size,this.page,this.sort,this.year,this.filter)}get formatDate(){return Z.Z}maxYear(){return this.formatDate().year()-5}refresh(){this.service.listarParametrosCertificado(this.size,this.page-1,this.sort,this.year,this.filter)}purgar(){p().fire({title:"\xbfConfirmar inhabilitaci\xf3n de registros?",text:"Esta acci\xf3n marcar\xe1 los registros como inhabilitados, pero no los eliminar\xe1 definitivamente.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, inhabilitar",cancelButtonText:"Cancelar"}).then(i=>{if(i.isConfirmed){let t=this.listarTotal;this.service.purgarCertificado(this.year).subscribe({next:n=>{n.length>0&&(this.page=0,this.service.listarParametrosCertificado(this.size,this.page,this.sort,this.year,this.filter),this.seGuardo=!1)}}),p().fire("Inhabilitaci\xf3n Exitosa",`Se han inhabilitado ${t} registros de expediente.`,"success")}})}enviar(){if(this.seGuardo=!0,this.form.valid)return this.year>this.maxYear()?(p().fire({position:"center",title:"Error en la selecci\xf3n de a\xf1o",text:"Por favor, selecciona un a\xf1o con una antig\xfcedad de al menos 5 a\xf1os.",icon:"warning"}),this.seGuardo=!1,void this.valorInicial()):(p().fire({position:"center",title:"\xa1\xc9xito!",text:"Los datos se han consultado correctamente.",icon:"success"}),this.page=0,this.service.listarParametrosCertificado(this.size,this.page,this.sort,this.year,this.filter),void(this.seGuardo=!1));p().fire({position:"center",title:"Datos incompletos",text:"Por favor, revisa los campos marcados.",icon:"warning"})}valorInicial(){this.form.patchValue({year:this.maxYear()})}}return r.\u0275fac=function(i){return new(i||r)(e.Y36(q),e.Y36(_.FF),e.Y36(s.qu),e.Y36(h.$q))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-depurar-certificado"]],decls:75,vars:50,consts:[[1,"container-fluid"],[1,"header__page","d-flex","justify-content-end","mb-3"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink",""],["aria-current","page",1,"breadcrumb-item","active"],[1,"d-flex","flex-column","gap-2","flex-lg-row","justify-content-between","mb-3"],[1,"fs-3"],["type","button","class","btn btn-danger",3,"click",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"d-flex","flex-column","gap-2","flex-lg-row","align-items-center"],["for","year",1,"form-label"],["type","number","formControlName","year","id","year","min","0",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","submit",1,"btn","btn-primary"],[1,"bi","bi-search"],[1,"d-flex","align-items-center","mb-3"],["for","pageSize",1,"col-form-label","me-2"],["id","pageSize","bindLabel","value","bindValue","value",3,"items","ngModel","clearable","ngModelChange"],["for","pageSize",1,"col-form-label","ms-2"],[3,"formGroup"],["for","filter",1,"col-form-label","me-2"],["id","filter","type","text","formControlName","filter",1,"form-control"],[1,"table-responsive","mb-3"],[1,"table","align-middle"],[1,"border-dark"],["scope","col",3,"click"],[1,"bi","bi-caret-up-fill",3,"ngClass"],[1,"bi","bi-caret-down-fill",3,"ngClass"],["scope","col"],[4,"ngIf","ngIfElse"],["noRecords",""],[1,"d-flex","flex-column","gap-2","flex-lg-row","justify-content-between"],[1,"text-black"],[3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"],["contentView",""],["type","button",1,"btn","btn-danger",3,"click"],[1,"bi","bi-x-lg"],[1,"invalid-feedback"],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","badge bg-primary",4,"ngIf"],["class","badge bg-warning text-black",4,"ngIf"],["class","badge bg-success",4,"ngIf"],["class","badge bg-danger",4,"ngIf"],[1,"d-flex","flex-row"],["type","button",1,"btn","btn-outline-secondary","me-2",3,"click"],[1,"bi","bi-eye"],[1,"badge","bg-primary"],[1,"badge","bg-warning","text-black"],[1,"badge","bg-success"],[1,"badge","bg-danger"],["colspan","6",1,"text-center"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"row"],[1,"col-12","col-lg-6"],[1,"mb-3"],[1,"form-label","fw-bold"],[1,"modal-footer"],["type","button",1,"btn","btn-light",3,"click"]],template:function(i,t){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"nav",2)(3,"ol",3)(4,"li",4)(5,"a",5),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"li",6),e._uU(8,"Depurar antiguos ingresos"),e.qZA()()()(),e.TgZ(9,"div",7)(10,"div")(11,"h1",8),e._uU(12,"Depurar antiguos ingresos"),e.qZA()(),e.TgZ(13,"div"),e.YNc(14,G,2,0,"button",9),e.qZA()(),e.TgZ(15,"form",10),e.NdJ("ngSubmit",function(){return t.enviar()}),e.TgZ(16,"div",7)(17,"div",11)(18,"div")(19,"label",12),e._uU(20,"A\xf1o"),e.qZA(),e._UZ(21,"input",13),e.YNc(22,B,3,2,"div",14),e.qZA()(),e.TgZ(23,"div",11)(24,"button",15),e._UZ(25,"i",16),e.qZA()()()(),e.TgZ(26,"div",7)(27,"div",17)(28,"label",18),e._uU(29,"Mostrar:"),e.qZA(),e.TgZ(30,"ng-select",19),e.NdJ("ngModelChange",function(o){return t.size=o})("ngModelChange",function(){return t.refreshSize()}),e.qZA(),e.TgZ(31,"label",20),e._uU(32,"registros"),e.qZA()(),e.TgZ(33,"form",21)(34,"div",17)(35,"label",22),e._uU(36,"Buscar:"),e.qZA(),e._UZ(37,"input",23),e.qZA()()(),e.TgZ(38,"div",24)(39,"table",25)(40,"thead")(41,"tr",26)(42,"th",27),e.NdJ("click",function(){return t.ordenar("numeroExpediente")}),e._uU(43," # Expediente"),e._UZ(44,"i",28)(45,"i",29),e.qZA(),e.TgZ(46,"th",27),e.NdJ("click",function(){return t.ordenar("fecha")}),e._uU(47," Fecha de Creaci\xf3n"),e._UZ(48,"i",28)(49,"i",29),e.qZA(),e.TgZ(50,"th",27),e.NdJ("click",function(){return t.ordenar("paciente.nombre")}),e._uU(51," Paciente"),e._UZ(52,"i",28)(53,"i",29),e.qZA(),e.TgZ(54,"th",27),e.NdJ("click",function(){return t.ordenar("certificado")}),e._uU(55," Certificado"),e._UZ(56,"i",28)(57,"i",29),e.qZA(),e.TgZ(58,"th",27),e.NdJ("click",function(){return t.ordenar("estado")}),e._uU(59," Estado"),e._UZ(60,"i",28)(61,"i",29),e.qZA(),e.TgZ(62,"th",30),e._uU(63,"Acciones"),e.qZA()()(),e.TgZ(64,"tbody"),e.YNc(65,X,2,1,"ng-container",31),e.YNc(66,ee,3,0,"ng-template",null,32,e.W1O),e.qZA()()(),e.TgZ(68,"div",33)(69,"div")(70,"p",34),e._uU(71),e.qZA()(),e.TgZ(72,"ngb-pagination",35),e.NdJ("pageChange",function(o){return t.page=o})("pageChange",function(){return t.refresh()}),e.qZA()()(),e.YNc(73,te,44,5,"ng-template",null,36,e.W1O)),2&i){const n=e.MAs(67);let o,c;e.xp6(14),e.Q6J("ngIf",t.listar.length>0),e.xp6(1),e.Q6J("formGroup",t.form),e.xp6(6),e.Q6J("ngClass",e.WLB(27,ie,t.seGuardo&&(null==(o=t.form.get("year"))?null:o.errors),t.seGuardo&&(null==(o=t.form.get("year"))?null:o.valid))),e.xp6(1),e.Q6J("ngIf",null==(c=t.form.get("year"))?null:c.errors),e.xp6(8),e.Q6J("items",t.pageList)("ngModel",t.size)("clearable",!1),e.xp6(3),e.Q6J("formGroup",t.buscar),e.xp6(11),e.Q6J("ngClass",e.VKq(30,d,"numeroExpediente,asc"!==t.sort||!t.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(32,d,"numeroExpediente,desc"!==t.sort||t.cambioOrden)),e.xp6(3),e.Q6J("ngClass",e.VKq(34,d,"fecha,asc"!==t.sort||!t.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(36,d,"fecha,desc"!==t.sort||t.cambioOrden)),e.xp6(3),e.Q6J("ngClass",e.VKq(38,d,"paciente.nombre,asc"!==t.sort||!t.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(40,d,"paciente.nombre,desc"!==t.sort||t.cambioOrden)),e.xp6(3),e.Q6J("ngClass",e.VKq(42,d,"certificado,desc"!==t.sort||t.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(44,d,"certificado,asc"!==t.sort||!t.cambioOrden)),e.xp6(3),e.Q6J("ngClass",e.VKq(46,d,"estado,desc"!==t.sort||t.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(48,d,"estado,asc"!==t.sort||!t.cambioOrden)),e.xp6(4),e.Q6J("ngIf",t.listar.length>0)("ngIfElse",n),e.xp6(6),e.hij("Total de resgistros: ",t.listarTotal,""),e.xp6(1),e.Q6J("collectionSize",t.listarTotal)("page",t.page)("pageSize",t.size)("maxSize",t.maxSize)("rotate",!0)("boundaryLinks",!0)}},dependencies:[m.mk,m.sg,m.O5,b.yS,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.qQ,s.On,s.sg,s.u,_.N9,h.w9]}),r})();var y=l(2466);const ne=[{path:A.te,title:"Depurar antiguos ingresos",component:V,canActivate:[y.i]},{path:A.mN,title:"Depurar nuevos ingresos",component:re,canActivate:[y.i]}];let ae=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[b.Bz.forChild(ne),b.Bz]}),r})(),oe=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.ez,ae,s.u5,s.UX,_.jF,_.ZS,h.A0]}),r})()}}]);