import Link from "next/link";

export function Home() {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5 items-center justify-center">
      <Card
        title="Java Script"
        color="red"
        href="/java_script/question_answers/data_types"
      />
      <Card title="React" href="/react/question_answers/react" color="red" />
      <Card title="Next" />
      <Card title="Node" />
      <Card title="MongoDB" />
      <Card title="AWS" />
      <Card title="Nest" />
    </div>
  );
}

function Card({ title, color = "blue", href = "/" }) {
  return (
    <Link href={href}>
      <div
        className={`shadow-md bg-white rounded-md min-h-[200px] flex justify-center items-center text-xl cursor-pointer text-${color}-400 dark:text-black`}
      >
        {title}
      </div>
    </Link>
  );
}
