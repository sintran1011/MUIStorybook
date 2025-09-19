import {
  Box,
  Step,
  StepLabel,
  Stepper,
  type StepperProps,
} from "@mui/material";
import { type ReactNode } from "react";
import { StyledStepConnector } from "./styled";

export type Step = {
  key: string;
  icon?: ReactNode;
  label?: string | ReactNode;
};

export interface BasicStep extends StepperProps {
  options: Step[];
  activeStep: number;
  alternativeLabel?: boolean;
}

const BasicStep = (props: BasicStep) => {
  const { options, activeStep, alternativeLabel = true } = props;

  const createCustomStepIcon = (icon: ReactNode) => {
    if (!icon) return undefined;
    const IconComponent = () => icon;
    return IconComponent;
  };

  return (
    <Box>
      <Stepper
        connector={<StyledStepConnector />}
        activeStep={activeStep}
        alternativeLabel={alternativeLabel}
      >
        {options.map((i) => (
          <Step key={i.key}>
            <StepLabel StepIconComponent={createCustomStepIcon(i.icon)}>
              {i.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default BasicStep;
