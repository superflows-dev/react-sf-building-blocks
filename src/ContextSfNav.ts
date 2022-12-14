import React from "react";
import { InterfaceNavigate } from "./InterfaceNavigate";
import {InterfaceSfNavProvider} from "./InterfaceSfNavProvider";

const ContextSfNav = React.createContext<InterfaceSfNavProvider>({
    navigateTo: ({ link = "", component = null, args = null}: InterfaceNavigate) => {link = "abc"; component = args; args = component; component = link;},
    navigationData: { link: "", component: null, args: null}
});
export const ContextSfNavProvider = ContextSfNav.Provider;

export default ContextSfNav;