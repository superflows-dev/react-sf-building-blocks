import {InterfaceNavigate} from "./InterfaceNavigate";

interface InterfaceSfNavProvider {
    navigateTo: (value: InterfaceNavigate) => void;
    navigationData: InterfaceNavigate;
}

export {type InterfaceSfNavProvider};