"use strict";(self.webpackChunkclinica_fmp_frontend=self.webpackChunkclinica_fmp_frontend||[]).push([[72],{7926:(I,h,u)=>{u.d(h,{$:()=>g,Hj:()=>m,Md:()=>p,dp:()=>a});const m=[{value:2},{value:4},{value:6},{value:8},{value:10}],g=3,a=2,p=0},5072:(I,h,u)=>{u.r(h),u.d(h,{PersonalMedicoModule:()=>Se,options:()=>qe});var m=u(6895),g=u(3599),a=u(433),p=u(7926),f=u(6493),P=u(8372),E=u(1884),J=u(5226),c=u.n(J),N=u(5930),e=u(1571),k=u(2340),Q=u(529);let F=(()=>{class n{constructor(t){this.http=t,this.api=`${k.N.api}/personal-salud`}listarParametros(t=2,o=0,i="nombre,asc",r=""){this.http.get(`${this.api}`,{params:{page:o,size:t,sort:i,filtro:r}}).subscribe({next:s=>{this.personalSaludList=s}})}eliminar(t){return this.http.delete(`${this.api}/${t}`)}editar(t,o){return this.http.put(`${this.api}/${t}`,o)}agregar(t){return this.http.post(`${this.api}`,t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(Q.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var b=u(9061),T=u(723),y=u(1622),A=u(1094);function O(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",36),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(),r=e.MAs(65);return e.KtG(i.openLg(r))}),e._UZ(1,"i",37),e.qZA()}}function Y(n,l){1&n&&(e.TgZ(0,"span",46),e._uU(1,"Activo"),e.qZA())}function L(n,l){1&n&&(e.TgZ(0,"span",47),e._uU(1,"Inactivo"),e.qZA())}function M(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",48),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,r=e.oxw(2),s=e.MAs(65);return e.KtG(r.openLgEditar(s,i))}),e._UZ(1,"i",49),e.qZA()}if(2&n){const t=e.oxw().first;e.Q6J("id",t?"editar":null)}}function z(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",50),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.eliminar(i.id))}),e._UZ(1,"i",51),e.qZA()}if(2&n){const t=e.oxw().first;e.Q6J("id",t?"inhabilitar":null)}}function G(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e.YNc(10,Y,2,0,"span",39),e.YNc(11,L,2,0,"span",40),e.qZA(),e.TgZ(12,"td",41)(13,"button",42),e.NdJ("click",function(){const r=e.CHM(t).$implicit,s=e.oxw(2),_=e.MAs(67);return e.KtG(s.openLgView(_,r))}),e._UZ(14,"i",43),e.qZA(),e.YNc(15,M,2,1,"button",44),e.YNc(16,z,2,1,"button",45),e.qZA()()}if(2&n){const t=l.$implicit,o=l.first,i=e.oxw(2);e.xp6(2),e.Oqu(t.nombre),e.xp6(2),e.Oqu(t.apellido),e.xp6(2),e.Oqu(t.funcion),e.xp6(2),e.Oqu(t.dui),e.xp6(2),e.Q6J("ngIf",t.estado),e.xp6(1),e.Q6J("ngIf",!t.estado),e.xp6(2),e.Q6J("id",o?"detalle":null),e.xp6(2),e.Q6J("ngIf",i.isEditar||i.isAdmin),e.xp6(1),e.Q6J("ngIf",i.isEliminar&&t.estado||i.isAdmin&&t.estado)}}function w(n,l){if(1&n&&(e.ynx(0),e.YNc(1,G,17,9,"tr",38),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.listar)}}function V(n,l){1&n&&(e.TgZ(0,"tr")(1,"td",52),e._uU(2,"No existen registros disponibles"),e.qZA()())}function B(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1,"El nombre es requerido"),e.qZA())}function K(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1," El nombre no cumple con el tama\xf1o m\xednimo de 2 caracteres "),e.qZA())}function D(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1," El nombre no cumple con el tama\xf1o m\xe1ximo de 50 caracteres "),e.qZA())}function R(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1," El nombre solo debe contener letras y espacios "),e.qZA())}function $(n,l){if(1&n&&(e.TgZ(0,"div",79),e.YNc(1,B,2,0,"div",75),e.YNc(2,K,2,0,"div",75),e.YNc(3,D,2,0,"div",75),e.YNc(4,R,2,0,"div",75),e.qZA()),2&n){const t=e.oxw(2);let o,i,r,s;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("nombre"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=t.form.get("nombre"))||null==i.errors?null:i.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(r=t.form.get("nombre"))||null==r.errors?null:r.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==(s=t.form.get("nombre"))||null==s.errors?null:s.errors.pattern)}}function j(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1,"El apellido es requerido"),e.qZA())}function H(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1," El apellido no cumple con el tama\xf1o m\xednimo de 2 caracteres "),e.qZA())}function W(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1," El apellido no cumple con el tama\xf1o m\xe1ximo de 50 caracteres "),e.qZA())}function X(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1," El apellido solo debe contener letras y espacios "),e.qZA())}function ee(n,l){if(1&n&&(e.TgZ(0,"div",79),e.YNc(1,j,2,0,"div",75),e.YNc(2,H,2,0,"div",75),e.YNc(3,W,2,0,"div",75),e.YNc(4,X,2,0,"div",75),e.qZA()),2&n){const t=e.oxw(2);let o,i,r,s;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("apellido"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=t.form.get("apellido"))||null==i.errors?null:i.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(r=t.form.get("apellido"))||null==r.errors?null:r.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==(s=t.form.get("apellido"))||null==s.errors?null:s.errors.pattern)}}function te(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1,"El cargo es requerido"),e.qZA())}function ne(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1," El cargo no cumple con el tama\xf1o m\xednimo de 2 caracteres "),e.qZA())}function oe(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1," El cargo no cumple con el tama\xf1o m\xe1ximo de 150 caracteres "),e.qZA())}function ie(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1,"El cargo solo debe contener letras y espacios"),e.qZA())}function le(n,l){if(1&n&&(e.TgZ(0,"div",79),e.YNc(1,te,2,0,"div",75),e.YNc(2,ne,2,0,"div",75),e.YNc(3,oe,2,0,"div",75),e.YNc(4,ie,2,0,"div",75),e.qZA()),2&n){const t=e.oxw(2);let o,i,r,s;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("cargo"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=t.form.get("cargo"))||null==i.errors?null:i.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(r=t.form.get("cargo"))||null==r.errors?null:r.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==(s=t.form.get("cargo"))||null==s.errors?null:s.errors.pattern)}}function re(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1,"El tel\xe9fono es requerido"),e.qZA())}function ae(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1," El tel\xe9fono no cumple con el tama\xf1o m\xednimo de 9 caracteres "),e.qZA())}function se(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1," El tel\xe9fono no cumple con el tama\xf1o m\xe1ximo de 15 caracteres "),e.qZA())}function ue(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1,"El tel\xe9fono debe iniciar con [2, 6 o 7]"),e.qZA())}function de(n,l){if(1&n&&(e.TgZ(0,"div",79),e.YNc(1,re,2,0,"div",75),e.YNc(2,ae,2,0,"div",75),e.YNc(3,se,2,0,"div",75),e.YNc(4,ue,2,0,"div",75),e.qZA()),2&n){const t=e.oxw(2);let o,i,r,s;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("telefono"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=t.form.get("telefono"))||null==i.errors?null:i.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(r=t.form.get("telefono"))||null==r.errors?null:r.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==(s=t.form.get("telefono"))||null==s.errors?null:s.errors.pattern)}}function ce(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1,"El DUI es requerido"),e.qZA())}function me(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1," El DUI no cumple con el tama\xf1o m\xednimo de 10 caracteres "),e.qZA())}function pe(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1," El DUI no cumple con el tama\xf1o m\xe1ximo de 15 caracteres "),e.qZA())}function _e(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1,"El DUI solo debe contener d\xedgitos"),e.qZA())}function ge(n,l){if(1&n&&(e.TgZ(0,"div",79),e.YNc(1,ce,2,0,"div",75),e.YNc(2,me,2,0,"div",75),e.YNc(3,pe,2,0,"div",75),e.YNc(4,_e,2,0,"div",75),e.qZA()),2&n){const t=e.oxw(2);let o,i,r,s;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("dui"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=t.form.get("dui"))||null==i.errors?null:i.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(r=t.form.get("dui"))||null==r.errors?null:r.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==(s=t.form.get("dui"))||null==s.errors?null:s.errors.pattern)}}function fe(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1,"La funci\xf3n a desempe\xf1ar es requerida"),e.qZA())}function ve(n,l){if(1&n&&(e.TgZ(0,"div",79),e.YNc(1,fe,2,0,"div",75),e.qZA()),2&n){const t=e.oxw(2);let o;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("funcion"))||null==o.errors?null:o.errors.required)}}function he(n,l){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div")(2,"label",80),e._uU(3,"Estado"),e.qZA()(),e.TgZ(4,"div",81)(5,"input",82),e.NdJ("change",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.cambiarEstado())}),e.qZA(),e.TgZ(6,"label",83),e._uU(7),e.qZA()(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(7),e.Oqu(t.estadoActual)}}const v=function(n,l){return{"is-invalid":n,"is-valid":l}};function be(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",53)(1,"h4",54),e._uU(2),e.qZA(),e.TgZ(3,"button",55),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.KtG(r.dismiss("Cross click"))}),e.qZA()(),e.TgZ(4,"form",56),e.NdJ("ngSubmit",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.enviar())}),e.TgZ(5,"div",57)(6,"div",0)(7,"div",58)(8,"div",59)(9,"div",60)(10,"label",61),e._uU(11,"Nombre"),e.qZA(),e.TgZ(12,"span",62),e._uU(13," *"),e.qZA(),e._UZ(14,"input",63),e.YNc(15,$,5,4,"div",64),e.qZA()(),e.TgZ(16,"div",59)(17,"div",60)(18,"label",65),e._uU(19,"Apellido"),e.qZA(),e.TgZ(20,"span",62),e._uU(21," *"),e.qZA(),e._UZ(22,"input",66),e.YNc(23,ee,5,4,"div",64),e.qZA()()(),e.TgZ(24,"div",58)(25,"div",59)(26,"div",60)(27,"label",67),e._uU(28,"Cargo"),e.qZA(),e.TgZ(29,"span",62),e._uU(30," *"),e.qZA(),e._UZ(31,"input",68),e.YNc(32,le,5,4,"div",64),e.qZA()(),e.TgZ(33,"div",59)(34,"div",60)(35,"label",69),e._uU(36,"Tel\xe9fono"),e.qZA(),e.TgZ(37,"span",62),e._uU(38," *"),e.qZA(),e._UZ(39,"input",70),e.YNc(40,de,5,4,"div",64),e.qZA()()(),e.TgZ(41,"div",58)(42,"div",59)(43,"div",60)(44,"label",71),e._uU(45,"DUI"),e.qZA(),e.TgZ(46,"span",62),e._uU(47," *"),e.qZA(),e._UZ(48,"input",72),e.YNc(49,ge,5,4,"div",64),e.qZA()(),e.TgZ(50,"div",59)(51,"div",60)(52,"label",73),e._uU(53,"Funci\xf3n a desempe\xf1ar"),e.qZA(),e.TgZ(54,"span",62),e._uU(55," *"),e.qZA(),e._UZ(56,"ng-select",74),e.YNc(57,ve,2,1,"div",64),e.qZA()()(),e.TgZ(58,"div",58)(59,"div",59)(60,"div",60),e.YNc(61,he,8,1,"ng-container",75),e.qZA()(),e.TgZ(62,"div",59),e._UZ(63,"div",60),e.qZA()()()(),e.TgZ(64,"div",76)(65,"button",77),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.KtG(r.close("Close click"))}),e._uU(66,"Cerrar"),e.qZA(),e.TgZ(67,"button",78),e._uU(68,"Guardar"),e.qZA()()()}if(2&n){const t=e.oxw();let o,i,r,s,_,C,Z,q,x,S,U;e.xp6(2),e.Oqu(t.modoEditar?"Editar personal":"Agregar personal"),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(10),e.Q6J("ngClass",e.WLB(17,v,t.seGuardo&&(null==(o=t.form.get("nombre"))?null:o.errors),t.seGuardo&&(null==(o=t.form.get("nombre"))?null:o.valid))),e.xp6(1),e.Q6J("ngIf",null==(i=t.form.get("nombre"))?null:i.errors),e.xp6(7),e.Q6J("ngClass",e.WLB(20,v,t.seGuardo&&(null==(r=t.form.get("apellido"))?null:r.errors),t.seGuardo&&(null==(r=t.form.get("apellido"))?null:r.valid))),e.xp6(1),e.Q6J("ngIf",null==(s=t.form.get("apellido"))?null:s.errors),e.xp6(8),e.Q6J("ngClass",e.WLB(23,v,t.seGuardo&&(null==(_=t.form.get("cargo"))?null:_.errors),t.seGuardo&&(null==(_=t.form.get("cargo"))?null:_.valid))),e.xp6(1),e.Q6J("ngIf",null==(C=t.form.get("cargo"))?null:C.errors),e.xp6(7),e.Q6J("dropSpecialCharacters",!1)("ngClass",e.WLB(26,v,t.seGuardo&&(null==(Z=t.form.get("telefono"))?null:Z.errors),t.seGuardo&&(null==(Z=t.form.get("telefono"))?null:Z.valid))),e.xp6(1),e.Q6J("ngIf",null==(q=t.form.get("telefono"))?null:q.errors),e.xp6(8),e.Q6J("dropSpecialCharacters",!1)("ngClass",e.WLB(29,v,t.seGuardo&&(null==(x=t.form.get("dui"))?null:x.errors),t.seGuardo&&(null==(x=t.form.get("dui"))?null:x.valid))),e.xp6(1),e.Q6J("ngIf",null==(S=t.form.get("dui"))?null:S.errors),e.xp6(7),e.Q6J("items",t.funciones),e.xp6(1),e.Q6J("ngIf",null==(U=t.form.get("funcion"))?null:U.errors),e.xp6(4),e.Q6J("ngIf",!t.mostrarEstado&&t.isAdmin)}}function Ze(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",53)(1,"h4",54),e._uU(2,"Ver detalles del personal"),e.qZA(),e.TgZ(3,"button",55),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.KtG(r.dismiss("Cross click"))}),e.qZA()(),e.TgZ(4,"div",57)(5,"div",0)(6,"div",58)(7,"div",59)(8,"div",60)(9,"label",84),e._uU(10,"Nombre"),e.qZA(),e.TgZ(11,"p"),e._uU(12),e.qZA()()(),e.TgZ(13,"div",59)(14,"div",60)(15,"label",84),e._uU(16,"Apellido"),e.qZA(),e.TgZ(17,"p"),e._uU(18),e.qZA()()()(),e.TgZ(19,"div",58)(20,"div",59)(21,"div",60)(22,"label",84),e._uU(23,"Cargo"),e.qZA(),e.TgZ(24,"p"),e._uU(25),e.qZA()()(),e.TgZ(26,"div",59)(27,"div",60)(28,"label",84),e._uU(29,"Tel\xe9fono"),e.qZA(),e.TgZ(30,"p"),e._uU(31),e.qZA()()()(),e.TgZ(32,"div",58)(33,"div",59)(34,"div",60)(35,"label",84),e._uU(36,"DUI"),e.qZA(),e.TgZ(37,"p"),e._uU(38),e.qZA()()(),e.TgZ(39,"div",59)(40,"div",60)(41,"label",84),e._uU(42,"Funci\xf3n a desempe\xf1ar"),e.qZA(),e.TgZ(43,"p"),e._uU(44),e.qZA()()()(),e.TgZ(45,"div",58)(46,"div",59)(47,"div",60)(48,"label",84),e._uU(49,"Estado"),e.qZA(),e.TgZ(50,"p"),e._uU(51),e.qZA()()(),e.TgZ(52,"div",59),e._UZ(53,"div",60),e.qZA()()()(),e.TgZ(54,"div",76)(55,"button",77),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.KtG(r.close("Close click"))}),e._uU(56,"Cerrar"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(12),e.Oqu(t.personalSalud.nombre),e.xp6(6),e.Oqu(t.personalSalud.apellido),e.xp6(7),e.Oqu(t.personalSalud.cargo),e.xp6(6),e.Oqu(t.personalSalud.telefono),e.xp6(7),e.Oqu(t.personalSalud.dui),e.xp6(6),e.Oqu(t.personalSalud.funcion),e.xp6(7),e.Oqu(t.personalSalud.estado?"Activo":"Inactivo")}}const d=function(n){return{"d-none":n}},Ae=[{path:"",component:(()=>{class n{constructor(t,o,i,r,s){this.service=t,this.modalService=o,this.fb=i,this.config=r,this.tokenService=s,this.pageList=p.Hj,this.maxSize=p.$,this.page=p.Md,this.size=p.dp,this.funciones=[{funcion:"MEDICO"},{funcion:"ENFERMERA"},{funcion:"OTRO"}],this.seGuardo=!1,this.cambioOrden=!0,this.mostrarEstado=!1,this.estadoActual="Activo",this.sort="nombre,asc",this.modoEditar=!1,this.isVer=!1,this.isCrear=!1,this.isEditar=!1,this.isEliminar=!1,this.isAdmin=!1,this.permiso="PERSONAL_",this.config.notFoundText="No se encontraron resultados",this.buscar=this.fb.group({filter:["",[]]}),this.form=this.fb.group({nombre:["",[a.kI.required,a.kI.minLength(2),a.kI.maxLength(50),a.kI.pattern(f.Am)]],apellido:["",[a.kI.required,a.kI.minLength(2),a.kI.maxLength(50),a.kI.pattern(f.Am)]],cargo:["",[a.kI.required,a.kI.minLength(2),a.kI.maxLength(150),a.kI.pattern(f.Am)]],telefono:["",[a.kI.required,a.kI.minLength(9),a.kI.maxLength(15),a.kI.pattern(f.Nh)]],dui:["",[a.kI.required,a.kI.minLength(10),a.kI.maxLength(15),a.kI.pattern(f.VM)]],funcion:["",[a.kI.required]],estado:["",[]]})}ngOnInit(){this.isAdmin=this.tokenService.isSuperAdmin(),this.isVer=this.tokenService.isPermisos(this.permiso,"VER"),this.isCrear=this.tokenService.isPermisos(this.permiso,"CREAR"),this.isEditar=this.tokenService.isPermisos(this.permiso,"EDITAR"),this.isEliminar=this.tokenService.isPermisos(this.permiso,"ELIMINAR"),this.buscar.get("filter")?.valueChanges.pipe((0,P.b)(500),(0,E.x)()).subscribe(t=>{this.page=0,this.service.listarParametros(this.size,this.page,this.sort,t)})}get listar(){return this.service.personalSaludList?this.service.personalSaludList.content:[]}get listarTotal(){return this.service.personalSaludList?this.service.personalSaludList.totalElements:0}get filter(){return this.buscar.get("filter")?this.buscar.get("filter")?.value:""}cambiarEstado(){this.estadoActual=this.form.get("estado")?.value?"Activo":"Inactivo"}refresh(){this.service.listarParametros(this.size,this.page-1,this.sort,this.filter)}refreshSize(){this.page=0,this.service.listarParametros(this.size,this.page,this.sort,this.filter)}ordenar(t){this.cambioOrden=!this.sort.includes(t)||!this.cambioOrden,this.page=0,this.sort=this.cambioOrden?t+",asc":t+",desc",this.service.listarParametros(this.size,this.page,this.sort,this.filter)}openLg(t){this.modoEditar=!1,this.mostrarEstado=!0,this.seGuardo=!1,this.reiniciarFormulario(),this.modalService.open(t,{size:"lg"})}openLgEditar(t,o){this.modoEditar=!0,this.seGuardo=!1,this.reiniciarFormulario(),this.personalSalud=o,this.mostrarEstado=this.personalSalud.estado,this.form.patchValue({nombre:this.personalSalud.nombre,apellido:this.personalSalud.apellido,cargo:this.personalSalud.cargo,telefono:this.personalSalud.telefono,dui:this.personalSalud.dui,funcion:this.personalSalud.funcion,estado:this.personalSalud.estado}),this.cambiarEstado(),this.modalService.open(t,{size:"lg"})}openLgView(t,o){this.personalSalud=o,this.modalService.open(t,{size:"lg"})}reiniciarFormulario(){this.form.patchValue({nombre:"",apellido:"",cargo:"",telefono:"",dui:"",funcion:null,estado:!1})}enviar(){this.modoEditar?this.editar():this.guardar()}guardar(){this.seGuardo=!0,this.form.valid?this.service.agregar(this.form.value).subscribe({next:()=>{c().fire({position:"center",title:"\xa1\xc9xito!",text:"Los datos se han guardado correctamente.",icon:"success"}),this.service.listarParametros(this.size,this.page-1,this.sort,this.filter),this.reiniciarFormulario(),this.seGuardo=!1,this.modalService.dismissAll()},error:t=>{c().fire({position:"center",title:"Ocurri\xf3 un error",text:t.error.mensaje,icon:"error"})}}):c().fire({position:"center",title:"Datos incompletos",text:"Por favor, revisa los campos marcados.",icon:"warning"})}editar(){this.seGuardo=!0,this.form.valid?this.service.editar(this.personalSalud.id,this.form.value).subscribe({next:()=>{c().fire({position:"center",title:"\xa1\xc9xito!",text:"Los datos se han guardado correctamente.",icon:"success"}),this.service.listarParametros(this.size,this.page-1,this.sort,this.filter),this.reiniciarFormulario(),this.seGuardo=!1,this.modalService.dismissAll()},error:o=>{c().fire({position:"center",title:"Ocurri\xf3 un error",text:o.error.mensaje,icon:"error"})}}):c().fire({position:"center",title:"Datos incompletos",text:"Por favor, revisa los campos marcados.",icon:"warning"})}eliminar(t){c().fire({title:"\xbfConfirmar inhabilitaci\xf3n?",text:"Esta acci\xf3n marcar\xe1 el registro como inhabilitado, pero no lo eliminar\xe1 definitivamente.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, inhabilitar",cancelButtonText:"Cancelar"}).then(o=>{o.isConfirmed&&(this.service.eliminar(t).subscribe({next:i=>{i&&this.service.listarParametros(this.size,this.page-1,this.sort,this.filter)}}),c().fire("Inhabilitado","El registro ha sido marcado como inhabilitado exitosamente.","success"))})}iniciarAyuda(){const t=[(this.isCrear||this.isAdmin)&&{element:"#nuevoRegistro",popover:{title:"Crear un nuevo registro",description:"Aqu\xed puedes crear un nuevo registro para el personal",side:"left",align:"start"}},{element:"#cantidad",popover:{title:"Cantidad de registros a mostrar",description:"Aqu\xed puedes establecer la cantidad de informaci\xf3n que se muestra en la tabla",side:"right",align:"start"}},{element:"#buscar",popover:{title:"Filtrar registros",description:"Aqu\xed puedes filtrar la informaci\xf3n",side:"top",align:"start"}},(this.isVer||this.isAdmin)&&{element:"#detalle",popover:{title:"Ver detalles de un registro",description:"Aqu\xed puedes acceder a informaci\xf3n detallada sobre un registro",side:"left",align:"start"}},(this.isEditar||this.isAdmin)&&this.listar.length>0&&{element:"#editar",popover:{title:"Editar un registro",description:"Aqu\xed puedes editar un registro",side:"left",align:"start"}},(this.isEliminar||this.isAdmin)&&this.listar.length>0&&this.listar[0].estado&&{element:"#inhabilitar",popover:{title:"Inhabilitar un registro",description:"Aqu\xed puedes inhabilitar un registro",side:"left",align:"start"}},{element:"#paginacion",popover:{title:"Seleccionar p\xe1gina de registro",description:"Aqu\xed puedes seleccionar la p\xe1gina de la informaci\xf3n que deseas mostrar",side:"left",align:"end"}}].filter(Boolean).map(i=>i);(0,N.v)({showProgress:!0,nextBtnText:"Siguiente",prevBtnText:"Anterior",doneBtnText:"Finalizar",progressText:"{{current}} de {{total}}",steps:t}).drive()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(F),e.Y36(b.FF),e.Y36(a.qu),e.Y36(T.$q),e.Y36(y.B))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-personal-salud"]],decls:68,vars:44,consts:[[1,"container-fluid"],[1,"header__page","d-flex","justify-content-end","mb-3"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink",""],["aria-current","page",1,"breadcrumb-item","active"],[1,"d-flex","justify-content-between","mb-3"],[1,"d-flex","align-items-center"],[1,"fs-3"],[1,"btn","text-primary","fs-5",3,"click"],[1,"bi","bi-info-circle-fill"],["type","button","class","btn btn-primary","id","nuevoRegistro",3,"click",4,"ngIf"],[1,"d-flex","flex-column","gap-2","flex-lg-row","justify-content-between","mb-3"],["id","cantidad",1,"d-flex","align-items-center","mb-3"],["for","pageSize",1,"col-form-label","me-2"],["id","pageSize","bindLabel","value","bindValue","value",3,"items","ngModel","clearable","ngModelChange"],["for","pageSize",1,"col-form-label","ms-2"],[3,"formGroup"],["id","buscar",1,"d-flex","align-items-center","mb-3"],["for","filter",1,"col-form-label","me-2"],["id","filter","type","text","formControlName","filter",1,"form-control"],[1,"table-responsive","mb-3"],[1,"table","align-middle"],[1,"border-dark"],["scope","col",3,"click"],[1,"bi","bi-caret-up-fill",3,"ngClass"],[1,"bi","bi-caret-down-fill",3,"ngClass"],["scope","col"],[4,"ngIf","ngIfElse"],["noRecords",""],[1,"d-flex","flex-column","gap-2","flex-lg-row","justify-content-between"],[1,"text-black"],["id","paginacion",3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"],["content",""],["contentView",""],["type","button","id","nuevoRegistro",1,"btn","btn-primary",3,"click"],[1,"bi","bi-plus-square"],[4,"ngFor","ngForOf"],["class","badge bg-success",4,"ngIf"],["class","badge bg-danger",4,"ngIf"],[1,"d-flex","flex-row"],["type","button",1,"btn","btn-outline-secondary","me-2",3,"id","click"],[1,"bi","bi-eye"],["type","button","class","btn btn-outline-success me-2",3,"id","click",4,"ngIf"],["type","button","class","btn btn-outline-danger",3,"id","click",4,"ngIf"],[1,"badge","bg-success"],[1,"badge","bg-danger"],["type","button",1,"btn","btn-outline-success","me-2",3,"id","click"],[1,"bi","bi-pencil"],["type","button",1,"btn","btn-outline-danger",3,"id","click"],[1,"bi","bi-x-lg"],["colspan","7",1,"text-center"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"row"],[1,"col-12","col-lg-6"],[1,"mb-3"],["for","nombre",1,"form-label"],[1,"text-danger"],["type","text","autocomplete","off","formControlName","nombre","id","nombre","placeholder","Ingrese el nombre",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","apellido",1,"form-label"],["type","text","autocomplete","off","formControlName","apellido","id","apellido","placeholder","Ingrese el apellido",1,"form-control",3,"ngClass"],["for","cargo",1,"form-label"],["type","text","autocomplete","off","formControlName","cargo","id","cargo","placeholder","Ingrese el cargo",1,"form-control",3,"ngClass"],["for","telefono",1,"form-label"],["type","tel","formControlName","telefono","id","telefono","placeholder","Ingresa el tel\xe9fono","mask","0000-0000",1,"form-control",3,"dropSpecialCharacters","ngClass"],["for","dui",1,"form-label"],["type","text","autocomplete","off","formControlName","dui","id","dui","placeholder","Ingrese el DUI","mask","00000000-0",1,"form-control",3,"dropSpecialCharacters","ngClass"],["for","funcion",1,"form-label"],["formControlName","funcion","id","funcion","placeholder","Seleccione la funci\xf3n a desempe\xf1ar","bindLabel","funcion","bindValue","funcion",3,"items"],[4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-light",3,"click"],["type","submit",1,"btn","btn-primary"],[1,"invalid-feedback"],["for","estado",1,"form-label"],[1,"form-check","form-switch"],["type","checkbox","id","estado","formControlName","estado",1,"form-check-input",3,"change"],["for","estado",1,"form-check-label"],[1,"form-label","fw-bold"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"nav",2)(3,"ol",3)(4,"li",4)(5,"a",5),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"li",6),e._uU(8,"Personal"),e.qZA()()()(),e.TgZ(9,"div",7)(10,"div",8)(11,"h1",9),e._uU(12,"Personal"),e.qZA(),e.TgZ(13,"button",10),e.NdJ("click",function(){return o.iniciarAyuda()}),e._UZ(14,"i",11),e.qZA()(),e.TgZ(15,"div"),e.YNc(16,O,2,0,"button",12),e.qZA()(),e.TgZ(17,"div",13)(18,"div",14)(19,"label",15),e._uU(20,"Mostrar:"),e.qZA(),e.TgZ(21,"ng-select",16),e.NdJ("ngModelChange",function(r){return o.size=r})("ngModelChange",function(){return o.refreshSize()}),e.qZA(),e.TgZ(22,"label",17),e._uU(23,"registros"),e.qZA()(),e.TgZ(24,"form",18)(25,"div",19)(26,"label",20),e._uU(27,"Buscar:"),e.qZA(),e._UZ(28,"input",21),e.qZA()()(),e.TgZ(29,"div",22)(30,"table",23)(31,"thead")(32,"tr",24)(33,"th",25),e.NdJ("click",function(){return o.ordenar("nombre")}),e._uU(34," Nombre"),e._UZ(35,"i",26)(36,"i",27),e.qZA(),e.TgZ(37,"th",25),e.NdJ("click",function(){return o.ordenar("apellido")}),e._uU(38," Apellido"),e._UZ(39,"i",26)(40,"i",27),e.qZA(),e.TgZ(41,"th",25),e.NdJ("click",function(){return o.ordenar("funcion")}),e._uU(42," Funci\xf3n"),e._UZ(43,"i",26)(44,"i",27),e.qZA(),e.TgZ(45,"th",25),e.NdJ("click",function(){return o.ordenar("dui")}),e._uU(46," DUI"),e._UZ(47,"i",26)(48,"i",27),e.qZA(),e.TgZ(49,"th",25),e.NdJ("click",function(){return o.ordenar("estado")}),e._uU(50," Estado"),e._UZ(51,"i",26)(52,"i",27),e.qZA(),e.TgZ(53,"th",28),e._uU(54,"Acciones"),e.qZA()()(),e.TgZ(55,"tbody"),e.YNc(56,w,2,1,"ng-container",29),e.YNc(57,V,3,0,"ng-template",null,30,e.W1O),e.qZA()()(),e.TgZ(59,"div",31)(60,"div")(61,"p",32),e._uU(62),e.qZA()(),e.TgZ(63,"ngb-pagination",33),e.NdJ("pageChange",function(r){return o.page=r})("pageChange",function(){return o.refresh()}),e.qZA()()(),e.YNc(64,be,69,32,"ng-template",null,34,e.W1O),e.YNc(66,Ze,57,7,"ng-template",null,35,e.W1O)),2&t){const i=e.MAs(58);e.xp6(16),e.Q6J("ngIf",o.isCrear||o.isAdmin),e.xp6(5),e.Q6J("items",o.pageList)("ngModel",o.size)("clearable",!1),e.xp6(3),e.Q6J("formGroup",o.buscar),e.xp6(11),e.Q6J("ngClass",e.VKq(24,d,"nombre,asc"!==o.sort||!o.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(26,d,"nombre,desc"!==o.sort||o.cambioOrden)),e.xp6(3),e.Q6J("ngClass",e.VKq(28,d,"apellido,asc"!==o.sort||!o.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(30,d,"apellido,desc"!==o.sort||o.cambioOrden)),e.xp6(3),e.Q6J("ngClass",e.VKq(32,d,"funcion,asc"!==o.sort||!o.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(34,d,"funcion,desc"!==o.sort||o.cambioOrden)),e.xp6(3),e.Q6J("ngClass",e.VKq(36,d,"dui,asc"!==o.sort||!o.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(38,d,"dui,desc"!==o.sort||o.cambioOrden)),e.xp6(3),e.Q6J("ngClass",e.VKq(40,d,"estado,desc"!==o.sort||o.cambioOrden)),e.xp6(1),e.Q6J("ngClass",e.VKq(42,d,"estado,asc"!==o.sort||!o.cambioOrden)),e.xp6(4),e.Q6J("ngIf",o.listar.length>0)("ngIfElse",i),e.xp6(6),e.hij("Total de registros: ",o.listarTotal,""),e.xp6(1),e.Q6J("collectionSize",o.listarTotal)("page",o.page)("pageSize",o.size)("maxSize",o.maxSize)("rotate",!0)("boundaryLinks",!0)}},dependencies:[m.mk,m.sg,m.O5,g.yS,a._Y,a.Fj,a.Wl,a.JJ,a.JL,a.On,a.sg,a.u,b.N9,T.w9,A.hx]}),n})(),canActivate:[u(2466).i],data:{expectedAuthorities:["PERSONAL"]}}];let Ce=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(Ae),g.Bz]}),n})();const qe=null;let Se=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,Ce,a.u5,a.UX,b.jF,b.ZS,T.A0,A.yI.forRoot()]}),n})()}}]);