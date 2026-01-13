const BASE_URL = "http://localhost:5000/api/contacts";

export async function fetchContacts(q = "") {
  const url = q ? `${BASE_URL}?q=${encodeURIComponent(q)}` : BASE_URL;
  const res = await fetch(url);
  return res.json();
}

export async function createContact(payload) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}

export async function updateContact(id, payload) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}

export async function deleteContact(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}
