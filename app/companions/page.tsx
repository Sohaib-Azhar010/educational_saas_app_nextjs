import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions } from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";

interface SearchParams {
  searchParams: {
    subject?: string;
    topic?: string;
  };
}

export default async function CompanionsLibrary({ searchParams }: SearchParams) {
  const subject = searchParams.subject || "";
  const topic = searchParams.topic || "";

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <section className="flex justify-between gap-4 max-sm:flex-col mb-6">
        <h1 className="text-2xl font-bold">Companion Library</h1>
        <div className="flex gap-4 w-full max-sm:flex-col sm:w-auto">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companions-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companions.length > 0 ? (
          companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No companions found.
          </p>
        )}
      </section>
    </main>
  );
}
