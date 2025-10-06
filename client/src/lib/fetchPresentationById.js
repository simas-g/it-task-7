export default async function fetchPresentationById(id) {
  const res = await fetch(
    `${import.meta.env.VITE_BACK_URL}/presentations/${id}`
  );
  const data = res.json();
  return data;
}
