import React from 'react'
import BlogHero from '../components/BlogHero'
import { ctaSchema } from '../public/schemas/ctaSchema'

export const POST_PER_PAGE = 1 // for now let's consider 1

export async function getStaticProps() {}

function Posts() {
  return (
    <>
      <BlogHero goBack={ctaSchema().goBackHome} />
    </>
  )
}

export default Posts
