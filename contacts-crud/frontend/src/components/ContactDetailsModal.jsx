export default function ContactDetailsModal({ open, onClose, contact }) {
  if (!open || !contact) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-3">
      <div className="w-full max-w-md bg-white rounded-2xl p-5 shadow-xl">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-semibold">Contact Details</h2>
          <button className="text-gray-500 hover:text-black" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="mt-4 space-y-3">
          <div className="border rounded-xl p-3">
            <p className="text-xs text-gray-500">Name</p>
            <p className="font-medium">{contact.name}</p>
          </div>

          <div className="border rounded-xl p-3">
            <p className="text-xs text-gray-500">Email</p>
            <p className="font-medium">{contact.email}</p>
          </div>

          <div className="border rounded-xl p-3">
            <p className="text-xs text-gray-500">Phone</p>
            <p className="font-medium">{contact.phone}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full bg-black text-white py-2 rounded-xl hover:opacity-90"
        >
          Close
        </button>
      </div>
    </div>
  );
}
