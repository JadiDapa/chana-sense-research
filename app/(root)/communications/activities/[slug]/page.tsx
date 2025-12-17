import { Separator } from "@/components/ui/separator";
import { Calendar, Share } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload";
import config from "@/payload.config";

export default async function ActivityDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "activities",
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  });

  const { docs: activityList } = await payload.find({
    collection: "activities",
    where: {
      slug: {
        not_equals: slug, // exclude current activity
      },
    },
    sort: "-date",
    limit: 5,
  });

  const activity = docs[0] ?? null;

  return (
    <section className="  px-44 py-24 pt-64">
      <figure className="relative aspect-video w-full overflow-hidden rounded-xl">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          className="object-cover object-center"
        />
      </figure>
      <div className="py-10">
        <h1 className="text-4xl font-semibold">{activity.title}</h1>
        <div className="mt-10 flex justify-between">
          <div className="flex items-center gap-2 text-primary">
            <Calendar className="" />
            <p className="text-lg font-light">{activity.date}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-muted-foreground text-sm italic">
              Posted {activity.date}
            </p>
            <div className="flex items-center gap-2">
              <Share size={16} className="" />
              <p className="text-sm">Share</p>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex justify-between gap-24 py-12">
        <div className="prose flex-2">{activity.contents}</div>
        <div className="flex-1">
          <p className="text-2xl font-medium text-primary">More Activities</p>
          <div className="">
            {activityList.map((moreAct) => (
              <Link
                href={`/communications/activities/${moreAct.slug}`}
                key={moreAct.slug}
                className="block border-b border-gray-300 py-4 hover:underline"
              >
                <p className="">{moreAct.title}</p>
                <div className="mt-2 flex items-center gap-2 text-primary">
                  <Calendar size={16} className="" />
                  <p className="font-ligh text-sm">{moreAct.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
