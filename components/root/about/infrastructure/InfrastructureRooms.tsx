import Image from "next/image";
import { getPayload } from "payload";
import config from "@/payload.config";

export default async function InfrastructureRooms() {
  const payload = await getPayload({ config });

  const { docs: infrastructures } = await payload.find({
    collection: "infrastructures",
    sort: "-id",
  });

  return (
    <div className="space-y-24 px-40 py-32">
      {infrastructures.map((item, i) => {
        const isImageLeft = i % 2 === 0; // auto alternate layout

        return (
          <div
            key={item.id}
            className={`flex items-center gap-6 rounded-xl bg-slate-200 p-4 ${
              isImageLeft ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <figure className="relative h-80 w-280 overflow-hidden rounded-lg">
              {item.image?.url && (
                <Image
                  src={item.image.url}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />
              )}
            </figure>

            <div className="space-y-6">
              <p className="text-2xl font-semibold">{item.title}</p>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
