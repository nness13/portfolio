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
	md:w-2/3
	mx-10
	flex
	flex-col-reverse
	gap-10
	sm:flex-row
	justify-around
`}/>

export const ContentBlock = ({ className = '', ...rest_props }: propsType) =>
	<div {...rest_props} className={className + `
	lg:w-[500px]
	text-secondary
	flex
	flex-col
	gap-3
`}/>