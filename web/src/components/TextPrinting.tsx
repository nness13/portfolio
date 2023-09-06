'use client';
// @ts-ignore
import Typed from 'typed.js'
import React, { useEffect, useRef } from 'react'

export type AsContainerPropsType = {
	children: string[]
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function TextPrinting (props: AsContainerPropsType) {
	const { children, className, ...rest_props } = props
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: children,
			startDelay: 0,
			typeSpeed: 50,
			backSpeed: 100,
			backDelay: 100,
			loop: true
		});
		return () => typed.destroy();
	}, [children]);

	return (
		<div {...rest_props} className={"flex flex-row w-full justify-start whitespace-nowrap "+className}>
			<div ref={el} className="overflow-hidden font-mono whitespace-nowrap"/>
		</div>
	)
}