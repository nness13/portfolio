'use client'
import Image from 'next/image'
import { portfolio_projects_data } from '@/config/portfolio_projects_data'
import * as brand_icons from '@fortawesome/free-brands-svg-icons'
import * as solid_icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Home () {
	return (
		<div className="bg-foreground w-full py-20 min-h-[calc(100vh-4rem)] flex flex-col items-center gap-10">
			<div className="flex flex-col items-center">
				<div className="text-secondary text-2xl font-bold">Past Project Experience</div>
				<div className="text-primary">Explore the projects I've worked on so far</div>
			</div>
			<div className="grid grid-cols-3 gap-5 w-2/4 text-secondary">
				{portfolio_projects_data.map(project => (
					<div className="bg-passive p-5 flex flex-col gap-3 rounded-2xl hover:translate-y-[-5px] transition" key={project.title}>
						<Image className="rounded-2xl" src={project.img} alt={project.img} width={400} height={400}/>
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

