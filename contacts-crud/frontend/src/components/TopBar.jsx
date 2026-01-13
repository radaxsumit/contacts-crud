export default function TopBar({ search, setSearch, onAdd }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold">Contacts Manager</h1>
        <p className="text-sm text-gray-500">Simple CRUD app (React + Express + SQLite)</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search name or email..."
          className="w-64 max-w-full border rounded-xl px-3 py-2 outline-none focus:ring"
        />
        <button
          onClick={onAdd}
          className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90"
        >
          + Add
        </button>
      </div>
    </div>
  );
}
