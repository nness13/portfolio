'use client'
import { Card } from '@nextui-org/react'
import Image from 'next/image'
import { stack_data_type, tabs_array } from '@/config/stack_data'
import Tabs from '@/components/Tabs'
import css from '@/app/about/style.module.css'

export default function Home () {
	return (
		<div className="bg-foreground w-full py-20 min-h-[calc(100vh-4rem)]">
			<div className="flex flex-col items-center">
				<AboutMeBlock/>
				<SkillsBlock/>
			</div>
		</div>
	)
}

function AboutMeBlock () {
	return (
		<Card className="w-2/3 h-fit bg-passive text-secondary p-10 flex flex-col gap-10">
			<div className="w-full flex flex-row items-center gap-5">
				<div className="font-bold text-3xl">About Me</div>
				<div className="w-[350px] h-0.5 bg-primary rounded-full"/>
			</div>
			<div className="flex flex-row gap-20">
				<div className="w-1/3">
					<Image src="/ns13.jpg" alt="" width={500} height={500} className="rounded-full"/>
				</div>
				<div className="w-2/3 flex items-center text-xl">
					Hello there! I go by the name Andriy Nester, and I'm a passionate web developer based in Lviv, Ukraine. My journey in the world of web development spans over a year, with a focus on crafting impressive back-end solutions. To me, coding isn't just a profession; it's an art form that carries its own unique aesthetic charm.<br/><br/>
					My primary role revolves around sculpting websites that seamlessly blend functionality and user-friendliness while exuding an irresistible visual appeal. I'm all about adding that personal touch to your digital presence, ensuring your website not only captures attention but also provides an effortless user experience. My ultimate mission is to translate your message and identity into a masterpiece of creativity. If you're interested in collaborating with me, don't hesitate to reach out via the provided contact information. Let's create something extraordinary together!
				</div>
			</div>
		</Card>
	)
}


const prepare_tabs = tabs_array.map(tab => ({
	...tab,
	TabComponent: <SkillsTechStackBlock data={tab.data}/>
}))
function SkillsBlock () {
	return (
		<div className="flex flex-col w-2/3 text-secondary p-10">
			<div className="w-full flex flex-row items-center gap-5">
				<div className="w-[100px] h-0.5 bg-primary rounded-full"/>
				<div className="font-bold text-3xl">Skills</div>
			</div>

			<Tabs
				default_index={prepare_tabs[0].key}
				tabs={prepare_tabs}
			/>
		</div>
	)
}

function SkillsTechStackBlock ( {data}: { data: stack_data_type } ) {
	return (
		<div className="w-full grid grid-cols-4 gap-10">
			{data.map(block =>
				<SkillItem key={block.key} data={block}/>
			)}
		</div>
	)
}
function SkillItem ( {data}: { data: stack_data_type[0] } ) {
	const is_img = data.img.match('^(https?|ftp)://[^\\s/$.?#].[^\\s]*$|^/[^/\\s].*$')

	return (
		<div
			className={`${
				is_img ? '' : 'justify-center'
			} ${
				css.item
			}`}
		>
			{is_img
				? <Image
					className={css.img}
					src={data.img}
					alt={data.img}
					width={50}
					height={50}
				/>
				: null
			}
			<div className="flex flex-col">
				<div className={`font-bold ${css.title}`}>{data.title}</div>
				<div className={`text-primary ${css.level}`}>{data.level}</div>
			</div>
		</div>
	)
}