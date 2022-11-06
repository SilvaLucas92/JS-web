import React, { useEffect, useState, useCallback } from "react";
import { Button, Icon } from "@chakra-ui/react";
import { animateScroll } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";
import { SCROLL_BUTTON_POSITION } from "./utils";

function ScrollBtn() {
  const { BOTTOM, RIGHT } = SCROLL_BUTTON_POSITION;
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (!hasScrolled && window.scrollY > 400) {
      setHasScrolled(true);
    } else if (hasScrolled && window.scrollY < 400) {
      setHasScrolled(false);
    }
  }, [hasScrolled]);
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <>
      <Button
        colorScheme="teal"
        bottom={BOTTOM}
        height={68}
        opacity={hasScrolled ? "1" : "0"}
        position="fixed"
        right={RIGHT}
        rounded="full"
        width={68}
        onClick={scrollToTop}
      >
        <Icon fontSize="25px" as={AiOutlineArrowUp} />
      </Button>
    </>
  );
}

export default ScrollBtn;
