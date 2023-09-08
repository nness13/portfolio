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
		description: "My personal website, I created this website to display my profile, skills and projects.",
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
		description: "TrafficBOX is a platform that includes several microservices and is conditionally divided into the following parts: auth_service, traffic tracker, crm application management, finance tracker, email_service, notification_service",
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
			tech_stack_data.swagger.title,
		],
		link: "",
		github: ""
	},
	{
		title: "TrafficON Services",
		description: "TrafficON is a crm system for managing leads and integrations, with partners, landing pages, offers and advertising campaigns for the TrafficUP media buying team",
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
		description: "This library is based on the zod-prisma library and improves the functionality of this library. \n\n" +
			"Zod-prisma allows you to generate zod types for each prisma model, the generated file exports 2 types, a type with scalar properties of the model, the second type of model relations.\n\n" +
			"Zod-prisma-with-includes - solves the problem of obtaining a flexible type, namely, according to the options passed when calling, generates a type with the necessary fields",
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
		description: "This is a library that improves the experience of writing telegram bots by using the telegraf library.\n\n" +
			"The standard approach to writing scripts for bots is based on responding to a user's request.\n\n" +
			"Telegraf-QR (Question-Response) allows you to ask a user and wait for an answer in one function",
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
		description: "Telegram bot - to automate the work with multi-accounts of Telegram, it implements the following features: \n" +
			"1. Sending messages from one channel or chat to another.\n" +
			"2. Parsing users\n" +
			"3. Mass mailing of messages with the marking of all users\n" +
			"4. Invite users to groups or channels.\n" +
			"Proxy and account manager have also been released.\n" +
			"And a small dashboard has been written.\n" +
			"The bot is multi-user, so we have implemented an authorization and user management service.",
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
		description: "This is a CRM system for managing leads and integrations with partners, landing pages, offers, and advertising campaigns for the ADW media buying team\n\n" +
			"For the farm department, we have implemented CRM for Facebook, Twitter, Google accounts and a system for automating account farming on puppeteer and integrating with Indigo antidetect browser",
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
		title: "Google Chrome Extension InstaJinn",
		description: "Google Chrome extension for Instagram automation with the following features:\n" +
			"1. Parsing followers/following\n" +
			"2. Mass following\n" +
			"3. Mass liking",
		img: "",
		video: "/portfolio/insta_jinn.mp4",
		tech_stack_tags: [
			tech_stack_data.js.title,
			tech_stack_data.html.title,
			tech_stack_data.css.title,
		],
		link: "",
		github: "https://github.com/nness13/InstaParser"
	},
	{
		title: "JPODS",
		description: "An application for the Android operating system - solved the problems of using airpods with android\n" +
			"1. Simplifies the process and speed of connection.\n" +
			"2. Viewing the charge of the headphones\n" +
			"3. Allows you to customize your airpods similarly to the IOS settings.\n" +
			"Adds a UI (user interface) that is as close as possible to the connection interface in the IOS system",
		img: "",
		video: "/portfolio/jpods.mp4",
		tech_stack_tags: [
			tech_stack_data.java.title,
		],
		link: "",
		github: "https://github.com/nness13/JPods"
	},
	{
		title: "ChatBot Service j-inn.com",
		description: "A service for creating simple chatbots, sales funnels, and integrating these chatbots into your website.",
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