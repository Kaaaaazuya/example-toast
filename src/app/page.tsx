import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Exapmle Toasy</h1>
      <h2>use react-toastfy</h2>
      <Link href={'/sample'}>Sample へ</Link>
    </main>
  )
}
