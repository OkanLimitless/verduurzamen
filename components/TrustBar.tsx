export default function TrustBar() {
  const items = [
    { label: "4.8/5 beoordelingen", icon: "⭐" },
    { label: "Erkend installateur", icon: "✅" },
    { label: "10+ jaar ervaring", icon: "🏆" },
    { label: "Binnen 24u reactie", icon: "⚡" },
  ];
  return (
    <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-neutral-700">
      {items.map((it) => (
        <div key={it.label} className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white p-2">
          <span className="text-base" aria-hidden>{it.icon}</span>
          <span className="font-medium">{it.label}</span>
        </div>
      ))}
    </div>
  );
}