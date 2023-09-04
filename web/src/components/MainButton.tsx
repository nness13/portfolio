import {Button, ButtonProps, Link} from "@nextui-org/react";

export default function (props: ButtonProps) {
  return (
    <Button as={Link} color="primary" href="#" variant="shadow">
      {props.children}
    </Button>
  )
}