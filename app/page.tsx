import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Tashis Webspace
      </h1>
      <p className="mb-4">{`This part you can edit.`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
