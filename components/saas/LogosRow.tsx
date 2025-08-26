import Image from "next/image";

const logos = [
  { alt: "BYD", src: "https://seeklogo.com/images/B/byd-logo-546145.png", w: 120, h: 40 },
  { alt: "Tesla Powerwall", src: "https://vectorseek.com/wp-content/uploads/2023/09/Tesla-Powerwall-Logo-Vector.svg", w: 160, h: 40 },
  { alt: "Huawei", src: "https://seeklogo.com/images/H/huawei-logo-68529.png", w: 120, h: 40 },
  { alt: "Kiwa", src: "https://seeklogo.com/images/K/kiwa-logo-193946.png", w: 120, h: 40 },
  { alt: "InstallQ", src: "https://installq.nl/wp-content/uploads/2021/06/installq-logo.png", w: 120, h: 40 },
];

export default function LogosRow() {
  return (
    <div className="mt-6 flex items-center justify-between gap-3">
      {logos.map((l) => (
        <div key={l.alt} className="flex-1 flex items-center justify-center">
          <Image src={l.src} alt={`${l.alt} logo`} width={l.w} height={l.h} className="object-contain opacity-80" />
        </div>
      ))}
    </div>
  );
}