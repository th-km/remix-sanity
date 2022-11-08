// @ts-nocheck
import client from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'

export const sanityConfig = {
  dataset: process.env.SANITY_DATASET || 'production',
  projectId: process.env.SANITY_PROJECT_ID || '',
  useCdn: typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
  apiVersion: '2022-03-13'
}

export const urlFor = source => createImageUrlBuilder(sanityConfig).image(source)
export const sanityClient = client(sanityConfig)
