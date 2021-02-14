import { GraphicalBox } from "./GraphicalBox";
import { Text } from "@chakra-ui/react";
import dayjs from "dayjs";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  let now = dayjs();
  let current_year = now.year();
  return (
    <GraphicalBox mb={0}>
      <Text color="white" fontWeight="700" textAlign="center">
        &#169;{current_year} Braket Jobs
        <br />
        Made By{" "}
        <Text as="a" href="mailto:vidur1@outlook.com?subject=Hello">
          Vidur Khanal
        </Text>{" "}
        using Next.Js and ❤️
      </Text>
    </GraphicalBox>
  );
};
