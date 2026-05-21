'use client'

import { useEffect, useState } from 'react'

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`topbar${scrolled ? ' topbar-scrolled' : ''}`}>
      <a className="brand" href="#">
        <span className="mark">P</span>
        <span>Pegasus Pixels</span>
      </a>
      <nav>
        <a href="#">Sistema</a>
        <a href="#">Casos</a>
        <a href="#">Operador</a>
        <a href="#">Diagnóstico</a>
        <a href="#">Precios</a>
      </nav>
      <div className="ctas">
        <a className="btn secondary" href="#">Iniciar sesión</a>
        <a className="btn primary" href="#">Agendar llamada <span className="arrow">→</span></a>
      </div>
    </header>
  )
}
