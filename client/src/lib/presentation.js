const BACK_URL = import.meta.env.VITE_BACK_URL;

export async function getPresentations() {
  const res = await fetch(`${BACK_URL}/presentations`);
  const data = await res.json();
  return data;
}

export default async function fetchPresentationById(id) {
  const res = await fetch(`${BACK_URL}/presentations/${id}`);
  const data = res.json();
  return data;
}

export async function postPresentation(creator, title) {
  const res = await fetch(`${BACK_URL}/presentations/create`, {
    method: "POST",
    body: JSON.stringify({
      creator,
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function assignCollaborator(name, id) {
  const res = await fetch(`${BACK_URL}/presentations/assign`, {
    method: "POST",
    body: JSON.stringify({
      name,
      id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function changeUsersRole(projectId, username, newRole) {
  const res = await fetch(`${BACK_URL}/presentations/collaborators`, {
    method: "POST",
    body: JSON.stringify({ projectId, username, newRole }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function updateSlideItems(projectId, username, newRole) {
  const res = await fetch(`${BACK_URL}/presentations/collaborators`, {
    method: "POST",
    body: JSON.stringify({ projectId, username, newRole }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
