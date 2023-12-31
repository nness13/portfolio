'use client'
import Image from 'next/image'
import * as brand_icons from '@fortawesome/free-brands-svg-icons'
import * as solid_icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Blog () {
	return (
		<div className="bg-foreground w-full md:py-20 min-h-[calc(100vh-4rem)] flex flex-col items-center md:gap-10">
			<div className="flex flex-col mx-10 text-center items-center fadein-bot">
				<div className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">Let&apos;s share experiences, stories, and knowledge together.</div>
			</div>
			<div className="grid md:grid-cols-3 grid-cols-1 gap-5 m-10 md:w-2/4 text-secondary fade-zoom-in">
				{( [] as any[] ).map(project => (
					<div className="bg-passive p-5 flex flex-col gap-3 rounded-2xl hover:translate-y-[-5px] hover:bg-passive2 transition" key={project.title}>
						<div className="w-full flex justify-center">
							{project.img ? <Image className="rounded-2xl w-full" src={project.img} alt={project.img} width={400} height={400}/> : null}
							{project.video
								? <div>
									<video src={project.video} autoPlay muted loop/>
								</div>
								: null}
						</div>
						<div className="text-center">{project.title}</div>
						<div>{project.description}</div>
						<div className="text-primary">{project.tech_stack_tags.join(', ')}</div>
						<div className="flex flex-row gap-3 justify-end">
							{project.github
								? <Link href={project.github} target="_blank">
									<FontAwesomeIcon className="cursor-pointer" icon={brand_icons.faGithub}/>
								</Link>
								: null
							}
							{project.link.length > 0
								? <Link href={project.link} target="_blank">
									<FontAwesomeIcon className="cursor-pointer" icon={solid_icons.faLink}/>
								</Link>
								: null
							}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}