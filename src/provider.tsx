// import { FlagsConsole } from "./components";
import React from "react";
import { ReactSimpleFlagsContext, ReactSimpleFlagsProps } from "./context";

// const dev = process.env.NODE_ENV === "development";
interface Props {
  children: JSX.Element;
  initialFlags: ReactSimpleFlagsProps;
}

export const ReactSimpleFlagsProvider = ({
  children,
  initialFlags,
}: Props): JSX.Element => {
  // const [flags, setFlags] = useState(initialFlags);
  return (
    <ReactSimpleFlagsContext.Provider value={initialFlags}>
      {/* {dev && <FlagsConsole flags={flags} handleChange={setFlags} />} */}
      {children}
    </ReactSimpleFlagsContext.Provider>
  );
};
