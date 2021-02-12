import { Box } from "@chakra-ui/react";

interface GraphicalBoxProps {
  mb: number;
}

export const GraphicalBox: React.FC<GraphicalBoxProps> = ({
  children,
  mb = 20,
}) => {
  return (
    <Box
      backgroundImage={[
        "url('/images/bg-header-mobile.svg')",
        "url('/images/bg-header-mobile.svg')",
        "url('/images/bg-header-desktop.svg')",
      ]}
      h="max-content"
      minH="130px"
      w="100%"
      backgroundColor="hsl(180, 29%, 50%)"
      mb={mb}
      mt={mb == 0 ? 20 : 0}
      backgroundPosition="center"
      backgroundSize={{ sm: "cover", md: "cover", lg: "contain" }}
      display="grid"
      justifyContent="center"
      alignItems={["initial", "initial", "center"]}
      paddingTop={["10px", "10px", "initial"]}
    >
      {children}
    </Box>
  );
};
