import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { history } from "..";
import { RootStoreContext } from "../Stores/rootStore";

const Reloading = () => {
  const rootStore = useContext(RootStoreContext);
  const { getUser, user } = rootStore.userStore;
  const { token } = rootStore.commonStore;

  const location = useLocation<any>();

  useEffect(() => {
    if (token && !user) {
      getUser().then(() => {
        if (location.state) {
          history.push(location.state.from);
        }
      });
    } else if (token && user) {
      if (location.state) {
        history.push(location.state.from);
      } else history.push("/dashboard");
    } else history.push("/");
  }, [token, user, location.state, getUser]);

  return null;
};

export default Reloading;
