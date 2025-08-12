"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("topic") || "");

  // Keep search state in sync with URL
  useEffect(() => {
    setSearch(searchParams.get("topic") || "");
  }, [searchParams]);

  // Auto-submit after 2 seconds
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (search) {
        params.set("topic", search);
      } else {
        params.delete("topic");
      }
      router.push(`?${params.toString()}`);
    }, 2000);

    return () => clearTimeout(delayDebounce); // cleanup timeout on change
  }, [search, searchParams, router]);

  return (
    <div className="relative w-full max-w-sm">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />
      <input
        type="text"
        placeholder="Search companions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
