// @ts-ignore
import Typed from "typed.js"
import React, { useEffect, useRef, useState } from 'react'

export type AsContainerPropsType = {
	children: string[]
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function (props: AsContainerPropsType) {
	const { children, className, ...rest_props } = props
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: children,
			startDelay: 300,
			typeSpeed: 100,
			backSpeed: 100,
			backDelay: 100,
			loop: true
		});
		return () => typed.destroy();
	}, []);

	return (
		<div {...rest_props} className={"flex flex-row w-full justify-start whitespace-nowrap "+className}>
			<div ref={el} className="overflow-hidden font-mono whitespace-nowrap"/>
		</div>
	)
}