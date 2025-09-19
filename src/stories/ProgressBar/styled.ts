import { LinearProgress, linearProgressClasses, styled } from "@mui/material";

const StyledProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.root}`]: {
    overflow: "hidden",
    borderRadius: 5,
    backgroundColor: theme.palette.interaction.neutral.subtleActive,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.interaction.default.normal,
  },
}));

export { StyledProgress };
