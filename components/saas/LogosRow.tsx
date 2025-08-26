export default function LogosRow() {
  const logos = ["BYD", "Tesla Powerwall", "Huawei", "Kiwa", "InstallQ"];
  return (
    <div className="mt-6 grid grid-cols-3 sm:grid-cols-5 gap-2 text-xs md:text-sm text-center text-[var(--muted)]">
      {logos.map((l) => (
        <div key={l} className="rounded-lg border border-neutral-200 bg-white px-3 py-2 shadow-sm">{l}</div>
      ))}
    </div>
  );
}