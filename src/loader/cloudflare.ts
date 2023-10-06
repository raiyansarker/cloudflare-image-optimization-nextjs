/**
 * Uses cloudflare image optimization service to optimize images.
 * Custom loader for next/image.
 * @param {string} src Src for the image
 * @param {number} width Width for the image
 * @param {number} quality Quality for the image
 * @returns {string} Optimized image url
 */
export default function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}): string {
  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto'];
  return `https://assets.codepen.io/cdn-cgi/image/${params.join(',')}/${src}`;
}
