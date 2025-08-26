import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ href, onClick, children }: ButtonProps) {
  const cls = "inline-flex items-center justify-center rounded-lg bg-green-600 text-white font-semibold px-4 py-2 active:scale-[0.99]";
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}