import { Meta } from "@storybook/react";
import BasicModal from "@stories/Modal";
import { useState } from "react";
import Button from "@stories/Button";

const meta: Meta<typeof BasicModal> = {
  title: "Quoxent/BasicModal",
  component: BasicModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <BasicModal
        title="Title Modal Props"
        description="Description for Modal"
        onClose={() => setOpen(false)}
        open={open}
      >
        This is a demo for modal content
      </BasicModal>
    </div>
  );
};

Default.parameters = {
  docs: {
    source: {
      code: `
    const [open, setOpen] = useState<boolean>(false);
    
       <BasicModal
        title="Title Modal Props"
        description="Description for Modal"
        onClose={() => setOpen(false)}
        open={open}
        firstButton={{
          text: "Close",
          sx: {
            backgroundColor: "#00000080",
            color: "#ffffff",
          },
          props: {
            disabled: false,
            hidden: false,
          },
        }}
        secondButton={{
          text: "Save",
          sx: {
            backgroundColor: "#4caf50",
            color: "#ffffff",
          },
          props: {
            disabled: false,
            hidden: false,
            onClick: () => {},
            type: "button" | "submit",
            form: "formId",
          },
        }}
      >
        <Stack gap={2}>
          This is a demo for modal content
        </Stack>
      </BasicModal>
      `,
    },
  },
};
