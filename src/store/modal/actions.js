import store from "~/store/index.js";
import {_setModal, _removeModal} from "~/store/modal";

export const setModal = (name, data = false) => store.dispatch(_setModal({name, data}))
export const removeModal = () => store.dispatch(_removeModal())