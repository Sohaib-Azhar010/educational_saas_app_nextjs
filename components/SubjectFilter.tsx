"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const subjects = [
  "maths",
  "language",
  "science",
  "history",
  "coding",
  "geography",
  "economics",
  "finance",
  "business",
];

export default function SubjectFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSubject = searchParams.get("subject") || "";
  const [selected, setSelected] = useState(currentSubject);

  const handleChange = (subject: string) => {
    setSelected(subject);

    const params = new URLSearchParams(searchParams);
    if (subject) {
      params.set("subject", subject);
    } else {
      params.delete("subject");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <select
      value={selected}
      onChange={(e) => handleChange(e.target.value)}
      className="border rounded-lg px-3 py-2 bg-white shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <option value="">All subjects</option>
      {subjects.map((subj) => (
        <option key={subj} value={subj}>
          {subj.charAt(0).toUpperCase() + subj.slice(1)}
        </option>
      ))}
    </select>
  );
}
