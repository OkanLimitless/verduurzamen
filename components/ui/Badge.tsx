export default function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "success" | "warning" }) {
  const styles = {
    neutral: "bg-neutral-100 text-neutral-700",
    success: "bg-green-100 text-green-800",
    warning: "bg-amber-100 text-amber-800",
  };
  return <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${styles[tone]}`}>{children}</span>;
}