import {
  List,
  ListItem,
  Typography,
  type SxProps,
  type Theme,
} from "@mui/material";
import BasicTypography, { BasicTypographyProps } from "@stories/Typography";

interface IProps {
  children: string;
  typoProps?: BasicTypographyProps;
  sx?: SxProps<Theme>;
  mode?: "normal" | "viewMore";
}
const TextAreaView = (props: IProps) => {
  const { children = "", typoProps, sx, mode = "normal" } = props;
  const splitText = children.split("\n");
  return (
    <List
      sx={{ width: "100%", justifyContent: "start", maxWidth: "100%", ...sx }}
    >
      {splitText.map((i) => (
        <ListItem sx={{ display: "list-item", p: 0 }} key={i}>
          {mode === "normal" ? (
            <Typography lines={2} variant="body-small" {...typoProps}>
              {i}
            </Typography>
          ) : (
            <BasicTypography lines={2} variant="body-small" {...typoProps}>
              {i}
            </BasicTypography>
          )}
        </ListItem>
      ))}
    </List>
  );
};

TextAreaView.displayName = "TextAreaView";

export default TextAreaView;
