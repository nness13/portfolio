import type { Metadata } from 'next'
import Page from './page'
import { metadata_config } from '@/config/metadata'

export const metadata: Metadata = {
	title: `Blog ${metadata_config.title}`,
}

export default function Blog (){
	return <Page/>
}