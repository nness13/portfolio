import { tech_stack_data } from '@/config/stack_data'

type type_data = {
	title: string
	description: string
	tech_stack_tags: string[]
	img: string
	link: string
	github: string
}

export const portfolio_projects_data = [
	{
		title: "Personal Website",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: "/portfolio/personal_website.png",
		tech_stack_tags: [
			tech_stack_data.nextjs.title,
			tech_stack_data.tailwind.title,
		],
		link: "",
		github: ""
	},
	{
		title: "Personal Website",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: "/portfolio/personal_website.png",
		tech_stack_tags: [
			tech_stack_data.nextjs.title,
			tech_stack_data.tailwind.title,
		],
		link: "",
		github: ""
	},
	{
		title: "Personal Website",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: "/portfolio/personal_website.png",
		tech_stack_tags: [
			tech_stack_data.nextjs.title,
			tech_stack_data.tailwind.title,
		],
		link: "",
		github: ""
	},
	{
		title: "Personal Website",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: "/portfolio/personal_website.png",
		tech_stack_tags: [
			tech_stack_data.nextjs.title,
			tech_stack_data.tailwind.title,
		],
		link: "",
		github: ""
	},
	{
		title: "Personal Website",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: "/portfolio/personal_website.png",
		tech_stack_tags: [
			tech_stack_data.nextjs.title,
			tech_stack_data.tailwind.title,
		],
		link: "",
		github: ""
	}
] satisfies type_data[]