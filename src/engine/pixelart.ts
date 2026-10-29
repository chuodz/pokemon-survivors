export const context2d = (canvas: HTMLCanvasElement) => {
  spare ??= createCanvas(1, 1).getContext('2d')
  const ctx = canvas.getContext('2d', { willReadFrequently: false }) ?? spare
  if (!ctx) throw new Error('No 2D canvas context')
  ctx.imageSmoothingEnabled = false // <--- ¡Esta línea de aquí es la que fuerza los píxeles duros!
  return ctx
}
