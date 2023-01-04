import { useRouter } from "next/router";
import HeaderOption from "./HeaderOption";
import { SearchIcon, PhotographIcon } from "@heroicons/react/outline";

export default function HeaderOptions() {
  const router = useRouter();

  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
      <HeaderOption
        title="All"
        Icon={SearchIcon}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <HeaderOption
        title="Images"
        Icon={PhotographIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
