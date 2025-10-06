export async function getPresentations() {
  const res = await fetch(`${import.meta.env.VITE_BACK_URL}/presentations`);
  const data = await res.json();
  return data;
}
