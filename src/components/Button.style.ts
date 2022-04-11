import { Theme } from "../themes/Theme.style";

const Button = Theme.css({
  border: 0,
  height: "$3",
  fontSize: "$2",
  padding: "$1 $2",
  borderRadius: "$2",
  fontWeight: "$semiBold",
  fontFamily: "$secondary",
  transition: "all 300ms ease-in-out",
  "&:hover": {
    cursor: "pointer",
  },
});

const Filled = Theme.css(Button, {
  variants: {
    color: {
      blue: {
        color: "white",
        backgroundColor: "$blue500",
        "&:hover": {
          backgroundColor: "$blue600",
        },
      },
      fuschia: {
        color: "white",
        backgroundColor: "$fuschia500",
        "&:hover": {
          backgroundColor: "$fuschia600",
        },
      },
    },
  },
});

const Translucent = Theme.css(Button, {
  variants: {
    color: {
      blue: {
        color: "$blue800",
        backgroundColor: "$blue100A",
        "&:hover": {
          backgroundColor: "$blue200A",
        },
      },
      fuschia: {
        color: "$fuschia800",
        backgroundColor: "$fuschia100A",
        "&:hover": {
          backgroundColor: "$fuschia200A",
        },
      },
    },
  },
});

const Ghost = Theme.css(Button, {
  variants: {
    color: {
      blue: {
        color: "$blue800",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$blue100A",
        },
      },
      fuschia: {
        color: "$fuschia800",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$fuschia100A",
        },
      },
    },
  },
});

export { Button, Filled, Translucent, Ghost };
