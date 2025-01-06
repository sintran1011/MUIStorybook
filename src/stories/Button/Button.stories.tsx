import { Meta } from "@storybook/react";
import Button from "@stories/Button";
import { Grid2, Typography } from "@mui/material";

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const ARR: {
  title: string;
  props: Record<string, any>;
}[] = [
  {
    title: "Cancel / small",
    props: {
      size: "small",
      sx: { backgroundColor: "#ffffff0a", backdropFilter: "blur(25px)" },
    },
  },
  {
    title: "Create / medium",
    props: {
      size: "medium",
    },
  },
  {
    title: "Delete / large",
    props: {
      size: "large",
      sx: { backgroundColor: "#EF4923" },
    },
  },
];

export const Default = () => {
  return (
    <Grid2 spacing={4} container>
      {ARR.map((i) => (
        <Grid2 key={i.title}>
          <Button {...i.props}>
            <Typography
              color="white"
              variant="label-large"
              fontSize="14px"
              fontWeight={600}
              lineHeight="18px"
            >
              {i.title}
            </Typography>
          </Button>
        </Grid2>
      ))}
    </Grid2>
  );
};

Default.parameters = {
  docs: {
    source: {
      code: `
const theme = useTheme();

 <Button
  size="small"
  sx={{ backgroundColor: "#ffffff0a", backdropFilter: "blur(25px)" }}
>
  <Typography
    color="white"
    variant="label-large"
    fontSize="14px"
    fontWeight={600}
    lineHeight="18px"
  >
    Cancel / small
  </Typography>
</Button>

<Button
  size="medium"
>
  <Typography
    color="white"
    variant="label-large"
    fontSize="14px"
    fontWeight={600}
    lineHeight="18px"
  >
    Create / medium
  </Typography>
</Button>

<Button
  size="large"
  sx: { backgroundColor: theme.palette.primary[500] },
>
  <Typography
    color="white"
    variant="label-large"
    fontSize="14px"
    fontWeight={600}
    lineHeight="18px"
  >
    Delete / large
  </Typography>
</Button>     
      `,
    },
  },
};
