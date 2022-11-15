import {
    Button
  } from "@chakra-ui/react";
  import { Link } from "react-scroll";
function Links({link, drawerOpen, onClose}) {
  return (
    <div>
      <Button m={2} variant="link" size='lg'>
        <Link
          to={link.to}
          spy={true}
          smooth={true}
          offset={100}
          duration={1500}
          onClick={drawerOpen? onClose : null}
        >
          {link.section}
        </Link>
      </Button>
    </div>
  );
}

export default Links