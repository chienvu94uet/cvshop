import { SECOND_TO_MILLION_SECOND } from "shared/constants/date";

function sleep(seconds) {
  const startTime = new Date().getTime();
  while (true) {
    const currentTime = new Date().getTime();
    if (currentTime - startTime > seconds * SECOND_TO_MILLION_SECOND) {
      break;
    }
  }
}

export { sleep };
