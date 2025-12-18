"use client";

import {useRouter} from "next/navigation";
import {useLocale} from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();

  const setLocale = (next: string) => {
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000`;
    router.refresh(); // re-render server components with new cookie
  };

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value)}
      className="bg-transparent text-white text-xm outline-none cursor-pointer"
      aria-label="Language"
    >
      <option value="en" className="text-black">EN</option>
      <option value="si" className="text-black">SI</option>
      <option value="ta" className="text-black">TA</option>
    </select>
  );
}
