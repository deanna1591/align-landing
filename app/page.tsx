// app/page.tsx — realign.day homepage
// "Plan like it's the 2000s." Full Y2K rebrand, self-contained: this file
// carries its own header, footer, fonts, and styles. Swapping it in replaces
// the old waitlist-era homepage; old section components stay in the repo
// unused and can be deleted later.

export const metadata = {
  title: { absolute: "Align ✦ plan like it's the 2000s" },
  description:
    'A tiny Y2K planner with a big heart: pick three things, close the day. Comes with a photobooth, stickers, cut-out letters, and your own cassette mixtape.',
};

const INK = '#36215C';
const C = {
  bg: '#FEFBFD', ink: INK, ink2: '#6E5499', ink3: '#9F88C9',
  accent: '#FF5FB0', warm: '#9B5CFF', sun: '#FCD93D', sky: '#3FB8DE',
  card: '#FFFDF9', border: '#C9B8E6', pinkSoft: '#FFD9EE',
};

/* ---------- tiny building blocks ---------- */

function Bar({ bg, name, side }: { bg: string; name: string; side?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: bg, borderBottom: `2.5px solid ${INK}` }}>
      <span style={{ width: 11, height: 11, borderRadius: 99, background: '#FF6FB5', border: `2px solid ${INK}` }} />
      <span style={{ width: 11, height: 11, borderRadius: 99, background: C.sun, border: `2px solid ${INK}` }} />
      <span style={{ flex: 1, fontFamily: "'VT323', monospace", fontSize: 20, letterSpacing: '.06em', textTransform: 'uppercase', color: INK, marginLeft: 2 }}>{name}</span>
      {side && <span style={{ fontFamily: "'VT323', monospace", fontSize: 17, color: C.ink2 }}>{side}</span>}
    </div>
  );
}

function Win({ children, barBg, name, side, style = {} }: any) {
  return (
    <div style={{ background: C.card, border: `2.5px solid ${INK}`, borderRadius: 14, boxShadow: '5px 5px 0 rgba(54,33,92,.18)', overflow: 'hidden', ...style }}>
      <Bar bg={barBg} name={name} side={side} />
      {children}
    </div>
  );
}

function Lt({ ch, bg, fg, rot, font }: { ch: string; bg: string; fg: string; rot: number; font?: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: '1.06em', height: '1.2em', background: bg, color: fg,
      border: '3px solid #fff', borderRadius: '.12em',
      boxShadow: '.05em .07em .12em rgba(54,33,92,.32)',
      transform: `rotate(${rot}deg)`, margin: '0 .035em',
      fontFamily: font || 'inherit', fontWeight: 800, fontSize: '.92em', lineHeight: 1,
    }}>{ch}</span>
  );
}

const Task = ({ done, hl, children }: any) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', fontSize: 15, color: done ? C.ink3 : INK, textDecoration: done ? 'line-through' : 'none' }}>
    <span style={{ width: 17, height: 17, borderRadius: 5, border: `2.5px solid ${INK}`, background: done ? C.accent : '#fff', flexShrink: 0 }} />
    <span style={hl ? { background: C.pinkSoft, borderRadius: 5, padding: '1px 7px' } : {}}>{children}</span>
  </div>
);

/* ---------- the page ---------- */

export default function HomePage() {
  const marquee = '★ momentum, not pressure ★ pick three things ★ close the day ★ plan like it\u2019s 2003 ★ so cute ★ drama-free ★ ';
  return (
    <div style={{ background: C.bg, color: INK, fontFamily: "'Inter Tight', system-ui, sans-serif", overflowX: 'hidden' }}>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet" />
      <style>{`
        .grid-bg{background-image:linear-gradient(rgba(255,255,255,.75) 1.5px,transparent 1.5px),linear-gradient(90deg,rgba(255,255,255,.75) 1.5px,transparent 1.5px);background-size:26px 26px;}
        @keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes bob{0%,100%{transform:translateY(0) rotate(var(--r,0deg))}50%{transform:translateY(-12px) rotate(var(--r,0deg))}}
        @keyframes blink{0%,55%{opacity:1}56%,100%{opacity:0}}
        .bob{animation:bob 4.2s ease-in-out infinite;}
        .btn{display:inline-block;border:2.5px solid ${INK};border-radius:12px;box-shadow:4px 4px 0 rgba(54,33,92,.22);font-weight:700;text-decoration:none;transition:transform .12s ease, box-shadow .12s ease;}
        .btn:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 rgba(54,33,92,.22);}
        .feat{display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:26px;}
        .navlinks a{color:${C.ink2};text-decoration:none;font-weight:600;font-size:14px;}
        .navlinks a:hover{color:${C.accent};}
        @media (max-width:640px){ .hero-h{font-size:13vw !important;} .navlinks{display:none;} }
      `}</style>

      {/* ===== header ===== */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(254,251,253,.92)', backdropFilter: 'blur(8px)', borderBottom: `2.5px solid ${INK}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 26, padding: '14px 20px' }}>
          <a href="/" style={{ textDecoration: 'none', color: INK, display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 17 }}>align</span>
            <span style={{ fontSize: 15 }}>✦💜✦</span>
          </a>
          <nav className="navlinks" style={{ display: 'flex', gap: 22, marginLeft: 'auto' }}>
            <a href="#toys">the toys</a>
            <a href="#vibe">the vibe</a>
            <a href="#faq">faq</a>
          </nav>
          <a className="btn" href="https://app.realign.day" style={{ background: C.accent, color: '#fff', fontSize: 14, padding: '10px 20px', marginLeft: 8 }}>open the app ✦</a>
        </div>
      </header>

      {/* ===== marquee ===== */}
      <div style={{ background: INK, overflow: 'hidden', padding: '8px 0', borderBottom: `2.5px solid ${INK}` }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'mq 22s linear infinite', fontFamily: "'VT323', monospace", fontSize: 19, letterSpacing: '.14em', color: C.sun, textTransform: 'uppercase' }}>
          <span>{marquee}{marquee}</span>
        </div>
      </div>

      {/* ===== hero ===== */}
      <section className="grid-bg" style={{ position: 'relative', padding: '84px 20px 70px', textAlign: 'center' }}>
        {/* floating stickers */}
        <div className="bob" style={{ position: 'absolute', left: '6%', top: 90, fontSize: 58, ['--r' as any]: '-12deg', filter: 'drop-shadow(3px 4px 4px rgba(54,33,92,.28))' }}>🦋</div>
        <div className="bob" style={{ position: 'absolute', right: '7%', top: 130, fontSize: 52, ['--r' as any]: '10deg', animationDelay: '.6s', filter: 'drop-shadow(3px 4px 4px rgba(54,33,92,.28))' }}>💖</div>
        <div className="bob" style={{ position: 'absolute', left: '12%', bottom: 110, fontSize: 46, ['--r' as any]: '8deg', animationDelay: '1.2s', filter: 'drop-shadow(3px 4px 4px rgba(54,33,92,.28))' }}>📟</div>
        <div className="bob" style={{ position: 'absolute', right: '13%', bottom: 80, ['--r' as any]: '-6deg', animationDelay: '.3s', background: C.accent, color: '#fff', border: '3px solid #fff', borderRadius: 99, boxShadow: '3px 4px 6px rgba(54,33,92,.3)', fontFamily: "'VT323', monospace", fontSize: 22, letterSpacing: '.12em', padding: '6px 18px' }}>XOXO</div>

        <div style={{ fontFamily: "'VT323', monospace", fontSize: 22, letterSpacing: '.2em', color: C.accent, textTransform: 'uppercase' }}>✦ a tiny planner with a big heart ✦</div>
        <h1 className="hero-h" style={{ fontSize: 'clamp(44px, 7.6vw, 104px)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-1px', margin: '22px auto 8px', maxWidth: 980 }}>
          Plan like it&apos;s<br />
          the{' '}
          <Lt ch="2" bg={C.accent} fg="#fff" rot={-4} font="Georgia, serif" />
          <Lt ch="0" bg={C.sun} fg={INK} rot={3} />
          <Lt ch="0" bg={C.warm} fg="#fff" rot={-2} font="'Courier New', monospace" />
          <Lt ch="0" bg={C.sky} fg="#fff" rot={4} font="Georgia, serif" />
          <Lt ch="s" bg={INK} fg={C.sun} rot={-3} />
          <span style={{ marginLeft: '.06em' }}>.</span>
        </h1>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: 24, color: C.ink2, maxWidth: 620, margin: '18px auto 0', lineHeight: 1.4 }}>
          pick three things. close the day. decorate everything.<span style={{ animation: 'blink 1.1s step-end infinite' }}>▌</span>
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 36 }}>
          <a className="btn" href="https://app.realign.day" style={{ background: C.accent, color: '#fff', fontSize: 16, padding: '14px 30px' }}>★ start free — it takes 30 seconds</a>
          <a className="btn" href="#toys" style={{ background: C.card, color: INK, fontSize: 16, padding: '14px 30px' }}>see the toys ↓</a>
        </div>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: 17, color: C.ink3, marginTop: 22, letterSpacing: '.08em' }}>WORKS IN YOUR BROWSER · iOS APP COMING SOON ✦</p>
      </section>

      {/* ===== the toys ===== */}
      <section id="toys" style={{ maxWidth: 1120, margin: '0 auto', padding: '70px 20px 30px' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{ fontFamily: "'VT323', monospace", fontSize: 20, letterSpacing: '.2em', color: C.warm, textTransform: 'uppercase' }}>✦ what&apos;s inside ✦</div>
          <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: 800, margin: '10px 0 0' }}>A planner. And also the toys.</h2>
        </div>

        <div className="feat">
          {/* TODAY */}
          <Win barBg="#FFB3DE" name="Today.exe" side="♥">
            <div style={{ padding: '18px 20px 20px' }}>
              <Task done>pickup prescription</Task>
              <Task hl>revamp assessment (AI)</Task>
              <Task hl>car wash</Task>
              <div style={{ background: 'rgba(155,92,255,.06)', border: `2px solid #ECE0F8`, borderRadius: 10, padding: '8px 12px', margin: '12px 0 14px', fontFamily: "'VT323', monospace", fontSize: 17, color: C.ink3, textTransform: 'uppercase', letterSpacing: '.05em' }}>↩ leftover · yesterday follows you here, automatically</div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: C.ink2 }}><b style={{ color: INK }}>Three things a day.</b> That&apos;s the whole rule. Unfinished tasks roll into today on their own — nothing slips, nothing shames.</p>
            </div>
          </Win>

          {/* PHOTOBOOTH */}
          <Win barBg={C.sky} name="Photobooth.exe" side="●REC">
            <div style={{ padding: '18px 20px 20px' }}>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 14 }}>
                {[{ r: -4, p: C.accent, g: false }, { r: 3, p: C.sun, g: true }, { r: -2, p: C.warm, g: false }].map((s, i) => (
                  <div key={i} style={{ width: 74, background: '#fff', border: `2.5px solid ${INK}`, borderRadius: 5, padding: '4px 4px 1px', boxShadow: '3px 3px 0 rgba(54,33,92,.16)', transform: `rotate(${s.r}deg)`, position: 'relative', filter: s.g ? 'grayscale(1)' : 'none' }}>
                    <span style={{ position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)', width: 10, height: 10, borderRadius: 99, background: s.p, border: `2px solid ${INK}`, zIndex: 2 }} />
                    {[['#DAC4FF', '#FFB3DE'], ['#FFB3DE', '#FCD93D'], ['#9B5CFF', '#3FB8DE']].map((g, j) => (
                      <div key={j} style={{ aspectRatio: '4/3', borderRadius: 2, border: '1.5px solid #FFB3DE', marginBottom: 3, background: `linear-gradient(135deg, ${g[0]}, ${g[1]})` }} />
                    ))}
                    <div style={{ fontFamily: "'VT323', monospace", fontSize: 9, textAlign: 'center', color: C.ink2 }}>align ✦ 06.12</div>
                  </div>
                ))}
              </div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: C.ink2 }}><b style={{ color: INK }}>A real photobooth.</b> Three shots, a countdown, a flash — your strip prints out and pins to your wall. Forever yours, private to you.</p>
            </div>
          </Win>

          {/* STICKERS */}
          <Win barBg={C.pinkSoft} name="Stickers.exe" side="✂">
            <div style={{ padding: '18px 20px 20px' }}>
              <div style={{ textAlign: 'center', margin: '4px 0 6px', fontSize: 34 }}>
                <Lt ch="S" bg={C.accent} fg="#fff" rot={-5} font="Georgia, serif" />
                <Lt ch="O" bg={C.sun} fg={INK} rot={4} />
                <span style={{ display: 'inline-block', width: 12 }} />
                <Lt ch="C" bg="#fff" fg="#E0246F" rot={-3} font="'Courier New', monospace" />
                <Lt ch="U" bg={C.warm} fg="#fff" rot={5} />
                <Lt ch="T" bg={C.sky} fg="#fff" rot={-2} font="Georgia, serif" />
                <Lt ch="E" bg={INK} fg={C.sun} rot={3} />
              </div>
              <div style={{ textAlign: 'center', fontSize: 26, margin: '2px 0 12px', letterSpacing: 6 }}>🦋💖⭐🍒👑📼</div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: C.ink2 }}><b style={{ color: INK }}>Decorate everything.</b> Glossy Y2K stickers and a cut-out magazine alphabet — drag them anywhere, pin them like a locker door, spell whatever you&apos;re feeling.</p>
            </div>
          </Win>

          {/* TAPE */}
          <Win barBg="#E8EAEF" name="Tape.exe" side="♪">
            <div style={{ padding: '18px 20px 20px' }}>
              <div style={{ width: 188, margin: '0 auto 14px', background: 'linear-gradient(160deg,#fff,#E8EAEF)', border: `2.5px solid ${INK}`, borderRadius: 14, padding: 10, boxShadow: '4px 4px 0 rgba(54,33,92,.16)' }}>
                <div style={{ border: `2px solid ${INK}`, borderRadius: 8, background: '#0F1014', padding: '8px 10px', marginBottom: 10 }}>
                  <div style={{ fontFamily: "'VT323', monospace", fontSize: 12, color: '#7DD87F' }}>♪ NOW PLAYING</div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 12, marginTop: 2 }}>your y2k playlist</div>
                  <div style={{ height: 4, background: '#2A2D36', borderRadius: 3, marginTop: 6 }}><div style={{ width: '40%', height: '100%', background: '#7DD87F', borderRadius: 3 }} /></div>
                </div>
                <div style={{ border: `2px solid ${INK}`, borderRadius: 10, background: 'linear-gradient(160deg,#FBE3F1,#F3D2E7)', padding: '10px 12px', marginBottom: 10 }}>
                  <div style={{ textAlign: 'center', fontFamily: "'VT323', monospace", fontSize: 12, letterSpacing: 2, color: INK, opacity: 0.8, marginBottom: 8 }}>✦ MIXTAPE ✦</div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 28 }}>
                    {[0, 1].map((i) => (
                      <div key={i} style={{ position: 'relative', width: 34, height: 34, borderRadius: 99, border: `2px solid ${INK}`, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ position: 'absolute', width: 2, height: 13, background: INK, opacity: 0.35 }} />
                        <div style={{ position: 'absolute', width: 2, height: 13, background: INK, opacity: 0.35, transform: 'rotate(60deg)' }} />
                        <div style={{ position: 'absolute', width: 2, height: 13, background: INK, opacity: 0.35, transform: 'rotate(120deg)' }} />
                        <div style={{ width: 11, height: 11, borderRadius: 99, border: `2px solid ${INK}`, background: '#FBE3F1', zIndex: 1 }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 5 }}>
                  {([['⏮', 1, '#fff', INK], ['▶', 1.5, C.accent, '#fff'], ['⏭', 1, '#fff', INK], ['≣', 1, '#fff', INK]] as [string, number, string, string][]).map(([lab, fl, bg, fg], i) => (
                    <div key={i} style={{ flex: fl, textAlign: 'center', border: `2px solid ${INK}`, borderRadius: 6, background: bg, color: fg, fontFamily: "'VT323', monospace", fontSize: 13, padding: '4px 0', boxShadow: '2px 2px 0 rgba(54,33,92,.18)' }}>{lab}</div>
                  ))}
                </div>
              </div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: C.ink2 }}><b style={{ color: INK }}>Your mixtape, on a tape deck.</b> Paste your Spotify playlist once — it lives on a draggable little cassette player. Plan to the soundtrack.</p>
            </div>
          </Win>

          {/* TRY TODAY */}
          <Win barBg={C.sun} name="Try_today.exe" side="0/200">
            <div style={{ padding: '18px 20px 20px' }}>
              <div style={{ fontFamily: "'VT323', monospace", fontSize: 16, color: C.accent, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>day 1 ✦</div>
              <div style={{ fontWeight: 800, fontSize: 17, lineHeight: 1.35, marginBottom: 12 }}>Drink your coffee without doing anything else at the same time.</div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                <span style={{ background: C.accent, color: '#fff', border: `2px solid ${INK}`, borderRadius: 8, fontWeight: 700, fontSize: 12, padding: '6px 12px', boxShadow: '2px 2px 0 rgba(54,33,92,.2)' }}>I did it — reflect</span>
                <span style={{ background: '#fff', color: INK, border: `2px solid ${INK}`, borderRadius: 8, fontWeight: 700, fontSize: 12, padding: '6px 12px', boxShadow: '2px 2px 0 rgba(54,33,92,.2)' }}>tell me more</span>
              </div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: C.ink2 }}><b style={{ color: INK }}>200 tiny days.</b> One gentle thing to try each morning, a place to reflect, and a tracker that fills up pink. Momentum, not pressure.</p>
            </div>
          </Win>

          {/* WEEK + SYNC */}
          <Win barBg="#DAC4FF" name="Week.exe" side="⊙ synced">
            <div style={{ padding: '18px 20px 20px' }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
                {[['THU ★', '#FF8AD0'], ['FRI', '#E6DAF5'], ['SAT', '#E6DAF5']].map(([d, bg], i) => (
                  <div key={i} style={{ flex: 1, border: `2px solid ${INK}`, borderRadius: 8, overflow: 'hidden', background: C.card }}>
                    <div style={{ background: bg as string, borderBottom: `2px solid ${INK}`, fontFamily: "'VT323', monospace", fontSize: 14, textAlign: 'center', padding: '3px 0', letterSpacing: '.06em' }}>{d}</div>
                    <div style={{ padding: 7 }}>
                      <div style={{ height: 7, background: C.pinkSoft, borderRadius: 4, marginBottom: 5 }} />
                      <div style={{ height: 7, background: '#E2ECF7', borderRadius: 4, marginBottom: 5 }} />
                      {i === 0 && <div style={{ height: 7, background: C.pinkSoft, borderRadius: 4 }} />}
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: C.ink2 }}><b style={{ color: INK }}>The week at a glance</b> — with your Google Calendar synced both ways. Add a task with a time, it lands on your calendar. Delete it, it&apos;s gone.</p>
            </div>
          </Win>
        </div>

        {/* small chips row */}
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 30 }}>
          {['🧠 brain-dump quick capture', '🔥 streaks that forgive', '📌 a dock for your toys', '🔒 private by default'].map(t => (
            <span key={t} style={{ background: C.card, border: `2px solid ${INK}`, borderRadius: 99, boxShadow: '3px 3px 0 rgba(54,33,92,.16)', fontFamily: "'VT323', monospace", fontSize: 18, letterSpacing: '.04em', padding: '8px 18px' }}>{t}</span>
          ))}
        </div>
      </section>

      {/* ===== the vibe ===== */}
      <section id="vibe" className="grid-bg" style={{ borderTop: `2.5px solid ${INK}`, borderBottom: `2.5px solid ${INK}`, margin: '70px 0 0', padding: '60px 20px', textAlign: 'center', background: C.pinkSoft }}>
        <div style={{ fontSize: 'clamp(30px, 5vw, 58px)', fontWeight: 800 }}>
          <Lt ch="M" bg={C.warm} fg="#fff" rot={-4} font="Georgia, serif" />
          <Lt ch="A" bg={C.sun} fg={INK} rot={3} />
          <Lt ch="I" bg={C.accent} fg="#fff" rot={-2} font="'Courier New', monospace" />
          <Lt ch="N" bg={C.sky} fg="#fff" rot={4} />
          <span style={{ display: 'inline-block', width: '.45em' }} />
          <Lt ch="C" bg={INK} fg={C.sun} rot={-3} />
          <Lt ch="H" bg={C.accent} fg="#fff" rot={2} font="Georgia, serif" />
          <Lt ch="A" bg="#fff" fg="#E0246F" rot={-4} />
          <Lt ch="R" bg={C.warm} fg="#fff" rot={3} font="'Courier New', monospace" />
          <Lt ch="A" bg={C.sun} fg={INK} rot={-2} />
          <Lt ch="C" bg={C.sky} fg="#fff" rot={4} font="Georgia, serif" />
          <Lt ch="T" bg={C.accent} fg="#fff" rot={-3} />
          <Lt ch="E" bg={INK} fg={C.sun} rot={2} />
          <Lt ch="R" bg="#fff" fg="#E0246F" rot={-4} font="Georgia, serif" />
        </div>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: 22, color: C.ink2, marginTop: 18 }}>
          energy. your planner shouldn&apos;t feel like a spreadsheet — it should feel like your locker door.
        </p>
      </section>

      {/* ===== faq ===== */}
      <section id="faq" style={{ maxWidth: 720, margin: '0 auto', padding: '70px 20px 30px' }}>
        <Win barBg="#DAC4FF" name="Faq.exe" side="?">
          <div style={{ padding: '8px 22px 16px' }}>
            {[
              ['Is it free?', 'Yes — open the app and start planning. No card, no waitlist, no drama.'],
              ['Does it work on my phone?', 'It works in any browser today and installs to your home screen like an app. A native iOS app is on the way.'],
              ['Wait, a photobooth? In a planner?', 'Yes. Three shots, a flash, a printed strip pinned to your wall. Documenting tiny wins is the point — momentum, not pressure.'],
              ['Is my stuff private?', 'Your tasks, photos, and reflections are yours alone. The fine print lives in our privacy policy, and music plays through Spotify\u2019s own player.'],
            ].map(([q, a], i, arr) => (
              <div key={q} style={{ padding: '15px 0', borderBottom: i < arr.length - 1 ? `2px dashed ${C.border}` : 'none' }}>
                <div style={{ fontWeight: 800, fontSize: 15.5, marginBottom: 5 }}>{q}</div>
                <div style={{ fontSize: 14.5, color: C.ink2, lineHeight: 1.6 }}>{a}</div>
              </div>
            ))}
          </div>
        </Win>
      </section>

      {/* ===== final cta ===== */}
      <section className="grid-bg" style={{ textAlign: 'center', padding: '70px 20px 90px' }}>
        <div style={{ fontFamily: "'VT323', monospace", fontSize: 20, letterSpacing: '.2em', color: C.accent, textTransform: 'uppercase' }}>✦ ok bestie ✦</div>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, margin: '14px 0 26px' }}>Three things. Today.</h2>
        <a className="btn" href="https://app.realign.day" style={{ background: C.accent, color: '#fff', fontSize: 17, padding: '16px 36px' }}>★ open align — it&apos;s free</a>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: 17, color: C.ink3, marginTop: 20, letterSpacing: '.08em' }}>NO CREDIT CARD · NO WAITLIST · JUST VIBES</p>
      </section>

      {/* ===== footer ===== */}
      <footer style={{ borderTop: `2.5px solid ${INK}`, background: C.card }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '26px 20px', display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center' }}>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 13 }}>align ✦</span>
          <nav style={{ display: 'flex', gap: 18, flexWrap: 'wrap', fontSize: 13 }}>
            {[['/about', 'about'], ['/privacy', 'privacy'], ['/terms', 'terms'], ['/support', 'support'], ['/google-data-use', 'google data use']].map(([h, l]) => (
              <a key={h} href={h} style={{ color: C.ink2, textDecoration: 'none' }}>{l}</a>
            ))}
          </nav>
          <span style={{ marginLeft: 'auto', fontFamily: "'VT323', monospace", fontSize: 16, color: C.ink3, letterSpacing: '.06em' }}>
            you are visitor № 1,337,420 ✦ made with 💜 in phoenix ✦ © {new Date().getFullYear()}
          </span>
        </div>
        <div style={{ background: INK, textAlign: 'center', padding: '7px 0', fontFamily: "'VT323', monospace", fontSize: 16, letterSpacing: '.18em', color: C.sun, textTransform: 'uppercase' }}>
          ★ momentum, not pressure ★
        </div>
      </footer>
    </div>
  );
}
