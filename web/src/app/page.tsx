'use client'
import Image from 'next/image'
import TextPrinting from '@/components/TextPrinting'
import { ContentBlock, ContentContainer, PageSection } from '@/components/Containers'

export default function Home () {
	return (
		<PageSection>
			<ContentContainer>
				<ContentBlock className="justify-center md:text-start text-center">
					<div className="text-primary text-xl">Hello World, I&apos;m</div>
					<div className="text-6xl font-bold fadein-up">NS13</div>
					<TextPrinting className="flex md:justify-start justify-center typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl fadein-up">
						{['Web Developer', 'Full - stack engineer']}
					</TextPrinting>
					<div className="text-xm flex md:flex-row flex-col gap-2 fade-in-from-left">
						<div>Welcome to my personal website </div>
						<div className="wave">👋🏻</div>
					</div>
				</ContentBlock>
				<ContentBlock>
					<Image
						src="/ns13.jpg"
						alt="NS13"
						width={500}
						height={500}
						className="rounded-full border-primary border-5 shadow-[0px_0px_50px_0px_var(--primary)] fadein-right"
					/>
				</ContentBlock>
			</ContentContainer>
		</PageSection>
	)
}

