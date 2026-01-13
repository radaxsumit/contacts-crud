import { useEffect, useState } from "react";

export default function ContactFormModal({ open, mode, initialData, onClose, onSubmit }) {
  const isEdit = mode === "edit";

  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setForm({
        name: initialData?.name || "",
        email: initialData?.email || "",
        phone: initialData?.phone || "",
      });
      setErrors({});
      setApiError("");
      setLoading(false);
    }
  }, [open, initialData]);

  if (!open) return null;

  function validate() {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Name must be at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email.";
    if (!/^[0-9]{10,15}$/.test(form.phone.trim())) e.phone = "Phone must be 10 to 15 digits.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      setApiError("");
      await onSubmit({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
      });
      onClose();
    } catch (err) {
      setApiError(err?.message || "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-3">
      <div className="w-full max-w-md bg-white rounded-2xl p-5 shadow-xl">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-semibold">{isEdit ? "Edit Contact" : "Add Contact"}</h2>
          <button className="text-gray-500 hover:text-black" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1 border rounded-xl px-3 py-2 outline-none focus:ring"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-1 border rounded-xl px-3 py-2 outline-none focus:ring"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Phone</label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full mt-1 border rounded-xl px-3 py-2 outline-none focus:ring"
              placeholder="9876543210"
            />
            {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
          </div>

          {apiError && (
            <div className="p-3 rounded-xl bg-red-50 text-red-700 text-sm border">
              {apiError}
            </div>
          )}

          <button
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-xl hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Saving..." : isEdit ? "Update Contact" : "Create Contact"}
          </button>
        </form>
      </div>
    </div>
  );
}
