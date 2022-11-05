import {
    Button
  } from "@chakra-ui/react";
  import { Link } from "react-scroll";
function Links({link, drawerOpen, onClose}) {
  return (
    <>
      <Button m={2} variant="link">
        <Link
          to={link.to}
          spy={true}
          smooth={true}
          offset={100}
          duration={800}
          onClick={drawerOpen? onClose : null}
        >
          {link.section}
        </Link>
      </Button>
    </>
  );
}

export default Links