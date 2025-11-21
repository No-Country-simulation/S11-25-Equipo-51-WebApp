import HeartIcon from "./HeartIcon";

export default function TestimonialItem({ text, name, role, initial }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 flex flex-col gap-6 border border-gray-100">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, idx) => (
          <HeartIcon key={idx} />
        ))}
      </div>
      <p className="text-base text-gray-700 leading-relaxed">
        "{text}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 text-white flex items-center justify-center text-base">
          {initial}
        </div>
        <div>
          <p className="text-gray-900 text-base">{name}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
