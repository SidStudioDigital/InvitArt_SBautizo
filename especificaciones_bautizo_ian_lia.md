# Especificaciones de diseño — Invitación web de Bautizo

## 1. Objetivo

Crear una invitación web inspirada en la referencia visual proporcionada, conservando su esencia **religiosa, elegante, cálida y familiar**, pero evitando una copia literal del diseño estático.

La versión web debe sentirse como una evolución del concepto original:

- Más limpia
- Más editorial
- Más moderna
- Más inmersiva
- Más fácil de leer en móvil
- Más atractiva visualmente
- Con microanimaciones suaves
- Con contenido configurable desde JSON

La referencia original funciona bien como invitación impresa, pero trasladarla literalmente a web sería una mala decisión: tiene demasiados elementos decorativos compitiendo entre sí, jerarquías tipográficas inconsistentes y mucha información concentrada en una sola composición vertical.

La web debe preservar el ADN visual sin heredar esas limitaciones.

---

# 2. ADN visual a conservar

## Concepto general

**Bautizo elegante en tonos marfil, beige, rosa empolvado y dorado suave.**

Sensaciones principales:

- Fe
- Ternura
- Elegancia
- Calidez
- Celebración familiar
- Delicadeza
- Tradición religiosa

La estética debe sentirse:

> clásica + floral + religiosa + romántica + editorial

Evitar una apariencia:

- infantil
- caricaturesca
- excesivamente recargada
- barroca
- kitsch
- demasiado brillante

---

# 3. Paleta de color

## Colores principales

```css
--ivory: #F6F1E8;
--warm-beige: #DED6C7;
--soft-beige: #E9E2D7;

--brown-main: #7C3F2F;
--brown-dark: #5B382F;

--olive-gray: #6F715E;
--sage-muted: #A9AA94;

--dusty-rose: #C99586;
--blush: #E0B7AA;

--gold-soft: #C5A15A;
--gold-light: #D8C18A;

--white: #FFFDF8;
```

## Uso recomendado

### Fondos

Principal:

```css
background: #F6F1E8;
```

Variantes:

```css
#FFFDF8
#E9E2D7
#DED6C7
```

### Texto principal

```css
color: #5B382F;
```

### Texto secundario

```css
color: #6F715E;
```

### Detalles decorativos

```css
color: #C5A15A;
```

### Flores / acentos

Usar combinaciones:

- blanco crema
- rosa empolvado
- durazno suave
- marrón terracota
- dorado champagne
- hojas verde salvia

---

# 4. Tratamiento de fondo

La referencia utiliza un fondo marfil con textura ligeramente orgánica.

La versión web debe usar:

```css
background:
  radial-gradient(circle at top, rgba(255,255,255,.65), transparent 50%),
  #F6F1E8;
```

Opcionalmente agregar una textura muy tenue:

- papel algodón
- grano fino
- papel artesanal

Opacidad máxima:

```css
opacity: 0.08;
```

Nunca debe parecer ruido visual.

---

# 5. Sistema tipográfico

La referencia mezcla serif, manuscrita y sans-serif. Esa combinación funciona conceptualmente, pero debe ordenarse.

## Tipografía display / nombres

Para nombres como:

> Ian & Lía

Usar script elegante.

Recomendaciones:

- Allura
- Parisienne
- Great Vibes
- Alex Brush
- Sacramento

Ejemplo:

```css
font-family: "Parisienne", cursive;
font-size: clamp(3rem, 10vw, 6rem);
font-weight: 400;
```

## Tipografía serif principal

Para:

- versículo
- títulos de secciones
- información religiosa
- textos destacados

Recomendaciones:

- Cormorant Garamond
- Libre Baskerville
- Playfair Display
- EB Garamond

Preferencia:

```css
font-family: "Cormorant Garamond", serif;
```

## Tipografía sans secundaria

Para:

- fecha
- hora
- botones
- pequeños labels
- textos funcionales

Recomendaciones:

- Montserrat
- Lato
- Raleway
- Inter

Preferencia:

```css
font-family: "Montserrat", sans-serif;
```

---

# 6. Jerarquía tipográfica

## Nombres

Máxima prioridad visual.

```css
font-size: clamp(3rem, 9vw, 5.5rem);
line-height: 0.95;
```

## Título del evento

Ejemplo:

```text
NUESTRO BAUTIZO
```

```css
font-size: clamp(1.6rem, 4vw, 2.4rem);
letter-spacing: 0.08em;
text-transform: uppercase;
```

## Fecha

Debe tener fuerte presencia visual.

Ejemplo:

```text
SÁBADO · 25 · OCTUBRE
2025
```

No copiar literalmente los separadores de la imagen.

Recomendación:

```css
letter-spacing: 0.14em;
```

## Cuerpo

```css
font-size: 1rem;
line-height: 1.7;
```

---

# 7. Composición general

La referencia es una composición vertical centrada.

En web debe transformarse a una narrativa por scroll.

## Orden recomendado

```text
Hero
↓
Versículo
↓
Presentación del bautizo
↓
Fecha
↓
Cuenta regresiva
↓
Ceremonia
↓
Recepción
↓
Sugerencia de regalo
↓
Confirmación
↓
Mensaje final
```

---

# 8. Hero section

## Objetivo

Generar impacto visual inmediato.

Debe ocupar aproximadamente:

```css
min-height: 100svh;
```

## Composición

Elementos:

1. Fondo marfil
2. Gran arreglo floral superior
3. Cruz o cáliz muy sutil
4. Nombres
5. Texto "Nuestro Bautizo"
6. Fecha
7. Indicador de scroll

### Estructura sugerida

```text
[ arreglo floral ]

Ian & Lía

NUESTRO BAUTIZO

25 · OCTUBRE · 2025

↓
```

---

# 9. Arreglo floral principal

La corona floral superior es uno de los elementos más importantes de la referencia.

Debe conservarse conceptualmente.

## Estilo

Flores:

- dalias blancas
- flores crema
- pequeñas margaritas
- flores blush
- flores beige
- hojas verde oliva

Detalles:

- pequeñas hojas doradas
- ramas finas
- pétalos semi translúcidos

## Composición

No debe ser perfectamente simétrica.

Debe parecer:

- orgánica
- abundante
- elegante
- ligera

## Web

Usar imagen PNG/WebP con transparencia.

Ejemplo:

```css
.hero-floral {
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  width: min(900px, 110vw);
}
```

En móvil:

```css
width: 130vw;
```

---

# 10. Elementos religiosos

La referencia usa:

- cáliz
- hostia IHS
- cruz

En web debe reducirse el peso visual de estos elementos.

## Regla

Máximo un elemento religioso protagonista por sección.

Por ejemplo:

### Hero

Cruz dorada translúcida.

### Ceremonia

Icono pequeño de cáliz.

### Footer

Pequeña cruz lineal.

No repetir cruces grandes en toda la página.

---

# 11. Versículo bíblico

La referencia usa Isaías 41:10.

Debe convertirse en una sección elegante y respirada.

Ejemplo:

```text
“No temas, porque yo estoy contigo;
porque yo soy tu Dios.
Te fortaleceré y te ayudaré...”

Isaías 41:10
```

## Diseño

Fondo ligeramente distinto:

```css
background: #E9E2D7;
```

Anchura de texto:

```css
max-width: 680px;
```

Alineación:

```css
text-align: center;
```

Decoración:

- pequeña rama floral superior
- línea dorada fina
- cruz diminuta

---

# 12. Sección de presentación

La cinta de la referencia puede reinterpretarse, no copiarse literalmente.

## Evitar

Una cinta PNG genérica con texto encima.

## Mejor opción

Crear una composición moderna:

```text
Ian
&
Lía
```

con adornos laterales.

Ejemplo:

```text
──── Ian & Lía ────
```

Opcionalmente integrar una cinta SVG minimalista.

---

# 13. Fecha

Debe tener su propia sección.

## Diseño sugerido

```text
SÁBADO

25

OCTUBRE

2025
```

Con "25" como elemento protagonista.

Ejemplo:

```css
.day-number {
  font-family: "Cormorant Garamond";
  font-size: clamp(5rem, 15vw, 9rem);
}
```

---

# 14. Cuenta regresiva

Agregar una mejora respecto a la referencia.

Formato:

```text
FALTAN

120     14     32     10
DÍAS   HORAS  MIN    SEG
```

## Diseño

- números serif
- labels sans-serif
- separadores mínimos

No usar tarjetas grandes estilo dashboard.

Debe integrarse con la estética de invitación.

---

# 15. Sección ceremonia

Debe mostrar:

```text
MISA

Parroquia San Felipe y Santiago
Sinaloa de Leyva, Sin.

12:00 p.m.

Pbro. Elías Tarsicio Soto Castro
```

## Composición

Card editorial.

No usar card SaaS con:

- sombra fuerte
- borde grueso
- fondo gris

Usar:

```css
background: rgba(255,255,255,.25);
border: 1px solid rgba(124,63,47,.15);
border-radius: 28px;
```

Incluir:

- icono de iglesia o cáliz
- botón "Ver ubicación"

---

# 16. Sección recepción

Contenido:

```text
RECEPCIÓN

Salón de Eventos Argyese
Baburía, Sin.

5:00 p.m.
```

Debe usar la misma arquitectura que ceremonia.

En desktop:

```text
[MISA]        [RECEPCIÓN]
```

En móvil:

```text
[MISA]

[RECEPCIÓN]
```

---

# 17. Botones

Estilo suave y elegante.

Ejemplo:

```css
border-radius: 999px;
padding: 0.85rem 1.5rem;
background: #7C3F2F;
color: #FFFDF8;
```

Hover:

```css
transform: translateY(-2px);
```

Transición:

```css
transition: all .25s ease;
```

---

# 18. Sugerencia de regalo

Texto:

```text
SUGERENCIA DE REGALO

Efectivo
```

Puede utilizar icono de sobre.

La referencia lo presenta de forma simple y funciona bien.

En web:

```text
[ icono sobre ]

Su presencia es nuestro mejor regalo.
Si desean obsequiarnos algo adicional,
agradecemos mucho una aportación en efectivo.
```

Esto mejora la redacción y evita que parezca una instrucción fría.

---

# 19. Confirmación de asistencia

Esta sección no aparece con suficiente protagonismo en la referencia y debe agregarse.

Contenido sugerido:

```text
CONFIRMA TU ASISTENCIA

Nos dará mucha alegría compartir este día contigo.
```

Botón:

```text
Confirmar por WhatsApp
```

Link configurable desde JSON.

---

# 20. Flores inferiores

La referencia tiene arreglos florales en ambas esquinas inferiores.

Debe mantenerse.

## Mejor implementación

Usar dos assets:

```text
bottom-left-floral.webp
bottom-right-floral.webp
```

Con:

```css
position: absolute;
bottom: 0;
```

La composición debe desvanecerse hacia el centro.

---

# 21. Animaciones

Las animaciones deben ser suaves.

## Hero

Flores:

```text
fade-in + translateY(-20px → 0)
```

Duración:

```text
1.2s
```

Nombres:

```text
fade-up
```

Duración:

```text
0.9s
```

Fecha:

```text
fade-up
delay: 250ms
```

---

# 22. Scroll reveal

Cada sección debe aparecer al entrar en viewport.

Usar:

```text
opacity: 0 → 1
translateY: 30px → 0
```

Duración:

```text
700ms
```

Easing:

```css
cubic-bezier(.22,.61,.36,1)
```

No animar todos los textos individualmente.

---

# 23. Parallax

Puede aplicarse únicamente a elementos decorativos.

Ejemplo:

- hojas flotantes
- flores
- pequeños brillos dorados

Movimiento máximo:

```text
15-30px
```

Evitar parallax fuerte.

---

# 24. Microanimaciones florales

Opcional.

Pequeñas ramas pueden tener:

```css
transform: rotate(-1deg);
```

con animación muy lenta.

Duración:

```text
8-12 segundos
```

El movimiento debe ser casi imperceptible.

---

# 25. Responsive

El diseño debe ser **mobile-first**.

Breakpoints:

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

## Mobile

- una columna
- tipografía fluida
- flores parcialmente fuera de pantalla
- botones full width en móviles pequeños
- máximo 24px de padding lateral

## Desktop

Usar:

```css
max-width: 1100px;
margin: 0 auto;
```

---

# 26. Layout

No replicar el formato póster de 720 × 1280.

El sitio debe ser responsive y vertical.

Recomendación:

```css
section {
  min-height: auto;
  padding: 7rem 1.5rem;
}
```

Hero:

```css
min-height: 100svh;
```

---

# 27. Configuración mediante JSON

Todo el contenido debe ser editable sin tocar componentes.

Ejemplo:

```json
{
  "event": {
    "type": "bautizo",
    "title": "Nuestro Bautizo",
    "date": "2025-10-25T12:00:00"
  },

  "children": [
    {
      "name": "Ian"
    },
    {
      "name": "Lía"
    }
  ],

  "verse": {
    "text": "No temas, porque yo estoy contigo; porque yo soy tu Dios. Te fortaleceré y te ayudaré...",
    "reference": "Isaías 41:10"
  },

  "ceremony": {
    "title": "Misa",
    "venue": "Parroquia San Felipe y Santiago",
    "city": "Sinaloa de Leyva, Sin.",
    "time": "12:00 p.m.",
    "priest": "Pbro. Elías Tarsicio Soto Castro",
    "mapsUrl": ""
  },

  "reception": {
    "title": "Recepción",
    "venue": "Salón de Eventos Argyese",
    "city": "Baburía, Sin.",
    "time": "5:00 p.m.",
    "mapsUrl": ""
  },

  "gift": {
    "enabled": true,
    "type": "cash",
    "label": "Sugerencia de regalo"
  },

  "rsvp": {
    "enabled": true,
    "whatsapp": "",
    "message": "Hola, confirmo mi asistencia al bautizo de Ian y Lía."
  }
}
```

---

# 28. Arquitectura de componentes

```text
src/
├── components/
│   ├── Hero.tsx
│   ├── BibleVerse.tsx
│   ├── EventIntro.tsx
│   ├── EventDate.tsx
│   ├── Countdown.tsx
│   ├── CeremonyCard.tsx
│   ├── ReceptionCard.tsx
│   ├── GiftSection.tsx
│   ├── RSVP.tsx
│   ├── FloralDecoration.tsx
│   └── Footer.tsx
│
├── data/
│   └── invitation.json
│
├── assets/
│   ├── floral-top.webp
│   ├── floral-bottom-left.webp
│   ├── floral-bottom-right.webp
│   └── cross.svg
│
└── styles/
```

---

# 29. Stack recomendado

Mantener el stack habitual del proyecto.

Sugerencia:

```text
React
TypeScript
Tailwind CSS
Vite
```

Opcional:

```text
Framer Motion
```

para animaciones.

No usar librerías pesadas si las animaciones pueden resolverse con CSS + IntersectionObserver.

---

# 30. Performance

Assets:

```text
WebP / AVIF
```

Usar:

```html
loading="lazy"
```

para imágenes fuera del hero.

Hero:

```html
fetchpriority="high"
```

Objetivo:

```text
Lighthouse Performance > 90
```

---

# 31. Accesibilidad

Obligatorio:

```text
contraste suficiente
alt en imágenes
focus visible
botones accesibles
prefers-reduced-motion
```

Ejemplo:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

# 32. Elementos que NO deben copiarse literalmente

## No copiar

- cinta gráfica exactamente igual
- cruz grande ocupando media composición
- tipografías mezcladas sin sistema
- dos columnas estrechas en móvil
- exceso de flores en todas las esquinas
- textos muy pequeños
- distribución tipo cartel impreso
- iconografía religiosa con apariencia clipart

## Sí conservar

- fondo marfil
- flores blancas y blush
- dorado
- marrón cálido
- estética religiosa
- nombres manuscritos
- versículo
- cruz/cáliz
- elegancia clásica

---

# 33. Mejora visual clave

La diferencia principal respecto a la referencia debe ser:

### Referencia

```text
Invitación impresa digitalizada
```

### Nueva versión

```text
Experiencia web editorial de bautizo
```

Esto significa utilizar:

- espacio negativo
- scroll
- transiciones
- tipografía grande
- fotografía o ilustraciones bien integradas
- jerarquía visual
- bloques respirados
- elementos flotantes sutiles

---

# 34. Dirección artística resumida

La frase que debe guiar todo el desarrollo:

> Una invitación de bautizo elegante y cálida, inspirada en papelería fina con flores blancas, tonos marfil y blush, detalles religiosos dorados y tipografía editorial; debe sentirse tradicional y espiritual, pero presentada como una experiencia web moderna, limpia y delicada.

---

# 35. Criterios de aceptación

La implementación se considera correcta cuando:

- [ ] La invitación conserva claramente la estética del diseño de referencia.
- [ ] No parece una copia literal del póster original.
- [ ] El diseño funciona perfectamente en móvil.
- [ ] Nombres y fecha son los principales puntos focales.
- [ ] Las flores son protagonistas decorativas, no ruido visual.
- [ ] Los elementos religiosos son elegantes y discretos.
- [ ] Existe jerarquía clara entre títulos, nombres e información.
- [ ] La ceremonia y recepción son fáciles de localizar.
- [ ] Existe acceso directo a mapas.
- [ ] Existe confirmación vía WhatsApp.
- [ ] Existe cuenta regresiva.
- [ ] El contenido puede modificarse desde JSON.
- [ ] Las animaciones son sutiles.
- [ ] La página mantiene buen rendimiento.
- [ ] El diseño se siente premium y no como una plantilla genérica.
