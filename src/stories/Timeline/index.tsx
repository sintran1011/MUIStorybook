import Timeline, { TimelineProps as MuiTimelineProps } from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator, {
  type TimelineSeparatorProps,
} from "@mui/lab/TimelineSeparator";
import TimelineConnector, {
  type TimelineConnectorProps,
} from "@mui/lab/TimelineConnector";
import TimelineContent, {
  type TimelineContentProps,
} from "@mui/lab/TimelineContent";
import TimelineDot, { type TimelineDotProps } from "@mui/lab/TimelineDot";
import type { ReactNode } from "react";
import { Typography } from "@mui/material";

export interface TimelineOption {
  content?: string | ReactNode;
  icon?: ReactNode;
  dotProps?: TimelineDotProps;
  connectorProps?: TimelineConnectorProps;
  separatorProps?: TimelineSeparatorProps;
  contentProps?: TimelineContentProps;
}

export interface TimelineProps extends MuiTimelineProps {
  options: TimelineOption[];
}

const BasicTimeline = (props: TimelineProps) => {
  const { options = [], position, ...rest } = props;

  const renderContent = (content: string | ReactNode) =>
    typeof content === "string" ? (
      <Typography variant="body-medium">{content}</Typography>
    ) : (
      content
    );

  return (
    <Timeline {...rest}>
      {options.length > 0
        ? options.map((i, idx) => (
            <TimelineItem
              sx={{ "&::before": { display: position ? "block" : "none" } }}
              key={idx}
            >
              <TimelineSeparator {...i?.separatorProps}>
                <TimelineDot {...i?.dotProps}>{i.icon}</TimelineDot>
                {idx < options.length - 1 && (
                  <TimelineConnector {...i?.connectorProps} />
                )}
              </TimelineSeparator>
              <TimelineContent {...i?.contentProps}>
                {renderContent(i.content)}
              </TimelineContent>
            </TimelineItem>
          ))
        : null}
    </Timeline>
  );
};

export default BasicTimeline;

BasicTimeline.displayName = "BasicTimeline";
