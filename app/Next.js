import Link from "next/Link";

export default function StudentInfo() {
    return(
        <section>
        <h2 className="mb-1 text-2xl font-semibold">Name</h2>
        <p className={`m-1 max-w-[30ch] text-sm opacity-50`}>Ronaldo</p>
        <h3 className="mb-1 text-2xl font-semibold">Course Section</h3>
        <p className={`m-1 max-w-[30ch] text-sm opacity-50`}>CPRG-306-D</p>
        <Link className="mb-1 text-2xl font-semibold" target="_blank" href="https://github.com/KingRonnin/cprg306-assignments">GitHub Repository</Link>
        </section>
    );
}