# Guía de estilos — Invitación Bautizo / Comunión

## 1. Dirección visual

La invitación debe mantener una estética:

- Elegante
- Delicada
- Celestial
- Religiosa / sacramental
- Infantil refinada
- Luminosa
- Romántica
- Minimalista con ornamentos suaves

La referencia visual se apoya en tonos marfil, beige, champagne y dorado tenue, combinados con blancos cálidos y verdes salvia muy desaturados.

> Concepto visual: **Elegancia sacramental en tonos marfil, beige y dorado suave, con atmósfera celestial, detalles florales delicados y composición limpia.**

---

## 2. Paleta de colores

### Colores principales

| Uso | Color | HEX |
|---|---|---|
| Fondo principal | Marfil cálido | `#FCF4EA` |
| Fondo secundario | Crema suave | `#F6EDDF` |
| Fondo alternativo | Beige claro | `#EDE1CF` |
| Acento claro | Beige arena | `#E3CFAF` |
| Acento principal | Champagne | `#D1B591` |
| Dorado suave | Dorado champagne | `#CAA778` |

### Colores secundarios

| Uso | Color | HEX |
|---|---|---|
| Verde ornamental | Verde salvia apagado | `#B8AC89` |
| Acento oscuro | Taupe cálido | `#AB966D` |
| Texto secundario | Marrón dorado | `#92764F` |
| Texto principal | Oliva / café profundo | `#615630` |

### Distribución recomendada

- 70% — fondos claros: `#FCF4EA`, `#F6EDDF`
- 20% — beige y champagne: `#E3CFAF`, `#D1B591`
- 8% — dorado y taupe: `#CAA778`, `#AB966D`
- 2% — colores oscuros para contraste: `#615630`, `#92764F`

---

## 3. Variables CSS

```css
:root {
  --bg-main: #FCF4EA;
  --bg-soft: #F6EDDF;
  --bg-section: #EDE1CF;

  --accent-beige: #E3CFAF;
  --accent-champagne: #D1B591;
  --accent-gold: #CAA778;
  --accent-sage: #B8AC89;

  --text-main: #615630;
  --text-soft: #92764F;

  --border-soft: #AB966D;
}
```

---

## 4. Fondo general

El fondo no debe ser blanco puro.

### Recomendado

```css
body {
  background:
    radial-gradient(
      circle at center,
      rgba(255,255,255,0.85) 0%,
      rgba(252,244,234,0.95) 60%,
      #F6EDDF 100%
    );
  color: #615630;
}
```

### Características

- Muy luminoso
- Marfil o crema
- Sin contrastes duros
- Puede incluir textura de papel extremadamente sutil
- Puede incluir manchas tipo acuarela
- Se permiten nubes, halos o brillos desenfocados
- Los ornamentos deben concentrarse principalmente en bordes y esquinas

Evitar llenar todo el fondo con elementos decorativos.

---

## 5. Estilo de ilustraciones

Las ilustraciones deben parecer:

- Acuarela
- Pintura digital suave
- Alta exposición
- Bordes difuminados
- Colores pastel
- Saturación baja
- Contraste bajo

### Elementos compatibles

- Flores blancas
- Follaje beige o verde salvia
- Ramitas
- Palomas
- Cruces
- Nubes
- Destellos
- Velas
- Ángeles discretos
- Rosarios
- Vestimenta ceremonial
- Lazos
- Encaje

### Evitar

- Dibujos tipo cartoon
- Iconografía flat muy moderna
- Colores infantiles saturados
- Ilustraciones con contornos negros gruesos
- Elementos 3D brillantes

---

## 6. Tipografía

Utilizar máximo 2 o 3 familias tipográficas.

### Títulos principales

Preferencias:

- `Cormorant Garamond`
- `Playfair Display`
- `Libre Baskerville`

Características:

- Serif elegante
- Trazos finos
- Peso `400` o `500`

Ejemplo:

```css
.section-title {
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
  color: #92764F;
  letter-spacing: 0.04em;
}
```

### Nombre del festejado

Puede utilizar una tipografía manuscrita elegante.

Opciones:

- `Great Vibes`
- `Allura`
- `Parisienne`

Debe utilizarse únicamente como acento.

Ejemplo:

```css
.honoree-name {
  font-family: "Great Vibes", cursive;
  color: #CAA778;
  font-weight: 400;
}
```

### Texto general

Opciones:

- `Lato`
- `Montserrat`
- `Nunito Sans`

Ejemplo:

```css
.body-text {
  font-family: "Lato", sans-serif;
  color: #615630;
}
```

---

## 7. Jerarquía tipográfica

### Nombre principal

```css
font-size: clamp(3rem, 9vw, 6rem);
line-height: 1;
```

### Encabezados

```css
font-size: clamp(1.8rem, 4vw, 3rem);
```

### Subtítulos

```css
font-size: clamp(1.1rem, 2vw, 1.4rem);
```

### Texto normal

```css
font-size: 1rem;
line-height: 1.7;
```

Evitar textos excesivamente grandes o pesados.

---

## 8. Secciones y tarjetas

Las secciones deben sentirse integradas con el fondo.

### Tarjetas recomendadas

```css
.card {
  background: rgba(255, 252, 247, 0.72);
  border: 1px solid rgba(202, 167, 120, 0.35);
  border-radius: 20px;
  backdrop-filter: blur(4px);
  box-shadow: 0 8px 30px rgba(146, 118, 79, 0.08);
}
```

### Reglas

- Bordes suaves
- Transparencias ligeras
- Sombras muy discretas
- Sin cajas blancas completamente opacas
- Sin tarjetas oscuras
- Sin sombras negras intensas

---

## 9. Botones

Los botones no deben parecer componentes genéricos de una aplicación web.

### Variante principal

```css
.button-primary {
  background: #D1B591;
  color: #FFFDF9;
  border: 1px solid #D1B591;
  border-radius: 999px;
  padding: 0.85rem 1.6rem;
  transition: 250ms ease;
}

.button-primary:hover {
  background: #CAA778;
  border-color: #CAA778;
}
```

### Variante elegante

```css
.button-outline {
  background: rgba(246, 237, 223, 0.65);
  color: #92764F;
  border: 1px solid #CAA778;
  border-radius: 999px;
  padding: 0.85rem 1.6rem;
}
```

### Evitar

- Botones cuadrados
- Gradientes intensos
- Sombras gruesas
- Colores saturados
- Negro puro
- Botones estilo dashboard

---

## 10. Bordes y separadores

Usar líneas decorativas finas.

```css
.divider {
  width: 80px;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    #CAA778,
    transparent
  );
}
```

También pueden utilizarse:

- pequeñas cruces
- hojas
- flores discretas
- estrellas o destellos
- ornamentos lineales

---

## 11. Iconografía

Los iconos deben ser:

- Lineales
- Delgados
- Elegantes
- Monocromáticos
- De bajo contraste

### Colores

```css
color: #CAA778;
```

o

```css
color: #92764F;
```

Evitar iconos multicolor o excesivamente sólidos.

---

## 12. Brillos y detalles celestiales

Puede agregarse un efecto muy sutil de destellos.

```css
.glow {
  box-shadow:
    0 0 15px rgba(233, 194, 123, 0.15),
    0 0 35px rgba(233, 194, 123, 0.08);
}
```

Los destellos deben aparecer de forma aislada y con poca opacidad.

No generar un efecto glitter.

---

## 13. Animaciones

Las animaciones deben acompañar la estética delicada.

### Recomendadas

- `fade-in`
- desplazamiento vertical suave
- parallax ligero
- aparición progresiva
- florecimiento de elementos decorativos
- destellos esporádicos
- movimiento muy lento de nubes
- flotación sutil de hojas o palomas

### Ejemplo

```css
@keyframes softReveal {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal {
  animation: softReveal 900ms ease-out both;
}
```

### Evitar

- Rebotes
- Zoom agresivo
- Rotaciones rápidas
- Animaciones tipo confeti
- Transiciones llamativas o veloces

---

## 14. Espaciado

La composición debe tener bastante aire.

Recomendación:

```css
section {
  padding: 80px 24px;
}
```

En móvil:

```css
section {
  padding: 64px 20px;
}
```

Debe existir separación clara entre:

- Títulos
- Fotografías
- Información
- Botones
- Elementos ornamentales

---

## 15. Bordes exteriores y marcos

Puede integrarse un marco fino dorado inspirado en la imagen de referencia.

```css
.invitation-frame {
  border: 1px solid rgba(171, 150, 109, 0.7);
}
```

Puede incluir pequeñas curvas o remates decorativos en esquinas.

No utilizar bordes gruesos.

---

## 16. Fotografías

Las imágenes deben integrarse con la paleta.

### Recomendado

- Exposición cálida
- Saturación moderada o baja
- Fondos luminosos
- Blancos crema en lugar de blanco puro
- Tonos piel naturales
- Evitar filtros fríos

Se pueden usar:

```css
.photo {
  border-radius: 20px;
  box-shadow: 0 10px 35px rgba(97, 86, 48, 0.1);
}
```

---

## 17. Elementos que deben evitarse

No utilizar:

- Negro puro `#000000`
- Blanco puro como fondo dominante
- Azul eléctrico
- Azul rey
- Rosa fuerte
- Morado saturado
- Verde brillante
- Rojo
- Gradientes modernos intensos
- Glassmorphism excesivo
- Neón
- Botones tipo SaaS
- Tarjetas con sombras grandes
- Iconografía multicolor
- Tipografías bold pesadas
- Decoración excesiva

---

## 18. Resultado visual esperado

La invitación completa debe transmitir:

- Paz
- Pureza
- Elegancia
- Ternura
- Espiritualidad
- Luminosidad

Debe sentirse como una sola pieza visual.

El background, las tarjetas, botones, tipografía, iconos y animaciones deben compartir la misma paleta y nivel de suavidad.

El objetivo no es únicamente colocar el fondo de referencia, sino adaptar todo el sistema visual para que la invitación no parezca compuesta por elementos de estilos diferentes.
