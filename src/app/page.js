import Link from "next/link"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2><Link className="text-white" href="/auth/login">Login</Link></h2>
      <h2>this is a home page.</h2>
    </main>
  )
}
