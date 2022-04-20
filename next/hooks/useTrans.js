import { useRouter } from "next/router";
import en from "../i18n/en.json";
import vi from "../i18n/vi.json";

function useTrans() {
  const router = useRouter();
  return router.locale === "vi" ? vi : en;
}

export default useTrans;
