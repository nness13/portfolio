import {Button, ButtonProps, Link} from "@nextui-org/react";

export default function MainButton (props: ButtonProps) {
  return (
    <Link href="#">
      <Button color="primary" variant="shadow">
        {props.children}
      </Button>
    </Link>
  )
}