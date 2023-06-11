import{j as q}from"./jsx-runtime-91a467a5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const n=({label:e="No Label",size:z="normal",allCaps:S=!0,color:h="primary",fontColor:N})=>q("span",{className:`label ${z} text-${h}`,style:{color:N},children:S?e.toUpperCase():e});try{n.displayName="MyLabel",n.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"El mensaje que se mostrara en la etiqueta",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Este es el tamaño de la etiqueta",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"true"},description:"Define si todas las letras son mayusculas",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Define el color de la etiqueta",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Color personalizado de la fuente",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const T={title:"UI/MyLabel",component:n,argTypes:{size:{control:"select"},color:{control:"select"}},tags:["autodocs"]},t=e=>q(n,{...e}),a=t.bind({});a.args={size:"normal",allCaps:!1};const r=t.bind({});r.args={size:"normal",allCaps:!0};const s=t.bind({});s.args={size:"normal",color:"secondary"};const o=t.bind({});o.args={size:"normal",color:"tertiary"};const l=t.bind({});l.args={size:"h1",fontColor:"#7038e0"};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"(args: MyLabelProps) => <MyLabel {...args} />",...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,m,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"(args: MyLabelProps) => <MyLabel {...args} />",...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var y,b,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"(args: MyLabelProps) => <MyLabel {...args} />",...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,L,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"(args: MyLabelProps) => <MyLabel {...args} />",...(C=(L=o.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var M,v,_;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:"(args: MyLabelProps) => <MyLabel {...args} />",...(_=(v=l.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const j=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{r as AllCaps,a as Basic,l as CustomFontColor,s as Secondary,o as Tertiary,j as __namedExportsOrder,T as default};
//# sourceMappingURL=MyLabel.stories-5caacaa5.js.map
