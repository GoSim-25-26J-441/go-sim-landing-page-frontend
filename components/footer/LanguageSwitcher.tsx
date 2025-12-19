"use client";

import {useRouter} from "next/navigation";
import {useLocale} from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();

  const setLocale = (next: string) => {
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; SameSite=Lax`;

    // go to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // reload translations
    router.refresh();
  };

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value)}
      className="bg-transparent text-gray-300 text-sm outline-none cursor-pointer"
      aria-label="Language"
    >
      <option value="en" className="text-black">EN</option>
      <option value="si" className="text-black">SI</option>
      <option value="ta" className="text-black">TA</option>
    </select>
  );
}

