import { NavbarBrand } from '@nextui-org/react'
import { metadata_config } from '@/config/metadata'

export default function BrandLogo () {
    return (
        <NavbarBrand>
            {/*<Logo />*/}
            <p className="font-bold cursor-pointer text-primary">{metadata_config.title}</p>
        </NavbarBrand>
    )
}