import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export default function CardiacoreDetail({
  content,
}: {
  content: SerializedEditorState;
}) {
  return (
    <section className="px-44 py-24">
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold text-primary">Details</h2>

        <article className="prose prose-neutral max-w-none">
          <RichText data={content} />
        </article>
      </div>
    </section>
  );
}
