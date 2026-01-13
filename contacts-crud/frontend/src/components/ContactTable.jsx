export default function ContactTable({ contacts, onView, onEdit, onDelete }) {
  if (!contacts.length) {
    return (
      <div className="mt-6 p-6 border rounded-2xl text-center text-gray-500">
        No contacts found.
      </div>
    );
  }

  return (
    <div className="mt-6 overflow-x-auto border rounded-2xl">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3 w-56">Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((c) => (
            <tr key={c.id} className="border-t">
              <td className="p-3 font-medium">{c.name}</td>
              <td className="p-3">{c.email}</td>
              <td className="p-3">{c.phone}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => onView(c)}
                  className="px-3 py-1 rounded-lg border hover:bg-gray-50"
                >
                  View
                </button>
                <button
                  onClick={() => onEdit(c)}
                  className="px-3 py-1 rounded-lg border hover:bg-gray-50"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(c)}
                  className="px-3 py-1 rounded-lg border text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
