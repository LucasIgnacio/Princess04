'use strict';
const words={
'pt-BR':{title:'Princesa — Texturas que inspiram',skip:'Pular para o conteúdo',navigation:'Navegação',fabrics:'Tecidos',contact:'Contato',theme:'Alternar entre tema claro e escuro',language:'Selecionar idioma',since:'PRINCESA · DESDE 1951',headline:'Texturas que inspiram.',segments:'Íntima. Esportiva. Praia.',movement:'01 / Movimento',detail:'02 / Detalhes',explore:'Explore as tramas',weaves:'Nossas tramas.',made:'DO FIO À SUA CRIAÇÃO',knitting:'Malharia',weaving:'Tecelagem',lace:'Rendas e tules',next:'SUA PRÓXIMA CRIAÇÃO',lets:'Vamos criar?',talk:'Fale com a Princesa',back:'Voltar ao topo',close:'Fechar imagem',movementAlt:'Duas mulheres com roupas esportivas ao ar livre',detailAlt:'Detalhe de tecido em produção',knittingAlt:'Máquinas de malharia',weavingAlt:'Fios em bobinas',laceAlt:'Textura de tecido',expandMovement:'Ampliar fotografia de moda esportiva',expandDetail:'Ampliar detalhe do tecido',expandKnitting:'Ampliar fotografia de malharia',expandWeaving:'Ampliar fotografia de tecelagem',expandLace:'Ampliar fotografia de rendas e tules'},
'en':{title:'Princesa — Textures that inspire',skip:'Skip to content',navigation:'Navigation',fabrics:'Fabrics',contact:'Contact',theme:'Switch between light and dark theme',language:'Select language',since:'PRINCESA · SINCE 1951',headline:'Textures that inspire.',segments:'Intimate. Sport. Beach.',movement:'01 / Movement',detail:'02 / Details',explore:'Explore our fabrics',weaves:'Our fabrics.',made:'FROM YARN TO YOUR CREATION',knitting:'Knitting',weaving:'Weaving',lace:'Lace and tulle',next:'YOUR NEXT CREATION',lets:'Let’s create.',talk:'Talk to Princesa',back:'Back to top',close:'Close image',movementAlt:'Two women wearing sportswear outdoors',detailAlt:'A close view of fabric in production',knittingAlt:'Knitting machines',weavingAlt:'Yarn on spools',laceAlt:'Fabric texture',expandMovement:'Enlarge sportswear photograph',expandDetail:'Enlarge fabric detail',expandKnitting:'Enlarge knitting photograph',expandWeaving:'Enlarge weaving photograph',expandLace:'Enlarge lace and tulle photograph'},
'es':{title:'Princesa — Texturas que inspiran',skip:'Ir al contenido',navigation:'Navegación',fabrics:'Tejidos',contact:'Contacto',theme:'Alternar entre tema claro y oscuro',language:'Seleccionar idioma',since:'PRINCESA · DESDE 1951',headline:'Texturas que inspiran.',segments:'Íntima. Deportiva. Playa.',movement:'01 / Movimiento',detail:'02 / Detalles',explore:'Explore los tejidos',weaves:'Nuestros tejidos.',made:'DEL HILO A SU CREACIÓN',knitting:'Tejido de punto',weaving:'Tejeduría',lace:'Encajes y tules',next:'SU PRÓXIMA CREACIÓN',lets:'¿Creamos?',talk:'Hable con Princesa',back:'Volver arriba',close:'Cerrar imagen',movementAlt:'Dos mujeres con ropa deportiva al aire libre',detailAlt:'Detalle de un tejido en producción',knittingAlt:'Máquinas de tejido de punto',weavingAlt:'Hilos en bobinas',laceAlt:'Textura de tejido',expandMovement:'Ampliar fotografía de moda deportiva',expandDetail:'Ampliar detalle del tejido',expandKnitting:'Ampliar fotografía de tejido de punto',expandWeaving:'Ampliar fotografía de tejeduría',expandLace:'Ampliar fotografía de encajes y tules'},
'zh-CN':{title:'Princesa — 激发灵感的肌理',skip:'跳至主要内容',navigation:'导航',fabrics:'面料',contact:'联系',theme:'切换浅色与深色主题',language:'选择语言',since:'PRINCESA · 始于1951年',headline:'激发灵感的肌理。',segments:'内衣。运动。沙滩。',movement:'01 / 动感',detail:'02 / 细节',explore:'探索面料',weaves:'我们的面料。',made:'从纱线到您的创作',knitting:'针织',weaving:'经编',lace:'蕾丝与网纱',next:'您的下一个创作',lets:'一起创造。',talk:'联系 Princesa',back:'返回顶部',close:'关闭图片',movementAlt:'两位穿运动服的女性在户外',detailAlt:'生产中的面料细节',knittingAlt:'针织机器',weavingAlt:'线轴上的纱线',laceAlt:'面料纹理',expandMovement:'放大运动服照片',expandDetail:'放大面料细节',expandKnitting:'放大针织照片',expandWeaving:'放大经编照片',expandLace:'放大蕾丝与网纱照片'}
};
const currentTexts={"pt-BR": {"title": "Princesa — Moda que inspira movimento", "headline": "Moda que inspira\nmovimento", "selectTitle": "Encontre seu toque.", "selectLegend": "Selecione um tipo de tecido", "knittingDescription": "Conforto em movimento.", "weavingDescription": "Precisão em cada fio.", "laceDescription": "Delicadeza nos detalhes."}, "en": {"title": "Princesa — Fashion that inspires movement", "headline": "Fashion that inspires\nmovement", "selectTitle": "Find your touch.", "selectLegend": "Select a type of fabric", "knittingDescription": "Comfort in motion.", "weavingDescription": "Precision in every yarn.", "laceDescription": "Delicacy in the details."}, "es": {"title": "Princesa — Moda que inspira movimiento", "headline": "Moda que inspira\nmovimiento", "selectTitle": "Encuentre su tacto.", "selectLegend": "Seleccione un tipo de tejido", "knittingDescription": "Confort en movimiento.", "weavingDescription": "Precisión en cada hilo.", "laceDescription": "Delicadeza en los detalles."}, "zh-CN": {"title": "Princesa — 激发律动的时尚", "headline": "激发律动\n的时尚", "selectTitle": "寻找您的触感。", "selectLegend": "选择面料类型", "knittingDescription": "动感中的舒适。", "weavingDescription": "每一根纱线的精密。", "laceDescription": "细节中的精致。"}};
for(const [lang,entries]of Object.entries(currentTexts))Object.assign(words[lang],entries);
const storePreference=(key,value)=>{try{localStorage.setItem(key,value)}catch{}};
const readPreference=key=>{try{return localStorage.getItem(key)}catch{return null}};
let language=readPreference('princesa-movimento-language');if(!words[language])language='pt-BR';
const t=key=>words[language][key]??words['pt-BR'][key];
const languages=document.getElementById('languages');
const languageToggle=document.getElementById('languageToggle');
const languageButtons=Array.from(languages.querySelectorAll('[data-language]'));
function chooseLanguage(value){
 language=words[value]?value:'pt-BR';document.documentElement.lang=language;document.title=t('title');
 document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n)});
 document.querySelectorAll('[data-label]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.label)));
 document.querySelectorAll('[data-alt]').forEach(el=>{el.alt=t(el.dataset.alt)});
 const selected=languageButtons.find(button=>button.dataset.language===language);
 document.getElementById('currentFlag').src=selected.querySelector('img').getAttribute('src');
 languageToggle.title=selected.dataset.name;languageToggle.setAttribute('aria-label',`${t('language')}: ${selected.dataset.name}`);
 languageButtons.forEach(button=>button.setAttribute('aria-pressed',String(button===selected)));
 storePreference('princesa-movimento-language',language);
 updateMaterial();
}
languageButtons.forEach(button=>button.addEventListener('click',()=>{chooseLanguage(button.dataset.language);languages.open=false;languageToggle.focus()}));
languages.addEventListener('keydown',event=>{
 if(event.key==='Escape'){languages.open=false;languageToggle.focus();return}
 if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
 event.preventDefault();languages.open=true;
 let i=languageButtons.indexOf(document.activeElement);
 if(event.key==='Home')i=0;else if(event.key==='End')i=languageButtons.length-1;else if(i<0)i=languageButtons.findIndex(button=>button.dataset.language===language);else i=(i+(event.key==='ArrowDown'?1:-1)+languageButtons.length)%languageButtons.length;
 languageButtons[i].focus();
});
document.addEventListener('click',event=>{if(!languages.contains(event.target))languages.open=false});
document.addEventListener('focusin',event=>{if(!languages.contains(event.target))languages.open=false});
const themeToggle=document.getElementById('themeToggle');
function chooseTheme(value){const theme=value==='dark'?'dark':'light';document.documentElement.dataset.theme=theme;themeToggle.setAttribute('aria-pressed',String(theme==='dark'));document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#080808':'#ffffff';storePreference('princesa-movimento-theme',theme)}
themeToggle.addEventListener('click',()=>chooseTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));

const materialInputs=Array.from(document.querySelectorAll('input[name="material"]'));
const materialImage=document.getElementById('materialImage');
const materialFiles={knitting:'tecido-malharia.jpeg',weaving:'tecido-tecelagem.jpeg',lace:'tecido-rendas.jpeg'};
const materialMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let materialAnimation=null;
function updateMaterial(animate=false){
 const selected=materialInputs.find(input=>input.checked);
 if(!selected)return;
 const key=selected.value;
 const src='assets/images/'+materialFiles[key];
 if(materialImage.getAttribute('src')!==src)materialImage.src=src;
 materialImage.alt=t(key+'Alt');
 document.getElementById('materialCaption').textContent=t(key);
 document.getElementById('materialNumber').textContent=String(materialInputs.indexOf(selected)+1).padStart(2,'0')+' / 03';
 document.getElementById('materialDescription').textContent=t(key+'Description');
 if(animate&&!materialMotion.matches){if(materialAnimation)materialAnimation.cancel();materialAnimation=materialImage.animate([{opacity:.55,transform:'scale(1.025)'},{opacity:1,transform:'scale(1)'}],{duration:420,easing:'ease-out'});}
}
materialInputs.forEach(input=>input.addEventListener('change',()=>updateMaterial(true)));
chooseLanguage(language);chooseTheme(document.documentElement.dataset.theme);
