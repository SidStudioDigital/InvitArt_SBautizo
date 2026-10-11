import { useEffect, useRef, useState, type RefObject } from 'react'
import { Cross, Gift, MapPin, Music, Pause, Play, Send } from 'lucide-react'
import data from './data/invitation.json'
import paperBackground from './data/FondoBautizo.webp'

function Countdown() {
  const [seconds, setSeconds] = useState(() => Math.max(0, Math.floor((new Date(data.event.date).getTime() - Date.now()) / 1000)))
  useEffect(() => {
    const timer = window.setInterval(() => setSeconds(Math.max(0, Math.floor((new Date(data.event.date).getTime() - Date.now()) / 1000))), 1000)
    return () => window.clearInterval(timer)
  }, [])
  if (seconds === 0) return <p className="countdown__past">Celebramos este dia de fe</p>
  const units = [[Math.floor(seconds / 86400), 'DIAS'], [Math.floor(seconds / 3600) % 24, 'HRS'], [Math.floor(seconds / 60) % 60, 'MIN'], [seconds % 60, 'SEG']]
  return <div className="countdown">{units.map(([value, label]) => <div key={String(label)}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}</div>
}

function MusicControl({ shouldAutoplay }: { shouldAutoplay: boolean }) {
  const audio = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const autoplayAttempted = useRef(false)
  useEffect(() => {
    if (!shouldAutoplay || autoplayAttempted.current || !audio.current) return
    autoplayAttempted.current = true
    audio.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }, [shouldAutoplay])
  const toggle = async () => {
    if (!audio.current) return
    if (playing) { audio.current.pause(); setPlaying(false); return }
    try { await audio.current.play(); setPlaying(true) } catch { setPlaying(false) }
  }
  return <><audio ref={audio} src={data.music.url} loop preload="none" onEnded={() => setPlaying(false)} /><button className="music" onClick={toggle} aria-label={playing ? 'Pausar musica' : 'Reproducir musica'}>{playing ? <Pause size={16} /> : <Play size={16} />}<span>{playing ? 'Pausar' : 'Musica'}</span></button></>
}

function EventBlock({ type, event }: { type: 'CEREMONIA' | 'RECEPCION'; event: { name: string; place: string; time: string; mapsUrl: string; celebrant?: string } }) {
  return <section className="paper-section event-block"><p className="label">{type}</p><h3>{event.name}</h3><p>{event.place}</p><time>{event.time}</time>{'celebrant' in event && <p className="celebrant">Celebrara<br />{event.celebrant}</p>}{event.mapsUrl && <a href={event.mapsUrl} target="_blank" rel="noreferrer" className="paper-link">Ver ubicacion <MapPin size={14} /></a>}</section>
}

function Letter({ titleRef }: { titleRef: RefObject<HTMLHeadingElement | null> }) {
  const rsvpUrl = data.rsvp.phone ? `https://wa.me/${data.rsvp.phone}?text=${encodeURIComponent(data.rsvp.message)}` : undefined
  const [hasScrolled, setHasScrolled] = useState(false)
  return <article id="invitation-letter" className={`letter ${hasScrolled ? 'letter--scrolled' : ''}`} aria-label="Contenido de la invitacion" onScroll={(event) => setHasScrolled(event.currentTarget.scrollTop > 12)} style={{ backgroundImage: `url(${paperBackground})`, backgroundPosition: 'center top', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
    <div className="letter__intro"><Cross size={25} strokeWidth={1.2} /><h1 ref={titleRef} tabIndex={-1}>{data.children[0]} <em>&</em> {data.children[1]}</h1><p className="letter__occasion">NUESTRO BAUTIZO</p><p className="letter__date">{data.event.weekday} · {data.event.day} · {data.event.month}</p><span className="year">{data.event.year}</span></div>
    <p className="letter__scroll-cue" aria-hidden="true">Desliza la hoja para continuar <span>↓</span></p>
    <section className="paper-section verse"><p>“{data.verse.text}”</p><cite>{data.verse.reference}</cite></section>
    <section className="paper-section welcome"><Cross size={20} strokeWidth={1.1} /><p>Con la bendicion de Dios y el amor de nuestra familia, te invitamos a celebrar un momento muy especial en nuestras vidas.</p></section>
    <section className="paper-section day"><p className="label">GUARDA LA FECHA</p><div><strong>{data.event.day}</strong><span>{data.event.month}<small>{data.event.year}</small></span></div><p>{data.event.weekday} · {data.ceremony.time}</p></section>
    <section className="paper-section"><p className="label">FALTAN</p><Countdown /></section>
    <EventBlock type="CEREMONIA" event={data.ceremony} />
    <EventBlock type="RECEPCION" event={data.reception} />
    <section className="paper-section gift"><Gift size={22} strokeWidth={1.1} /><p className="label">SUGERENCIA DE REGALO</p><p>{data.gift}</p></section>
    <section className="paper-section confirmation"><Send size={21} strokeWidth={1.2} /><p className="label">CONFIRMACION</p><p>Agradecemos confirmar tu asistencia.</p>{rsvpUrl ? <a className="paper-button" href={rsvpUrl} target="_blank" rel="noreferrer">Confirmar asistencia</a> : <p className="confirmation__note">Contacto de confirmacion pendiente.</p>}</section>
    <footer><Cross size={19} strokeWidth={1.1} /><p>{data.closing}</p><strong>{data.children[0]} & {data.children[1]}</strong></footer>
  </article>
}

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const [openedByControl, setOpenedByControl] = useState(false)
  const letterTitle = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    let frame = 0
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => setScrollY(window.scrollY)) }
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll) }
  }, [])
  const turned = scrollY >= 100
  const extracted = scrollY >= 500 || openedByControl
  const openInvitation = () => {
    setOpenedByControl(true)
    window.setTimeout(() => letterTitle.current?.focus(), 750)
  }
  return <main className={`world ${turned ? 'world--turned' : ''} ${extracted ? 'world--extracted' : ''}`}>
    <div className="scroll-space" aria-hidden="true" />
    <div className="scroll-message" aria-hidden="true"><span>{extracted ? 'Lee la invitacion' : turned ? 'Continua para sacar la hoja' : 'Desliza para abrir'}</span></div>
    {!extracted && <button className="open-control" onClick={openInvitation} aria-expanded={extracted} aria-controls="invitation-letter">Abrir invitacion</button>}
    <div className="stage"><div className="envelope">
      <div className="face face--front"><Cross size={28} strokeWidth={1.05} /><p>PARA TI</p><strong>{data.children[0]} & {data.children[1]}</strong></div>
      <div className="face face--back"><span className="flap" /><span className="fold fold--left" /><span className="fold fold--right" /><span className="fold fold--bottom" /><Letter titleRef={letterTitle} /></div>
    </div></div>
    <MusicControl shouldAutoplay={extracted} />
  </main>
}
