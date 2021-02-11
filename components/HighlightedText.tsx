import { Text } from "@chakra-ui/react";

export const HighlightedText = (text: string) => (
  <Text
    key={text.length}
    marginRight={2}
    marginY={2}
    px={2}
    fontWeight="bold"
    borderRadius="full"
    color="hsl(180, 29%, 50%)"
    backgroundColor="hsl(180, 31%, 95%)"
    style={{ display: "inline-block" }}
    userSelect="none"
    animation="300ms all ease"
    _hover={{ backgroundColor: "hsl(180, 29%, 50%)", color: "white" }}
  >
    {text}
  </Text>
);
