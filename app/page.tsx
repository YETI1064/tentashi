import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Tashis Webspace
      </h1>
      <p className="mb-4">{`Hi, I am tashi and I am learning how to code, my interests are design , JS and games.`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
