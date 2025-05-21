import { Link } from "react-router";
import { articles } from "../data/article";
import { slugify } from "../utils/slug";

export default function Blog() {
  return (
    <div className="max-w-[1000px] mx-auto my-10">
      {articles.map(article => (
        <Link
          key={article.id}
          to={`/post/${slugify(article.category)}/${article.id}`}
          className="block bg-primary-4/20 p-4 my-2 rounded-lg hover:bg-primary-4/30 transition"
        >
          <h2 className="text-2xl font-bold">{article.title}</h2>
          <p className="text-sm text-gray-500">{article.date}</p>
          <p className="text-md">
            {article.content.slice(0, 120)}&nbsp;…
            <span className="ml-2 text-accent-1 underline">Read more</span>
          </p>
        </Link>
      ))}
    </div>
  );
}
