import type { Metadata } from 'next'
import Page from './page'
import { metadata_config } from '@/config/metadata'

export const metadata: Metadata = {
	title: `About ${metadata_config.title}`,
}

export default function About (){
	return <Page/>
}