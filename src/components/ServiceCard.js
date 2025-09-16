export default function ServiceCard({ title, text, icon }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition border-t-4 border-red-600">
      {/* Icon (optional) */}
      {icon && <div className="text-red-600 mb-4">{icon}</div>}

      {/* Title */}
      <h3 className="text-xl text-red-600 font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-black">{text}</p>
    </div>
  );
}
