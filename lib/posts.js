import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import stringWidth from 'string-width'
import remarkPrism from 'remark-prism'
import rehypeFormat from 'rehype-format'

/* Getting the current posts directory */
const postsDir = path.join(
  process.cwd(),
  'posts'
) /* As posts is a parent level dir */

export function getSortedPostsData() {
  /* Get all the file names under the posts directory */
  const fileNames =
    fs.readdirSync(
      postsDir
    ) /* readdirSync: Reads the contents of the directory. */
  /* Get all the posts data under the posts directory */
  const allPostsData = fileNames.map(function (fileName) {
    /* ID: Remove .md from the file name to get id */
    const id = fileName.replace(/\.md$/, '')
    /* Read the markdown file as string */
    const fullPath = path.join(
      postsDir,
      fileName
    ) /* Getting the full path of one particular md file */
    const fileContents = fs.readFileSync(
      fullPath,
      'utf8'
    ) /* Reading the content of the file by providing the fulll file path and the reading encoding type */
    /* Using gray matter to parse the post meta data section */
    const matterResult = matter(fileContents)
    /* Return the data combined with the id */
    return {
      id,
      ...matterResult.data
    }
  })
  /* Sorting all the posts by date */
  return allPostsData.sort(function ({ date: a }, { date: b }) {
    if (a > b) return 1
    else if (a < b) return -1
    else return 0
  })
}
/* Each object will have a ke named param and each param will have an id object, otherwise getStaticPath will fail as dynamic route [id].js */
export function getAllPostId() {
  const fileNames = fs.readdirSync(postsDir)
  return fileNames.map(function (fileName) {
    return {
      params: { id: fileName.replace(/\.md$/, '') }
    } /* The returned list has to be an array of objects */
  })
}

/* Returns post data based on a given id */
export async function getPostData(id) {
  /* Async is needed as we're using await which helps us to get data asynchronously */
  const fullPath = path.join(postsDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  /* Using gray matter to parse the post contents */
  const matterResult = matter(fileContents)
  /* Use remark to convert markdown into HTML */
  const mdToHtml = await remark()
    .use(remarkGfm, [{ stringLength: stringWidth }, { tablePipeAlign: true }])
    .use(remarkParse)
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(matterResult.content)
  /* Converting the HTML to string */
  const contentHtml = mdToHtml.toString()

  /* Combine the data with the id and return */
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
