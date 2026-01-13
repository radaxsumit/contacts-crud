import { useEffect, useMemo, useState } from "react";
import TopBar from "../components/TopBar";
import ContactTable from "../components/ContactTable";
import ContactDetailsModal from "../components/ContactDetailsModal";
import ContactFormModal from "../components/ContactFormModal";
import { createContact, deleteContact, fetchContacts, updateContact } from "../api/contactsApi";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const [viewContact, setViewContact] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [editContact, setEditContact] = useState(null);

  async function loadContacts() {
    const data = await fetchContacts(search);
    setContacts(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    const t = setTimeout(() => loadContacts(), 250);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    loadContacts();
  }, []);

  const stats = useMemo(() => {
    return { total: contacts.length };
  }, [contacts]);

  function openAdd() {
    setFormMode("add");
    setEditContact(null);
    setFormOpen(true);
  }

  function openEdit(contact) {
    setFormMode("edit");
    setEditContact(contact);
    setFormOpen(true);
  }

  async function handleSubmit(payload) {
    if (formMode === "edit") {
      await updateContact(editContact.id, payload);
    } else {
      await createContact(payload);
    }
    await loadContacts();
  }

  async function handleDelete(contact) {
    const ok = confirm(`Delete ${contact.name}?`);
    if (!ok) return;

    await deleteContact(contact.id);
    await loadContacts();
  }

return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border">
        <TopBar search={search} setSearch={setSearch} onAdd={openAdd} />

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Total Contacts: <span className="font-semibold text-gray-900">{stats.total}</span>
          </p>
        </div>

        <ContactTable
          contacts={contacts}
          onView={(c) => setViewContact(c)}
          onEdit={openEdit}
          onDelete={handleDelete}
        />
      </div>

      <ContactDetailsModal
        open={!!viewContact}
        contact={viewContact}
        onClose={() => setViewContact(null)}
      />

      <ContactFormModal
        open={formOpen}
        mode={formMode}
        initialData={editContact}
        onClose={() => setFormOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  </div>
);

}
