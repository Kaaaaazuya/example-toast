'use client'
import Link from 'next/link'
import { useToast } from '../hooks/useToast'

export default function Home() {
  const { success, error } = useToast() //使いたいアラートメッセージを呼び出す

  return (
    <div>
      <h1>Sample</h1>
      <button
        onClick={() => {
          success('Success')
        }}
        type='button'
      >
        Saved !
      </button>
      <button onClick={() => error('error occurred')} type='button'>
        Error !
      </button>
      <Link href={'/'}>Top へ</Link>
    </div>
  )
}
