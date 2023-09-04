import React from 'react'

type propsType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const PageSection = ({ className = '', ...rest_props }: propsType) =>
	<div {...rest_props} className={className + `
	bg-foreground
	h-[calc(100vh-4rem)]
	flex
	justify-center
	items-center
	w-full
`}/>

export const ContentContainer = ({ className = '', ...rest_props }: propsType) =>
	<div {...rest_props} className={className + `
	w-2/3
	flex
	flex-col-reverse
	sm:flex-row
	justify-around
`}/>

export const ContentBlock = ({ className = '', ...rest_props }: propsType) =>
	<div {...rest_props} className={className + `
	lg:w-[500px]
	text-secondary
	font-bold
	flex
	flex-col
	gap-8
`}/>