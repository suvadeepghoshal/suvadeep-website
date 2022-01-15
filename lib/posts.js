import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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
