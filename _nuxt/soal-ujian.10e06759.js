import{r as m,q as k,o as t,c as s,a,u as n,s as _,v as w,x as y,y as f,z as x,F as g,A as j,t as d,B as A,_ as P,b as I}from"./entry.74dc42b5.js";const c=[{id:1,pertanyaan:"Apa ibukota Indonesia?",answers:[{content:"Jakarta"},{content:"Surabaya"},{content:"Bandung"},{content:"Medan"}],jawabanBenar:"Jakarta",jawabanYangDipilih:null},{id:2,pertanyaan:"Berapakah 5 + 3?",answers:[{content:"6"},{content:"7"},{content:"8"},{content:"9"}],jawabanBenar:"8",jawabanYangDipilih:null},{id:3,pertanyaan:"Berapakah 1 + 3?",answers:[{content:"4"},{content:"7"},{content:"5"},{content:"9"}],jawabanBenar:"4",jawabanYangDipilih:null}],z={class:"max-w-3xl mx-auto"},E={class:"flex items-center justify-center"},F={key:0},H={class:"flex my-4"},L=a("label",{for:"nama"},"Nama:",-1),R={class:"flex mb-4"},O=a("label",{for:"kelas"},"Kelas:",-1),T={class:"flex mb-4"},$=a("label",null,"Jenis Kelamin:",-1),G={class:"ml-2"},Q=a("label",{for:"laki-laki",class:"ml-1"},"Laki-laki",-1),W={class:"ml-4"},X=a("label",{for:"perempuan",class:"ml-1"},"Perempuan",-1),Z=["disabled"],q={class:"flex items-center justify-center"},aa={key:0},ea=a("h1",{class:"text-2xl font-bold mb-4"},"Ujian Online",-1),na=["name","id","value","onUpdate:modelValue","disabled"],la=["for"],ta={class:"mt-4"},sa=["disabled"],ia=["disabled"],oa={key:0,class:"mt-4"},da=a("h2",{class:"text-xl font-bold mb-2"},"Hasil Ujian",-1),ra={__name:"soalujian",setup(B){const r=m(""),i=m(""),o=m(""),h=m(!1),u=m(0),D=k(()=>[c[u.value]]),V=()=>{u.value<c.length-1&&u.value++},Y=()=>{u.value>0&&u.value--},v=m(!1),S=()=>{console.log("coba fungsi"),v.value=!0},U=()=>{h.value=!1,v.value=!1,r.value="",i.value="",o.value="",c.forEach(p=>{p.jawabanYangDipilih=null})},J=k(()=>{const p=c.filter(e=>e.jawabanYangDipilih===e.jawabanBenar).length,l=c.length;return Math.floor(100/l*p)}),K=()=>{h.value=!0},N=k(()=>{const p=r.value.trim()!=="",l=Number.isInteger(Number(i.value))&&i.value>=1&&i.value<=12,e=o.value!=="";return p&&l&&e});return(p,l)=>(t(),s("div",z,[a("div",E,[n(h)?x("",!0):(t(),s("div",F,[a("div",H,[L,_(a("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>y(r)?r.value=e:null),type:"text",id:"nama",class:"border-2 rounded ml-2 px-2 py-1",placeholder:"Isi nama disini yaa..."},null,512),[[w,n(r)]])]),a("div",R,[O,_(a("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>y(i)?i.value=e:null),type:"number",id:"kelas",min:1,max:12,class:"border-2 rounded ml-2 px-2 py-1",placeholder:"1"},null,512),[[w,n(i)]])]),a("div",T,[$,a("div",G,[_(a("input",{type:"radio",id:"laki-laki","onUpdate:modelValue":l[2]||(l[2]=e=>y(o)?o.value=e:null),value:"laki-laki"},null,512),[[f,n(o)]]),Q]),a("div",W,[_(a("input",{type:"radio",id:"perempuan","onUpdate:modelValue":l[3]||(l[3]=e=>y(o)?o.value=e:null),value:"perempuan"},null,512),[[f,n(o)]]),X])]),a("button",{onClick:K,class:"bg-blue-500 text-white px-4 py-2 rounded",disabled:!n(N)}," Mulai ",8,Z)]))]),a("div",q,[n(h)?(t(),s("div",aa,[ea,(t(!0),s(g,null,j(n(D),(e,C)=>(t(),s("div",{key:e.id,class:"mb-4"},[a("p",null,d(e.pertanyaan),1),(t(!0),s(g,null,j(e.answers,b=>(t(),s("div",{key:b.content},[_(a("input",{type:"radio",name:C,id:b.content,value:b.content,"onUpdate:modelValue":M=>e.jawabanYangDipilih=M,disabled:n(v)},null,8,na),[[f,e.jawabanYangDipilih]]),a("label",{for:b.content,class:"ml-2"},d(b.content),9,la)]))),128))]))),128)),a("div",ta,[a("button",{onClick:Y,disabled:n(u)===0,class:"bg-gray-300 text-gray-600 px-4 py-2 rounded mr-2"}," Sebelumnya ",8,sa),a("button",{onClick:V,disabled:n(u)===n(c).length-1,class:"bg-gray-300 text-gray-600 px-4 py-2 rounded"}," Selanjutnya ",8,ia)]),a("button",{onClick:S,class:"bg-blue-500 text-white px-4 py-2 mt-4 rounded"}," Submit "),n(v)?(t(),s("div",oa,[da,a("p",null,"Nilai Anda: "+d(n(J)),1),(t(!0),s(g,null,j(n(c),e=>(t(),s("div",{key:e.id,class:"mb-4"},[a("p",{class:A({"text-green-500":e.jawabanYangDipilih===e.jawabanBenar,"text-red-500":e.jawabanYangDipilih!==e.jawabanBenar})}," Jawaban Anda: "+d(e.jawabanYangDipilih),3),a("p",null,"Jawaban yang Benar: "+d(e.jawabanBenar),1)]))),128)),a("p",null,"Nama: "+d(n(r)),1),a("p",null,"Kelas: "+d(n(i)),1),a("p",null,"Jenis Kelamin: "+d(n(o)),1),a("button",{onClick:U,class:"bg-red-500 text-white px-4 py-2 rounded"}," Keluar ")])):x("",!0)])):x("",!0)])]))}},ua={};function ca(B,r){const i=ra;return t(),s("div",null,[I(i)])}const ma=P(ua,[["render",ca]]);export{ma as default};
