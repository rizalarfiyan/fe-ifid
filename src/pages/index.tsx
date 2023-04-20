import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen w-full h-full p-10">
        <div className="flex flex-col gap-4 justify-center text-center">
        <h1 className="text-4xl text-gray-800 font-semibold">Hello World!</h1>
          <Link href="/login" className="underline">
            To Login
          </Link>
        </div>
      </div>
    </main>
  )
}
