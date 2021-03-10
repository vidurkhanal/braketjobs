import { Box } from "@chakra-ui/layout";

interface StickyBoxProps {}

export const StickyBox: React.FC<StickyBoxProps> = ({ children }) => {
  return (
    <Box zIndex="1" position="sticky" top="0">
      {children}
    </Box>
  );
};
