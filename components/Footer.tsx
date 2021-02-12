import { GraphicalBox } from "./GraphicalBox";
import { Text } from "@chakra-ui/react";
import moment from "moment";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <GraphicalBox mb={0}>
      <Text color="white" fontWeight="700" textAlign="center">
        &#169; {moment().year()} Braket Jobs
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