const projectId = process.env.NEXT_PUBLIC_SUPABASE_ID;

export default function supabaseLoader({ src, width, quality }) {
  return `https://${projectId}.supabase.co/storage/v1/object/public/${src}?width=${width}&quality=${quality || 75}`;
}
