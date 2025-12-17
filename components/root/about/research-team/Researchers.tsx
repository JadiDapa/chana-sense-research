import ResearchersCarousel from "./ResearchersCarousel";
import ResearcherCard from "./ResearcherCard";
import { getPayload } from "payload";
import config from "@/payload.config";

export default async function Researchers() {
  const payload = await getPayload({ config });

  const { docs: researchers } = await payload.find({
    collection: "research-team",
  });

  console.log(researchers);

  const byCategory = {
    head: researchers.filter((r) => r.category === "head"),
    secretary: researchers.filter((r) => r.category === "secretary"),
    members: researchers.filter((r) => r.category === "members"),
    external: researchers.filter((r) => r.category === "external"),
    assistant: researchers.filter((r) => r.category === "assistant"),
    undergraduate: researchers.filter((r) => r.category === "undergraduate"),
    graduate: researchers.filter((r) => r.category === "graduate"),
    postgraduate: researchers.filter((r) => r.category === "postgraduate"),
  };

  const researcherSections = [
    { title: "Members", key: "members" },
    { title: "External Collaborators", key: "external" },
    { title: "Research Assistants", key: "assistant" },
    { title: "Undergraduate Students", key: "undergraduate" },
    { title: "Graduate Students", key: "graduate" },
    { title: "Postgraduate Students", key: "postgraduate" },
  ] as const;

  return (
    <div className="px-44">
      <div className="my-40 flex flex-col items-center">
        {/* Head */}
        {byCategory.head.map((person) => (
          <ResearcherCard
            key={person.id}
            name={person.name}
            title={person.title}
            image={person.image.url}
          />
        ))}

        <Divider />

        {/* Secretary */}
        {byCategory.secretary.map((person) => (
          <ResearcherCard
            key={person.id}
            name={person.name}
            title={person.title}
            image={person.image.url}
          />
        ))}

        <Divider />

        {/* All other sections (mapped) */}
        {researcherSections.map(({ title, key }) => {
          const items = byCategory[key];

          if (!items.length) return null;

          return (
            <div key={key} className="w-full">
              <ResearchersCarousel title={title} items={items} />
              <Divider />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* Small helper component              */
/* ---------------------------------- */
function Divider() {
  return <div className="my-8 h-0.5 w-full bg-gray-200" />;
}
