import { tech_stack_data } from '@/config/stack_data'
import { tools_stack_data } from '@/config/stack_data'

type type_data = {
	title: string
	description: string
	tech_stack_tags: string[]
	img: string
	video: string
	link: string
	github: string
}

export const portfolio_projects_data = [
	{
		title: "Personal Website",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: "/portfolio/personal_website.png",
		video: "",
		tech_stack_tags: [
			tech_stack_data.typescript.title,
			tech_stack_data.nextjs.title,
			tech_stack_data.tailwind.title,
			tools_stack_data.docker.title,
			tools_stack_data.husky.title,
		],
		link: "http://ns13.online/portfolio",
		github: "https://github.com/nness13/portfolio"
	},
	{
		title: "TrafficBOX Services",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: "/portfolio/trafficbox_services.png",
		video: "",
		tech_stack_tags: [
			tech_stack_data.typescript.title,
			tech_stack_data.nextjs.title,
			tech_stack_data.redux.title,
			tech_stack_data.tailwind.title,
			tech_stack_data.fastify.title,
			tech_stack_data.puppeteer.title,
			tech_stack_data.zod.title,
			tech_stack_data.prisma.title,
			tech_stack_data.postgresSQL.title,
			tech_stack_data.redis.title,
			tech_stack_data.jest.title,
			tech_stack_data.bash.title,
			tools_stack_data.docker.title,
			tools_stack_data.husky.title,
		],
		link: "",
		github: ""
	},
	{
		title: "TrafficON Services",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: "/portfolio/trafficon.png",
		video: "",
		tech_stack_tags: [
			tech_stack_data.reactjs.title,
			tech_stack_data.redux.title,
			tech_stack_data.puppeteer.title,
			tech_stack_data.redis.title,
			tech_stack_data.typescript.title,
			tech_stack_data.express.title,
			tech_stack_data.mongodb.title,
			tools_stack_data.docker.title,
			tools_stack_data.husky.title,
		],
		link: "",
		github: ""
	},
	{
		title: "Open Source Library (zod-prisma-with-includes)",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: tech_stack_data.zod.img,
		video: "",
		tech_stack_tags: [
			tech_stack_data.nodejs.title,
			tech_stack_data.prisma.title,
			tech_stack_data.zod.title,
			tools_stack_data.husky.title
		],
		link: "",
		github: "https://github.com/nness13/zod-prisma-with-includes"
	},
	{
		title: "Open Source Library (telegraf-qr)",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: tech_stack_data.telegraf.img,
		video: "",
		tech_stack_tags: [
			tech_stack_data.nodejs.title,
			tech_stack_data.prisma.title,
			tech_stack_data.zod.title,
			tools_stack_data.husky.title
		],
		link: "",
		github: "https://github.com/nness13/zod-prisma-with-includes"
	},
	{
		title: "Telegram Bot Services",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: "/portfolio/telegram_services.png",
		video: "",
		tech_stack_tags: [
			tech_stack_data.nodejs.title,
			tech_stack_data.telegraf.title,
			tech_stack_data.zod.title,
			tech_stack_data.prisma.title,
			tech_stack_data.postgresSQL.title,
			tools_stack_data.docker.title,
		],
		link: "",
		github: ""
	},
	{
		title: "CRM & Traffic Tracker for ADW",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: "/portfolio/adw_crm.png",
		video: "",
		tech_stack_tags: [
			tech_stack_data.apache.title,
			tech_stack_data.php.title,
			tech_stack_data.laravel.title,
			tech_stack_data.js.title,
			tech_stack_data.reactjs.title,
			tech_stack_data.redux.title,
			tech_stack_data.puppeteer.title,
		],
		link: "",
		github: ""
	},
	{
		title: "JPODS",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: "",
		video: "/portfolio/jpods.mp4",
		tech_stack_tags: [
			tech_stack_data.java.title,
		],
		link: "",
		github: ""
	},
	{
		title: "ChatBot Service j-inn.com",
		description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
		img: "",
		video: "/portfolio/jinn_chatbot_service.mp4",
		tech_stack_tags: [
			tech_stack_data.apache.title,
			tech_stack_data.php.title,
			tech_stack_data.laravel.title,
			tech_stack_data.reactjs.title,
			tech_stack_data.redux.title,
			tech_stack_data.mysql.title,
		],
		link: "",
		github: ""
	},
] satisfies type_data[]