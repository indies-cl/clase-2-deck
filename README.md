# clase 2.0 - Sponsor Deck

Un sponsor deck para el evento tech **clase 2.0**, construido con Next.js, shadcn/ui y Tailwind CSS.

## Características

- Diseño mono/boxy con esquinas cuadradas
- Tipografía: BIZ UDPMincho (Google Fonts)
- Colores personalizados:
  - Background: `#100F0F`
  - Main/Primary: `#E86518`
  - Text: `#CECDC3`
- Sidebar de navegación con scroll-spy
- Responsive design con carruseles en mobile
- Desplegable en Cloudflare Pages

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Despliegue

Para desplegar en Cloudflare Pages:

```bash
npm run deploy
```

O manualmente:

```bash
npm run build
npx wrangler pages deploy ./out --project-name=clase-2-sponsor-deck
```

## Estructura de Placeholders

El deck contiene placeholders que debes reemplazar con tu contenido:

- `[TEXTO]` - Textos descriptivos
- `[FECHA]` - Fechas del evento
- `[NOMBRE]` - Nombres de personas/lugares
- `[LOGO]` - Logos de sponsors
- `[FOTO_X]` - Fotos del evento

### Imágenes

Coloca las imágenes en `/public/images/`:

- `speaker1.jpg` a `speaker6.jpg` - Fotos de speakers
- `team1.jpg` a `team5.jpg` - Fotos del equipo
- `company1.png` a `company4.png` - Logos de empresas
- Imagen del venue

## Tecnologías

- [Next.js 16](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
