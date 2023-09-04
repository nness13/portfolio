'use client'
import Image from 'next/image'
import TextPrinting from '@/components/TextPrinting'
import { ContentBlock, ContentContainer, PageSection } from '@/components/Containers'

export default function Home () {
	return (
		<PageSection>
			<ContentContainer>
				<ContentBlock className="justify-center">
					<div className="text-primary text-2xl">Hello World, I`m</div>
					<div className="text-6xl">NS13</div>
					<TextPrinting className="text-primary text-2xl">
						{['Web Developer', 'Full - stack engineer']}
					</TextPrinting>
					<div className="text-xm">Welcome to my personal website 👋🏻</div>
				</ContentBlock>
				<ContentBlock>
					<Image
						src="/ns13.jpg"
						alt="NS13"
						width={500}
						height={500}
						className="rounded-full border-primary border-5 shadow-[0px_0px_200px_0px_var(--primary)]"
					/>
				</ContentBlock>
			</ContentContainer>
		</PageSection>
	)
}

