import { GAME_VERSION_STATUS } from "./enum";

const STATUS_OBJ: Record<string, string> = {
  [GAME_VERSION_STATUS.PREPARE_FOR_SUBMISSION]: "review",
  [GAME_VERSION_STATUS.READY_FOR_DISTRIBUTION]: "ready",
  [GAME_VERSION_STATUS.IN_REVIEW]: "review",
  [GAME_VERSION_STATUS.CURRENT]: "success",
  [GAME_VERSION_STATUS.REJECTED]: "reject",
  [GAME_VERSION_STATUS.ARCHIVED]: "normal",
} as const;

export { STATUS_OBJ };
