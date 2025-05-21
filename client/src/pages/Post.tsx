import { useParams, Navigate } from "react-router";
import type { Article } from "../data/article";
import { articles } from "../data/article";

type PostProps = Pick<Article, 'title' | 'date' | 'content'>;

export default function Post({ title, date, content }: PostProps) {
  return (
    <article className="bg-primary-4/20 p-6 my-4 rounded-lg">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-4 leading-relaxed">{content}</p>
    </article>
  );
}

export function PostPage(){
  const {id} = useParams<{id: string}>();
  const article = articles.find(a=>a.id === Number(id));

  return(
    <div className="max-w-[1000px] mx-auto my-10">
      {article ? (
        <Post {...article} />
      ) : (
        <Navigate to="/blog" replace />
      )}
    </div>
  )

}