export type stack_data_type = {
	key: string,
	title: string,
	img: string,
	level: "Beginner" | "Intermediate" | "Advanced"
}[]

export const tech_stack_data = {
	"html": { title: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg", level: "Advanced" },
	"css": { title: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", level: "Advanced" },
	"js": { title: "Javascript", img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", level: "Advanced" },
	"typescript": { title: "TypeScript", img: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg", level: "Advanced" },
	"php": { title: "PHP", img: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", level: "Advanced" },
	"java": { title: "JAVA", img: "/tech_stack/java2.png", level: "Beginner" },
	"python": { title: "Python", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", level: "Beginner" },
	"dart": { title: "Dart", img: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg", level: "Beginner" },
	"flutter": { title: "Flutter", img: "https://cdn.worldvectorlogo.com/logos/flutter.svg", level: "Beginner" },
	"sql": { title: "SQL", img: "/tech_stack/sql.svg", level: "Intermediate" },
	"bash": { title: "Bash", img: "/tech_stack/bash.png", level: "Intermediate" },
	"nodejs": { title: "NodeJS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", level: "Advanced" },
	"express": { title: "Express", img: "/tech_stack/expressjs.png", level: "Advanced" },
	"fastify": { title: "Fastify", img: "https://fastify.dev/img/logos/fastify-white.svg", level: "Advanced" },
	"nestjs": { title: "NestJS", img: "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg", level: "Beginner" },
	"reactjs": { title: "ReactJS", img: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg", level: "Advanced" },
	"nextjs": { title: "Next.js", img: "/tech_stack/nextjs.svg", level: "Advanced" },
	"redux": { title: "Redux", img: "/tech_stack/redux.png", level: "Advanced" },
	"redux-toolkit": { title: "ReduxToolkit", img: "/tech_stack/redux.png", level: "Advanced" },
	"mobx": { title: "mobx", img: "/tech_stack/mobx.png", level: "Advanced" },
	"tailwind": { title: "Tailwind CSS", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", level: "Advanced" },
	"telegraf": { title: "Telegraf", img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg", level: "Advanced" },
	"prisma": { title: "Prisma", img: "/tech_stack/prisma.svg", level: "Advanced" },
	"redis": { title: "Redis", img: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg", level: "Beginner" },
	"postgresSQL": { title: "PostgresSQL", img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", level: "Advanced" },
	"mysql": { title: "MySQL", img: "/tech_stack/mysql.png", level: "Advanced" },
	"mongodb": { title: "MongoDB", img: "/tech_stack/mongodb.png", level: "Intermediate" },
	"jest": { title: "Jest", img: "/tech_stack/jest.png", level: "Intermediate" },
	"puppeteer": { title: "Puppeteer", img: "https://www.vectorlogo.zone/logos/pptrdev/pptrdev-icon.svg", level: "Intermediate" },
	"zod": { title: "Zod", img: "/tech_stack/zod.png", level: "Advanced" },
	"swagger": { title: "Swagger", img: "/tech_stack/swagger.png", level: "Advanced" },
	"apache": { title: "Apache", img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Apache_HTTP_server_logo_%282019-present%29.svg", level: "Intermediate" },
	"wordpress": { title: "WordPress", img: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg", level: "Beginner" },
	"laravel": { title: "Laravel", img: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg", level: "Intermediate" },
	"vuejs": { title: "VueJS", img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", level: "Beginner" },
	"jquery": { title: "JQUERY", img: "/tech_stack/jquery.png", level: "Advanced" },
};
export const tech_stack_data_array = Object.entries(tech_stack_data).map(([key, el]) => ({...el, key})) as stack_data_type

export const tools_stack_data = {
	"webstorm": { title: "WebStorm", img: "https://upload.wikimedia.org/wikipedia/commons/c/c0/WebStorm_Icon.svg", level: "Advanced" },
	"android_studio": { title: "Android Studio", img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Android_Studio_Icon_3.6.svg", level: "Beginner" },
	"pycharm": { title: "PyCharm", img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg", level: "Beginner" },
	"docker": { title: "Docker", img: "https://cdn.worldvectorlogo.com/logos/docker.svg", level: "Advanced" },
	"git": { title: "Git", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg", level: "Intermediate" },
	"github": { title: "GitHub", img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", level: "Intermediate" },
	"jira": { title: "Jira", img: "https://cdn.worldvectorlogo.com/logos/jira-1.svg", level: "Beginner" },
	"yarn": { title: "Yarn", img: "https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg", level: "Advanced" },
	"npm": { title: "npm", img: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg", level: "Advanced" },
	"husky": { title: "Husky", img: "/tech_stack/husky.png", level: "Advanced" },
	"eslint": { title: "ESLint", img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg", level: "Advanced" },
	"prettier": { title: "Prettier", img: "https://cdn.worldvectorlogo.com/logos/prettier-1.svg", level: "Advanced" },
	"postman": { title: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", level: "Intermediate" },
}
export const tools_stack_data_array = Object.entries(tools_stack_data).map(([key, el]) => ({...el, key})) as stack_data_type

export const architecture_stack_data = {
	"flux": { title: "FLUX", img: "FLUX", level: "Advanced" },
	"microservices": { title: "Microservices", img: "Microservices", level: "Advanced" },
	"mvc": { title: "MVC", img: "MVC", level: "Advanced" },
	"mvp": { title: "MVP", img: "MVP", level: "Beginner" },
	"mvi": { title: "MVI", img: "MVI", level: "Beginner" },
}
export const architecture_stack_data_array = Object.entries(architecture_stack_data).map(([key, el]) => ({...el, key})) as stack_data_type

export const tabs = {
	"tech_stack": { title: "Tech Stack", data: tech_stack_data_array },
	"tools": { title: "Tools", data: tools_stack_data_array },
	"architecture_structure": { title: "Architecture & Structure", data: architecture_stack_data_array },
}
export const tabs_array = Object.entries(tabs).map(([key, el]) => ({...el, key}))