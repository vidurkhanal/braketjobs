import { Box } from "@chakra-ui/react";

interface GraphicalBoxProps {
  mb: number;
  alter: boolean;
}

export const GraphicalBox: React.FC<GraphicalBoxProps> = ({
  children,
  mb = 20,
  alter = false,
}) => {
  return (
    <Box
      backgroundImage={
        !alter
          ? [
              "url('/images/bg-header-mobile.svg')",
              "url('/images/bg-header-mobile.svg')",
              "url('/images/bg-header-desktop.svg')",
            ]
          : "null"
      }
      h="max-content"
      minH="130px"
      backgroundColor={!alter ? "hsl(180, 29%, 50%)" : "#3c4766"}
      mb={mb}
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
