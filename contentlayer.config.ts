// contentlayer.config.ts
import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from 'contentlayer/source-files'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: post => `/${post._raw.flattenedPath}`
  },
  slugAsParams: {
    type: 'string',
    resolve: post => post._raw.flattenedPath.split('/').slice(1).join('/')
  }
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
    date: { type: 'date', required: true },
    imageUrl: { type: 'string' }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post]
})
