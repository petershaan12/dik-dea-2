import { useLocale } from "next-intl";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const currentPath = pathname;
    const newPath = `/${nextLocale}${currentPath.substring(3)}`;
    router.replace(newPath);
  };

  const imageSrc = localActive === "en" ? "/en.png" : "/id.png";

  return (
    <label className="border-2 flex flex-row rounded pr-8 md:pr-2">
      <p className="sr-only">change language</p>
      <Image
        src={imageSrc}
        width={25}
        height={20}
        alt={localActive === "en" ? "English" : "Indonesian"}
        className=" pl-2 py-2"
      />
      <select
        defaultValue={localActive}
        className="bg-transparent pr-2 py-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">EN</option>
        <option value="id">ID</option>
      </select>
    </label>
  );
}
