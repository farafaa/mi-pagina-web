const preloader = document.getElementById('preloader')
const textoAnimado = document.querySelector('.preloader-text-container')

if (preloader && textoAnimado) {
  textoAnimado.addEventListener('animationend', () => {
    preloader.classList.add('hide')
  })
}

const texto = document.querySelector('.cursor-texto')

if (texto) {
  const chars = texto.textContent.split('')
  const angleStep = 360 / chars.length
  texto.innerHTML = chars
    .map((char, i) => `<span style="transform: rotate(${i * angleStep}deg)">${char}</span>`)
    .join('')
}

const cursor = document.querySelector('.cursor-personalizado')

if (cursor) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
  })
}

const menuBtn = document.getElementById('menuBtn')
const menuOverlay = document.getElementById('menuOverlay')
const menuCerrar = document.getElementById('menuCerrar')

menuBtn.addEventListener('click', () => {
  menuOverlay.classList.add('activo')
})

menuCerrar.addEventListener('click', () => {
  menuOverlay.classList.remove('activo')
})

const comentariosSection = document.querySelector('.comentarios')

if (comentariosSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        comentariosSection.style.backgroundColor = entry.isIntersecting
          ? '#0d1117'
          : '#000000'
      })
    },
    { threshold: 0.3 }
  )
  observer.observe(comentariosSection)
}

const boton = document.getElementById('botonMusica')
const musica = document.getElementById('musica')

if (boton && musica) {
  boton.addEventListener('click', async () => {
    const isPlaying = boton.classList.contains('playing')

    if (isPlaying) {
      musica.pause()
      boton.classList.remove('playing')
    } else {
      try {
        await musica.play()
        boton.classList.add('playing')
      } catch (error) {
        console.warn('No se pudo reproducir el audio:', error)
      }
    }
  })
}