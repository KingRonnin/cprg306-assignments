import StudentInfo from './Next.js';
import Link from 'next/Link';

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        CPRG 306: Web Development 2 - Assignments&nbsp;
        </p>
      </div>
      <div>
        <StudentInfo/>
        <Link className="mb-1 text-2xl font-semibold" href="/week2">Week 2</Link>
        <Link className="mb-1 text-2xl font-semibold" href="/week3">Week 3</Link>
        <Link className="mb-1 text-2xl font-semibold" href="/week4">Week 4</Link>
        <Link className="mb-1 text-2xl font-semibold" href="/week5">Week 5</Link>
      </div>
    </main>
  );
}
