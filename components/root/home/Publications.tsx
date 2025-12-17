import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { getPayload } from "payload";
import config from "@/payload.config";

export default async function Publications() {
  const activityContent = await getPublicationContents();

  return (
    <section className="w-full  px-6 py-20 text-black md:px-16 lg:px-40">
      <h2 className="mb-4 text-4xl font-bold text-primary">
        {activityContent.title}
      </h2>
      <p className="mb-10 max-w-2xl text-gray-600">
        {activityContent.description}
      </p>

      <div className="space-y-12">
        {activityContent.publications.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between gap-2 border-b pb-6 lg:flex-row lg:items-center"
          >
            <div>
              <div className="text-4xl text-primary lg:text-5xl">
                {item.count}
              </div>
              <div className="mt-2 text-lg text-gray-800 lg:text-xl">
                {item.label}
              </div>
            </div>

            <Link href={`/publications/${item.slug}`}>
              <button className="flex items-center gap-1 text-gray-700 transition hover:text-primary">
                Explore <ChevronRight size={18} />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

async function getPublicationContents() {
  const payload = await getPayload({ config });

  const [journals, proceedings, copyrights, patents, books] = await Promise.all(
    [
      payload.find({
        collection: "journals",
        limit: 0,
      }),
      payload.find({
        collection: "proceedings",
        limit: 0,
      }),
      payload.find({
        collection: "copyrights",
        limit: 0,
      }),
      payload.find({
        collection: "copyrights",
        limit: 0,
      }),
      payload.find({
        collection: "patents",
        limit: 0,
      }),
      payload.find({
        collection: "books",
        limit: 0,
      }),
    ]
  );

  return {
    title: "Publications",
    description:
      "Explore our latest research contributions and publications on intelligent systems.",
    publications: [
      {
        count: journals.totalDocs,
        label: "International Journals",
        slug: "journals",
      },
      {
        count: proceedings.totalDocs,
        label: "International Conferences (Proceedings)",
        slug: "proceedings",
      },
      {
        count: copyrights.totalDocs + patents.totalDocs,
        label: "Intellectual Property Rights (IPR)",
        slug: "ipr",
      },
      {
        count: books.totalDocs,
        label: "Books",
        slug: "books",
      },
    ],
  };
}
