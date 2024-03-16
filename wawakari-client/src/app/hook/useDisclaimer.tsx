import { useContext } from "react";
import { DisclaimerContext } from "../context/DisclaimerContext";

const useDisclaimer = () => {
  return useContext(DisclaimerContext);
};

export default useDisclaimer;
