import Link from "next/link";

export default function RenderPropsLecture() {
  return (
    <div className="p-8">
      <Link
        className="text-xl hover:underline hover:text-blue-200 transition-colors"
        href="/"
      >
        Назад
      </Link>
      <div>RenderPropsLecture</div>
    </div>
  );
}
