import Link from "next/link";

export function Home() {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5 items-center justify-center">
      <Card title="Java Script" color="red" href="/java_script" />
      <Card title="React" href="/react" color="red" />
      <Card title="Next" href="/next" />
      <Card title="Node" href="/node" />
      <Card title="MongoDB" href="/mongodb" />
      <Card title="AWS" href="/aws" />
      <Card title="Nest" href="/nest" />
      <Card title="DSA" href="/dsa" />
      <Card title="React Native" href="/native" />
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
