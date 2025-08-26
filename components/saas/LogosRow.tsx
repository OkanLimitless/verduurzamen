import Image from "next/image";

const logos = [
  { alt: "BYD", src: "https://images.seeklogo.com/logo-png/52/1/byd-atualizada-2024-logo-png_seeklogo-528892.png", w: 120, h: 40 },
  { alt: "Tesla Powerwall", src: "https://images.seeklogo.com/logo-png/32/1/tesla-powerwall-logo-png_seeklogo-329760.png", w: 160, h: 40 },
  { alt: "Huawei", src: "https://images.seeklogo.com/logo-png/6/1/huawei-logo-png_seeklogo-68529.png", w: 120, h: 40 },
  { alt: "InstallQ", src: "https://pebblezonnepanelen.nl/web/image/96427-e9801900/InstallQ-logo-RGB%20%28transparant%29.png", w: 140, h: 40 },
  { alt: "Kiwa", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kiwa_Logo.png/250px-Kiwa_Logo.png", w: 120, h: 40 },
];

export default function LogosRow() {
  return (
    <div className="mt-6 flex items-center justify-between gap-4">
      {logos.map((l) => (
        <div key={l.alt} className="basis-1/5 flex items-center justify-center">
          <Image src={l.src} alt={`${l.alt} logo`} width={l.w} height={l.h} className="object-contain opacity-85" />
        </div>
      ))}
    </div>
  );
}