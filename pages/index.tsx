import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='text-center text-lg'>
      <Link href='/admin/posts'>
        [click] Go to posts
      </Link>
    </div>
  )
}

export default Home 