"use strict";(self.webpackChunkclinica_fmp_frontend=self.webpackChunkclinica_fmp_frontend||[]).push([[51],{7926:(h,_,l)=>{l.d(_,{$:()=>g,Hj:()=>d,Md:()=>m,dp:()=>s});const d=[{value:2},{value:4},{value:6},{value:8},{value:10}],g=3,s=2,m=0},1051:(h,_,l)=>{l.r(_),l.d(_,{CarreraModule:()=>te});var d=l(6895),g=l(3599),s=l(433),m=l(7926),v=l(5930),b=l(8372),x=l(1884),Z=l(5226),u=l.n(Z),e=l(1571),T=l(2340),A=l(529);let q=(()=>{class r{constructor(t){this.http=t,this.facultadSeleccionado="",this.api=`${T.N.api}/carrera`}listarParametros(t=2,i=0,n="id,asc",a=""){this.http.get(`${this.api}/ListarCarreras`,{params:{page:i,size:t,sort:n,filtro:a,facultad:this.facultadSeleccionado}}).subscribe({next:c=>{this.carreraList=c}})}agregar(t){return this.http.post(`${this.api}`,t)}eliminar(t){return this.http.delete(`${this.api}/${t}`)}editar(t,i){return this.http.put(`${this.api}/${t}`,i)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(A.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var f=l(9061),S=l(5053),F=l(1622),C=l(723);function J(r,o){if(1&r&&(e.TgZ(0,"ng-option",37),e._uU(1),e.qZA()),2&r){const t=o.$implicit;e.s9C("value",t.id),e.xp6(1),e.Oqu(t.nombre)}}function N(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"La Facultad es requerida"),e.qZA())}function U(r,o){if(1&r&&(e.TgZ(0,"div",38),e.YNc(1,N,2,0,"div",39),e.qZA()),2&r){const t=e.oxw();let i;e.xp6(1),e.Q6J("ngIf",null==(i=t.form.get("facultad"))||null==i.errors?null:i.errors.required)}}function M(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"div",40)(1,"button",41),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(),a=e.MAs(54);return e.KtG(n.openLg(a))}),e._UZ(2,"i",42),e.qZA()()}}function E(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"button",47)(1,"i",48),e.NdJ("click",function(){e.CHM(t);const n=e.oxw().$implicit,a=e.oxw(2),c=e.MAs(56);return e.KtG(a.openLgEditar(c,n))}),e.qZA()()}if(2&r){const t=e.oxw().first;e.Q6J("id",t?"editar":null)}}function G(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"button",49),e.NdJ("click",function(){e.CHM(t);const n=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.eliminar(n))}),e._UZ(1,"i",50),e.qZA()}if(2&r){const t=e.oxw().first;e.Q6J("id",t?"eliminar":null)}}function k(r,o){if(1&r&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",44),e.YNc(4,E,2,1,"button",45),e.YNc(5,G,2,1,"button",46),e.qZA()()),2&r){const t=o.$implicit,i=e.oxw(2);e.xp6(2),e.Oqu(t.nombre),e.xp6(2),e.Q6J("ngIf",i.isAdmin),e.xp6(1),e.Q6J("ngIf",i.isAdmin)}}function I(r,o){if(1&r&&(e.ynx(0),e.YNc(1,k,6,3,"tr",43),e.BQk()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.listarCarrera)}}function Q(r,o){1&r&&(e.TgZ(0,"tr")(1,"td",51),e._uU(2,"No existen registros disponibles"),e.qZA()())}function y(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"nombre es requerida"),e.qZA())}function z(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"nombre no cumple con el tama\xf1o minimo de 10"),e.qZA())}function L(r,o){if(1&r&&(e.TgZ(0,"div",38),e.YNc(1,y,2,0,"div",39),e.YNc(2,z,2,0,"div",39),e.qZA()),2&r){const t=e.oxw(2);let i,n;e.xp6(1),e.Q6J("ngIf",null==(i=t.form.get("nombre"))||null==i.errors?null:i.errors.required),e.xp6(1),e.Q6J("ngIf",null==(n=t.form.get("nombre"))||null==n.errors?null:n.errors.minlength)}}function Y(r,o){if(1&r&&(e.TgZ(0,"ng-option",37),e._uU(1),e.qZA()),2&r){const t=o.$implicit;e.s9C("value",t.id),e.xp6(1),e.Oqu(t.nombre)}}function R(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"La Facultad es requerida"),e.qZA())}function w(r,o){if(1&r&&(e.TgZ(0,"div",38),e.YNc(1,R,2,0,"div",39),e.qZA()),2&r){const t=e.oxw(2);let i;e.xp6(1),e.Q6J("ngIf",null==(i=t.form.get("idFacultad"))||null==i.errors?null:i.errors.required)}}const p=function(r,o){return{"is-invalid":r,"is-valid":o}};function B(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"div",52)(1,"h4",53),e._uU(2,"Nueva Carrera"),e.qZA(),e.TgZ(3,"button",54),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.KtG(a.dismiss("Cross click"))}),e.qZA()(),e.TgZ(4,"form",55),e.NdJ("ngSubmit",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.guardar())}),e.TgZ(5,"div",56)(6,"div",57)(7,"div",58)(8,"div",59)(9,"div",60)(10,"label",61),e._uU(11,"Nombre"),e.qZA(),e.TgZ(12,"span",62),e._uU(13," *"),e.qZA(),e._UZ(14,"input",63),e.YNc(15,L,3,2,"div",17),e.qZA()(),e.TgZ(16,"div",59)(17,"div",60)(18,"label",64),e._uU(19,"Facultad"),e.qZA(),e.TgZ(20,"span",62),e._uU(21," *"),e.qZA(),e.TgZ(22,"ng-select",65),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.facultadSeleccionado=n)}),e.YNc(23,Y,2,2,"ng-option",16),e.qZA(),e.YNc(24,w,2,1,"div",17),e.qZA()()()()(),e.TgZ(25,"div",66)(26,"button",67),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.KtG(a.close("Close click"))}),e._uU(27,"Cerrar"),e.qZA(),e.TgZ(28,"button",68),e._uU(29,"Guardar"),e.qZA()()()}if(2&r){const t=e.oxw();let i,n,a,c;e.xp6(4),e.Q6J("formGroup",t.form),e.xp6(10),e.Q6J("ngClass",e.WLB(7,p,t.seGuardo&&(null==(i=t.form.get("nombre"))?null:i.errors),t.seGuardo&&(null==(i=t.form.get("nombre"))?null:i.valid))),e.xp6(1),e.Q6J("ngIf",null==(n=t.form.get("nombre"))?null:n.errors),e.xp6(7),e.Q6J("ngModel",t.facultadSeleccionado)("ngClass",e.WLB(10,p,t.seGuardo&&(null==(a=t.form.get("idFacultad"))?null:a.errors),t.seGuardo&&(null==(a=t.form.get("idFacultad"))?null:a.valid))),e.xp6(1),e.Q6J("ngForOf",t.listarFacultad),e.xp6(1),e.Q6J("ngIf",null==(c=t.form.get("idFacultad"))?null:c.errors)}}function $(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"nombre es requerida"),e.qZA())}function j(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"nombre no cumple con el tama\xf1o minimo de 10"),e.qZA())}function O(r,o){if(1&r&&(e.TgZ(0,"div",38),e.YNc(1,$,2,0,"div",39),e.YNc(2,j,2,0,"div",39),e.qZA()),2&r){const t=e.oxw(2);let i,n;e.xp6(1),e.Q6J("ngIf",null==(i=t.form.get("nombre"))||null==i.errors?null:i.errors.required),e.xp6(1),e.Q6J("ngIf",null==(n=t.form.get("nombre"))||null==n.errors?null:n.errors.minlength)}}function P(r,o){if(1&r&&(e.TgZ(0,"ng-option",37),e._uU(1),e.qZA()),2&r){const t=o.$implicit;e.s9C("value",t.id),e.xp6(1),e.Oqu(t.nombre)}}function H(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"La Facultad es requerida"),e.qZA())}function K(r,o){if(1&r&&(e.TgZ(0,"div",38),e.YNc(1,H,2,0,"div",39),e.qZA()),2&r){const t=e.oxw(2);let i;e.xp6(1),e.Q6J("ngIf",null==(i=t.form.get("idFacultad"))||null==i.errors?null:i.errors.required)}}function W(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"div",52)(1,"h4",53),e._uU(2,"Editar Carrera"),e.qZA(),e.TgZ(3,"button",54),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.KtG(a.dismiss("Cross click"))}),e.qZA()(),e.TgZ(4,"form",55),e.NdJ("ngSubmit",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.editar())}),e.TgZ(5,"div",56)(6,"div",57)(7,"div",58)(8,"div",59)(9,"div",60)(10,"label",61),e._uU(11,"Nombre"),e.qZA(),e.TgZ(12,"span",62),e._uU(13," *"),e.qZA(),e._UZ(14,"input",63),e.YNc(15,O,3,2,"div",17),e.qZA()(),e.TgZ(16,"div",59)(17,"div",60)(18,"label",64),e._uU(19,"Facultad"),e.qZA(),e.TgZ(20,"span",62),e._uU(21," *"),e.qZA(),e.TgZ(22,"ng-select",69),e.YNc(23,P,2,2,"ng-option",16),e.qZA(),e.YNc(24,K,2,1,"div",17),e.qZA()()()()(),e.TgZ(25,"div",66)(26,"button",67),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.KtG(a.close("Close click"))}),e._uU(27,"Cerrar"),e.qZA(),e.TgZ(28,"button",68),e._uU(29,"Guardar"),e.qZA()()()}if(2&r){const t=e.oxw();let i,n,a,c;e.xp6(4),e.Q6J("formGroup",t.form),e.xp6(10),e.Q6J("ngClass",e.WLB(6,p,t.seGuardo&&(null==(i=t.form.get("nombre"))?null:i.errors),t.seGuardo&&(null==(i=t.form.get("nombre"))?null:i.valid))),e.xp6(1),e.Q6J("ngIf",null==(n=t.form.get("nombre"))?null:n.errors),e.xp6(7),e.Q6J("ngClass",e.WLB(9,p,t.seGuardo&&(null==(a=t.form.get("idFacultad"))?null:a.errors),t.seGuardo&&(null==(a=t.form.get("idFacultad"))?null:a.valid))),e.xp6(1),e.Q6J("ngForOf",t.listarFacultad),e.xp6(1),e.Q6J("ngIf",null==(c=t.form.get("idFacultad"))?null:c.errors)}}const X=[{path:"",component:(()=>{class r{constructor(t,i,n,a,c){this.carreraService=t,this.modalService=i,this.fb=n,this.serviceFacultad=a,this.tokenService=c,this.seGuardo=!1,this.facultadSeleccionado="20231001210232450",this.pageList=m.Hj,this.maxSize=m.$,this.page=m.Md,this.size=m.dp,this.sort="id,asc",this.isVer=!1,this.isCrear=!1,this.isEditar=!1,this.isEliminar=!1,this.isAdmin=!1,this.buscar=this.fb.group({filter:["",[]]}),this.form2=this.fb.group({facultad:["",[s.kI.required]]}),this.form=this.fb.group({nombre:["",[s.kI.required]],idFacultad:["",[s.kI.required]]})}ngOnInit(){this.isAdmin=this.tokenService.isSuperAdmin(),this.isVer=this.tokenService.isPermisos("CARRERA_","VER"),this.isCrear=this.tokenService.isPermisos("CARRERA_","CREAR"),this.isEditar=this.tokenService.isPermisos("CARRERA_","EDITAR"),this.isEliminar=this.tokenService.isPermisos("CARRERA_","ELIMINAR"),this.buscar.get("filter")?.valueChanges.pipe((0,b.b)(100),(0,x.x)()).subscribe(t=>{this.page=0,this.carreraService.listarParametros(this.size,this.page,this.sort,t)}),this.serviceFacultad.listar()}get listarCarrera(){return this.carreraService.carreraList?this.carreraService.carreraList.content:[]}get listarTotal(){return this.carreraService.carreraList?this.carreraService.carreraList.totalElements:0}get filter(){return this.buscar.get("filter")?this.buscar.get("filter")?.value:""}get facultadBy(){return this.form2.get("facultad")?this.form2.get("facultad")?.value:""}get listarFacultad(){return this.serviceFacultad.facultad}onCarreraChange(){this.carreraService.facultadSeleccionado=this.form2.get("facultad")?.value,this.carreraService.listarParametros(this.size,this.page-1,this.sort,this.filter)}refreshSize(){this.page=0,this.carreraService.listarParametros(this.size,this.page,this.sort,this.filter)}refresh(){this.carreraService.listarParametros(this.size,this.page-1,this.sort,this.filter)}openLg(t){this.seGuardo=!1,this.form.reset(),this.modalService.open(t,{size:"lg"})}openLgEditar(t,i){this.carrera=i,this.form.patchValue({nombre:this.carrera.nombre,idFacultad:this.carrera.facultad.id}),this.modalService.open(t,{size:"lg"})}guardar(){this.seGuardo=!0,this.form.valid?this.carreraService.agregar(this.form.value).subscribe({next:()=>{u().fire({position:"center",title:"\xa1\xc9xito!",text:"Los datos se han guardado correctamente.",icon:"success"}),this.carreraService.listarParametros(this.size,this.page-1,this.sort,this.filter),this.seGuardo=!1,this.modalService.dismissAll()},error:t=>{u().fire({position:"center",title:"Error",text:t.error.mensaje,icon:"error"})}}):u().fire({position:"center",title:"Datos incompletos",text:"Por favor, revisa los campos marcados.",icon:"warning"})}eliminar(t){u().fire({title:"\xbfConfirmar eliminaci\xf3n?",text:"Esta acci\xf3n no se puede deshacer.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminar",cancelButtonText:"Cancelar"}).then(i=>{i.isConfirmed&&this.carreraService.eliminar(t.id).subscribe({next:n=>{u().fire("Eliminado","El registro ha sido eliminado exitosamente.","success"),n&&this.carreraService.listarParametros(this.size,this.page-1,this.sort,this.filter)},error:n=>{u().fire({position:"center",title:"Error",text:n.error.mensaje,icon:"error"})}})})}editar(){this.seGuardo=!0,this.form.valid?this.carreraService.editar(this.carrera.id,this.form.value).subscribe({next:()=>{u().fire({position:"center",title:"\xa1\xc9xito!",text:"Los datos se han guardado correctamente.",icon:"success"}),this.carreraService.listarParametros(this.size,this.page-1,this.sort,this.filter),this.seGuardo=!1,this.modalService.dismissAll()},error:t=>{u().fire({position:"center",title:"Error",text:t.error.mensaje,icon:"error"})}}):u().fire({position:"center",title:"Datos incompletos",text:"Por favor, revisa los campos marcados.",icon:"warning"})}iniciarAyuda(){const t=[(this.isCrear||this.isAdmin)&&{element:"#nuevoRegistro",popover:{title:"Crear un nuevo registro",description:"Aqu\xed puedes crear un nuevo registro de una carrera",side:"left",align:"start"}},{element:"#facultad",popover:{title:"Seleccionar la facultad.",description:"Aqu\xed puedes filtrar las carreras de la facultad que necesita que se muestre en la tabla",side:"right",align:"start"}},{element:"#cantidad",popover:{title:"Cantidad de registros a mostrar",description:"Aqu\xed puedes establecer la cantidad de informaci\xf3n que se muestra en la tabla",side:"right",align:"start"}},{element:"#buscar",popover:{title:"Filtrar registros",description:"Aqu\xed puedes filtrar la informaci\xf3n",side:"top",align:"start"}},(this.isEditar||this.isAdmin)&&this.listarCarrera.length>0&&{element:"#editar",popover:{title:"Editar un registro",description:"Aqu\xed puedes editar un registro",side:"left",align:"start"}},(this.isEliminar||this.isAdmin)&&this.listarCarrera.length>0&&{element:"#eliminar",popover:{title:"Eliminar un registro",description:"Aqu\xed puedes eliminar un registro",side:"left",align:"start"}},{element:"#paginacion",popover:{title:"Seleccionar p\xe1gina de registro",description:"Aqu\xed puedes seleccionar la p\xe1gina de la informaci\xf3n que deseas mostrar",side:"left",align:"end"}}].filter(Boolean).map(n=>n);(0,v.v)({showProgress:!0,nextBtnText:"Siguiente",prevBtnText:"Anterior",doneBtnText:"Finalizar",progressText:"{{current}} de {{total}}",steps:t}).drive()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(q),e.Y36(f.FF),e.Y36(s.qu),e.Y36(S.U),e.Y36(F.B))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-carrera"]],decls:57,vars:22,consts:[[1,"container-full"],[1,"header__page","d-flex","flex-column","flex-md-row"],[1,"d-flex","align-items-center"],[1,"fs-2"],[1,"btn","text-primary","fs-5",3,"click"],[1,"bi","bi-info-circle-fill"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/"],["aria-current","page",1,"breadcrumb-item","active"],[1,"d-flex","flex-column","gap-2","flex-lg-row","justify-content-between","mb-3"],[1,"col-12","col-lg-4"],[3,"formGroup"],["for","genero",1,"form-label"],["formControlName","facultad","id","facultad",3,"ngModel","ngClass","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback",4,"ngIf"],["class","d-flex gap-2 align-items-center justify-content-center",4,"ngIf"],["id","cantidad",1,"d-flex","align-items-center","mb-3"],["for","pageSize",1,"col-form-label","me-2"],["id","pageSize","bindLabel","value","bindValue","value",3,"items","ngModel","clearable","ngModelChange"],["for","pageSize",1,"col-form-label","ms-2"],["id","buscar",1,"d-flex","align-items-center","mb-3"],["for","filter",1,"col-form-label","me-2"],["id","filter","type","text","formControlName","filter",1,"form-control"],[1,"table-responsive","mt-2"],[1,"table"],[1,"border-dark"],["scope","col"],[4,"ngIf","ngIfElse"],["noRecords",""],[1,"d-flex","flex-column","gap-2","flex-lg-row","justify-content-between"],[1,"text-black"],["id","paginacion",3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"],["content",""],["contentEdit",""],[3,"value"],[1,"invalid-feedback"],[4,"ngIf"],[1,"d-flex","gap-2","align-items-center","justify-content-center"],["id","nuevoRegistro",1,"btn","btn-primary",3,"click"],[1,"bi","bi-plus-square"],[4,"ngFor","ngForOf"],[1,"d-flex","gap-1",2,"min-height","40px"],["type","button","class","btn btn-outline-success me-2",3,"id",4,"ngIf"],["type","button","class","btn btn-outline-danger",3,"id","click",4,"ngIf"],["type","button",1,"btn","btn-outline-success","me-2",3,"id"],[1,"bi","bi-pencil",3,"click"],["type","button",1,"btn","btn-outline-danger",3,"id","click"],[1,"bi","bi-x-lg"],["colspan","7",1,"text-center"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"container-fluid"],[1,"row"],[1,"col-12","col-lg-6"],[1,"mb-3"],["for","nombre",1,"form-label"],[1,"text-danger"],["type","text","formControlName","nombre","id","nombre","autocomplete","off","placeholder","Ingrese el nombre",1,"form-control",3,"ngClass"],["for","idFacultad",1,"form-label"],["formControlName","idFacultad","id","idFacultad",3,"ngModel","ngClass","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-light",3,"click"],["type","submit",1,"btn","btn-primary"],["formControlName","idFacultad","id","idFacultad",3,"ngClass"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"Carrera"),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return i.iniciarAyuda()}),e._UZ(6,"i",5),e.qZA()(),e.TgZ(7,"nav",6)(8,"ol",7)(9,"li",8)(10,"a",9),e._uU(11,"Inicio"),e.qZA()(),e.TgZ(12,"li",10),e._uU(13,"Carrera"),e.qZA()()()(),e.TgZ(14,"div",11)(15,"div",12)(16,"form",13)(17,"div")(18,"label",14),e._uU(19,"Facultad"),e.qZA(),e.TgZ(20,"ng-select",15),e.NdJ("ngModelChange",function(a){return i.facultadSeleccionado=a})("ngModelChange",function(){return i.onCarreraChange()}),e.YNc(21,J,2,2,"ng-option",16),e.qZA(),e.YNc(22,U,2,1,"div",17),e.qZA()()(),e.YNc(23,M,3,0,"div",18),e.qZA(),e.TgZ(24,"div",11)(25,"div",19)(26,"label",20),e._uU(27,"Mostrar:"),e.qZA(),e.TgZ(28,"ng-select",21),e.NdJ("ngModelChange",function(a){return i.size=a})("ngModelChange",function(){return i.refreshSize()}),e.qZA(),e.TgZ(29,"label",22),e._uU(30,"registros"),e.qZA()(),e.TgZ(31,"form",13)(32,"div",23)(33,"label",24),e._uU(34,"Buscar:"),e.qZA(),e._UZ(35,"input",25),e.qZA()()(),e.TgZ(36,"div",26)(37,"table",27)(38,"thead")(39,"tr",28)(40,"th",29),e._uU(41,"Nombre"),e.qZA(),e.TgZ(42,"th",29),e._uU(43,"Acciones"),e.qZA()()(),e.TgZ(44,"tbody"),e.YNc(45,I,2,1,"ng-container",30),e.YNc(46,Q,3,0,"ng-template",null,31,e.W1O),e.qZA()(),e.TgZ(48,"div",32)(49,"div")(50,"p",33),e._uU(51),e.qZA()(),e.TgZ(52,"ngb-pagination",34),e.NdJ("pageChange",function(a){return i.page=a})("pageChange",function(){return i.refresh()}),e.qZA()()()(),e.YNc(53,B,30,13,"ng-template",null,35,e.W1O),e.YNc(55,W,30,12,"ng-template",null,36,e.W1O)),2&t){const n=e.MAs(47);let a,c;e.xp6(16),e.Q6J("formGroup",i.form2),e.xp6(4),e.Q6J("ngModel",i.facultadSeleccionado)("ngClass",e.WLB(19,p,i.seGuardo&&(null==(a=i.form.get("facultad"))?null:a.errors),i.seGuardo&&(null==(a=i.form.get("facultad"))?null:a.valid))),e.xp6(1),e.Q6J("ngForOf",i.listarFacultad),e.xp6(1),e.Q6J("ngIf",null==(c=i.form.get("facultad"))?null:c.errors),e.xp6(1),e.Q6J("ngIf",i.isAdmin),e.xp6(5),e.Q6J("items",i.pageList)("ngModel",i.size)("clearable",!1),e.xp6(3),e.Q6J("formGroup",i.buscar),e.xp6(14),e.Q6J("ngIf",i.listarCarrera.length>0)("ngIfElse",n),e.xp6(6),e.hij("Total de registros: ",i.listarTotal,""),e.xp6(1),e.Q6J("collectionSize",i.listarTotal)("page",i.page)("pageSize",i.size)("maxSize",i.maxSize)("rotate",!0)("boundaryLinks",!0)}},dependencies:[d.mk,d.sg,d.O5,g.yS,s._Y,s.Fj,s.JJ,s.JL,s.On,s.sg,s.u,f.N9,C.w9,C.jq]}),r})(),canActivate:[l(2466).i],data:{expectedAuthorities:["CARRERA"]}}];let ee=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[g.Bz.forChild(X),g.Bz]}),r})(),te=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.ez,ee,s.u5,s.UX,f.jF,f.ZS,C.A0]}),r})()}}]);