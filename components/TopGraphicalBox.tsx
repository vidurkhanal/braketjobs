import { GraphicalBox } from "./GraphicalBox";
import { InputField } from "./InputField";

interface TopGraphicalBoxProps {}

export const TopGraphicalBox: React.FC<TopGraphicalBoxProps> = ({}) => {
  return (
    <GraphicalBox mb={10} alter={false}>
      <InputField
        jobName={"Job Title,Keywords"}
        jobLocation={"City,Country, 'remote'"}
      />
    </GraphicalBox>
  );
};
