import { useState } from 'react'
import { stack_data_type } from '@/config/stack_data'

type props_type = {
	default_index: string
	tabs: {
		key: string
		title: string
		data: stack_data_type
		TabComponent: JSX.Element
	}[]
}
export default function ({ tabs, default_index }: props_type) {
	const [activeTab, setActiveTab] = useState(default_index)
	const ActiveTab = tabs.find(t => t.key === activeTab) || tabs[0]

	return (
		<div className="w-full flex flex-col">
			<div className="flex flex-row bg-foreground py-5 rounded-2xl">
				{tabs.map(({ key, title }) => (
					<div
						className={`flex flex-row p-3 rounded-xl font-bold cursor-pointer ${activeTab === key ? 'bg-primary2 text-primary' : 'text-text_passive'}`}
						key={key}
						onClick={() => setActiveTab(key)}
					>
						{title}
					</div>
				))}
			</div>
			<div className="w-full">
				{ActiveTab.TabComponent}
			</div>
		</div>
	)
}