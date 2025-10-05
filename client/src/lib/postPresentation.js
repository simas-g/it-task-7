export async function postPresentation(creator, title) {
  const res = await fetch(
    `${import.meta.env.VITE_BACK_URL}/presentations/create`,
    {
      method: "POST",
      body: JSON.stringify({
        creator,
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
}
