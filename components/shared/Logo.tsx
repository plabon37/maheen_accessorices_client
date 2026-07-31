import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Maheen Accessories"
        width={580}
        height={62}
        priority
        className="h-auto w-[350px] lg:w-[380px]"
      />
    </Link>
  );
}