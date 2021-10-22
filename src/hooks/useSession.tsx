import { useContext } from "react";
import { SessionContext, ISessionContext} from "../context/SessionContext";

export function useSession(): ISessionContext {
  const context = useContext(SessionContext);

  return context;
}
