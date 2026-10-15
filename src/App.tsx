import { useState } from 'react';
import { ArrowRight, Check, Heart, Image, MonitorPlay, Sparkles, Globe2 } from 'lucide-react';

type Format = 'Invitation image' | 'Animated video' | 'Invitation website';
type Template = { id: string; name: string; style: string; tone: string; label: string };
const imageTemplates: Template[] = [
  {id:'rose',name:'Rose Garden',style:'template-rose',tone:'Romantic & floral',label:'AARAV & ANANYA'},
  {id:'royal',name:'Royal Elegance',style:'template-royal',tone:'Classic & regal',label:'THE WEDDING OF'},
  {id:'minimal',name:'Modern Minimal',style:'template-minimal',tone:'Clean & modern',label:'SAVE THE DATE'},
  {id:'sage',name:'Botanical Sage',style:'template-sage',tone:'Natural & calm',label:'TOGETHER FOREVER'},
  {id:'night',name:'Midnight Gold',style:'template-night',tone:'Premium evening',label:'AN EVENING TO REMEMBER'},
  {id:'pastel',name:'Pastel Celebration',style:'template-pastel',tone:'Soft & joyful',label:'LET’S CELEBRATE'}
];
const videoTemplates: Template[] = [
  {id:'cinema',name:'Cinematic Romance',style:'video-cinema',tone:'Cinematic opening',label:'AARAV & ANANYA'},
  {id:'floral',name:'Blooming Florals',style:'video-floral',tone:'Floral motion',label:'A BEAUTIFUL BEGINNING'},
  {id:'royal-video',name:'Royal Celebration',style:'video-royal',tone:'Grand & elegant',label:'YOU ARE INVITED'},
  {id:'modern-video',name:'Modern Moments',style:'video-modern',tone:'Minimal motion',label:'SAVE OUR DATE'}
];
const websiteTemplates: Template[] = [
  {id:'story',name:'The Love Story',style:'site-story',tone:'Romantic event page',label:'OUR STORY'},
  {id:'garden',name:'Garden Celebration',style:'site-garden',tone:'Fresh botanical',label:'JOIN US IN CELEBRATION'},
  {id:'luxury',name:'Classic Luxe',style:'site-luxury',tone:'Elegant and refined',label:'A DAY TO REMEMBER'},
  {id:'modern-site',name:'Modern RSVP',style:'site-modern',tone:'Simple and practical',label:'YOU’RE INVITED'}
];
const formatIds: Record<Format,string> = {'Invitation image':'image-templates','Animated video':'video-templates','Invitation website':'website-templates'};
export default function App(){
  const [format,setFormat]=useState<Format>('Invitation image');
  const [selectedTemplate,setSelectedTemplate]=useState('');
  const [notice,setNotice]=useState('');
  function browse(next: Format){
    setFormat(next);
    setSelectedTemplate('');
    document.getElementById(formatIds[next])?.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function choose(template: Template, next: Format){
    setFormat(next);
    setSelectedTemplate(template.id);
    setNotice(`${template.name} selected — personalization and export will be added next.`);
  }
  function gallery(title: string, subtitle: string, items: Template[], next: Format){
    return <section className="template-gallery" id={formatIds[next]} key={formatIds[next]}>
      <div className="section-title"><span className="eyebrow">{next.toUpperCase()} TEMPLATES</span><h2>{title} <em>collection.</em></h2><p>{subtitle}</p></div>
      <div className={next==='Invitation image'?'template-grid image-template-grid':next==='Animated video'?'template-grid video-template-grid':'template-grid website-template-grid'}>
        {items.map((t)=><article className={`template-card ${selectedTemplate===t.id?'chosen':''}`} key={t.id}>
          <button className={`template-art ${t.style}`} aria-label={`Preview ${t.name}`} onClick={()=>choose(t,next)}>
            {next==='Invitation image' ? <span className="paper-invite"><small>{t.label}</small><strong>Aarav <i>&</i><br/>Ananya</strong><span className="ornament">✳ ─ ✳</span><b>22 · 02 · 2027</b><small>THE GARDEN PALACE · PUNE</small></span> :
             next==='Animated video' ? <span className="video-template-inner"><i className="template-play">▶</i><small>{t.label}</small><strong>Aarav <i>&</i> Ananya</strong><b>22 · 02 · 2027</b><span className="fake-timeline"><i/></span></span> :
             <span className="website-template-inner"><span className="fake-browser"><i/><i/><i/><small>our-invitation.example</small></span><span className="site-template-hero"><small>{t.label}</small><strong>Aarav <i>&</i><br/>Ananya</strong><b>22 FEBRUARY 2027 · PUNE</b><em>VIEW CELEBRATION DETAILS</em></span><span className="fake-site-content"><i/><i/><i/></span></span>}
            {selectedTemplate===t.id&&<span className="selected-mark"><Check size={14}/> Selected</span>}
          </button>
          <div className="template-info"><div><h3>{t.name}</h3><p>{t.tone}</p></div><button className="use-template" onClick={()=>choose(t,next)}>{selectedTemplate===t.id?'Selected':'Choose'} <ArrowRight size={14}/></button></div>
        </article>)}
      </div>
      <p className="gallery-footnote">{next==='Invitation image'?'Image file generation is not enabled yet; these are selectable design previews.':next==='Animated video'?'Video rendering and download will be added in a later build.':'Website publishing and unique invitation links will be added in a later build.'}</p>
    </section>;
  }
  return <div className="shell">
    <header className="topbar"><a className="brand" href="#home"><span className="brand-icon"><Heart size={18} fill="currentColor"/></span>invite<span className="brand-light">studio</span></a><nav><a href="#designs">Explore designs</a><a href="#how">How it works</a><a href="#image-templates">Templates</a></nav><a className="btn dark" href="#designs">Start creating <ArrowRight size={15}/></a></header>
    <main>
      <section className="hero" id="home"><div className="hero-copy"><span className="eyebrow"><Sparkles size={14}/> A LITTLE MAGIC FOR YOUR BIG DAY</span><h1>Make it a moment<br/>worth <em>remembering.</em></h1><p>Beautiful invitations for life's most meaningful moments. Browse a design, choose your favorite, and make your celebration feel personal.</p><div className="actions"><a className="btn dark" href="#designs">Browse templates <ArrowRight size={16}/></a><a className="btn outline" href="#how">How it works</a></div><div className="promise"><Check size={16}/> Curated designs <Check size={16}/> Start free <Check size={16}/> Made for sharing</div></div>
      <div className="hero-art"><div className="circle"></div><div className="hero-card"><span className="flower">✳</span><small>TOGETHER WITH THEIR FAMILIES</small><h2>Aarav <i>&</i><br/>Ananya</h2><hr/><p>REQUEST THE PLEASURE<br/>OF YOUR COMPANY</p><h3>22 · 02 · 2027</h3><small>THE GARDEN PALACE · PUNE</small><span className="foot">JOYFULLY BEGINNING FOREVER</span></div><div className="floating">Made with love <Heart size={14}/></div></div></section>
      <section className="products" id="designs"><div className="section-title"><span className="eyebrow">ONE IDEA, THREE WAYS TO SHARE</span><h2>Your invitation, <em>your way.</em></h2><p>Choose a format to browse its available templates.</p><p className="format-current">Currently selected: {format}</p></div><div className="product-grid">
        <button className="product" onClick={()=>browse('Invitation image')}><span className="product-icon rose"><Image/></span><h3>Invitation image</h3><p>Elegant invitation designs for WhatsApp, social media, email or print.</p><b>Browse image templates <ArrowRight size={15}/></b></button>
        <button className="product" onClick={()=>browse('Animated video')}><span className="product-icon lilac"><MonitorPlay/></span><h3>Animated video</h3><p>Cinematic announcement styles with motion-inspired visual previews.</p><b>Browse video templates <ArrowRight size={15}/></b></button>
        <button className="product" onClick={()=>browse('Invitation website')}><span className="product-icon sage"><Globe2/></span><h3>Invitation website</h3><p>Beautiful event page layouts to bring celebration details together.</p><b>Browse website templates <ArrowRight size={15}/></b></button>
      </div></section>
      {gallery('Find your perfect image','Choose from floral, classic, minimal, botanical and premium invitation styles.',imageTemplates,'Invitation image')}
      {gallery('Bring the moment to life','Explore visual directions for a romantic, cinematic or modern invitation video.',videoTemplates,'Animated video')}
      {gallery('Your own little event website','Choose a page style for sharing event information in one convenient place.',websiteTemplates,'Invitation website')}
      <section className="how" id="how"><div className="section-title"><span className="eyebrow">SIMPLE FROM START TO SEND</span><h2>From idea to <em>invited.</em></h2><p>Less fiddling. More celebrating.</p></div><div className="steps"><article><b>01</b><h3>Choose a format</h3><p>Browse image, video or website designs.</p></article><article><b>02</b><h3>Pick a template</h3><p>Choose the style that feels right for your celebration.</p></article><article><b>03</b><h3>Personalize and share</h3><p>Personalization, final export and publishing are the next platform features.</p></article></div></section>
      <section className="cta"><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Let's make something <em>meaningful.</em></h2><p>Start with a template that feels like you.</p><a className="btn light" href="#designs">Explore templates <ArrowRight size={16}/></a></section>
    </main><footer><a className="brand" href="#home"><span className="brand-icon"><Heart size={16} fill="currentColor"/></span>invite<span className="brand-light">studio</span></a><span>Made for moments that matter.</span><small>© 2026 InviteStudio · MVP preview</small></footer>
    {notice&&<div className="notice" role="status"><Check size={16}/><span>{notice}</span><button aria-label="Dismiss notice" onClick={()=>setNotice('')}>×</button></div>}
  </div>
}