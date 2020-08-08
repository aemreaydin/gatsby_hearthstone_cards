import React, { ReactElement } from "react";
import { navigate } from "gatsby";
import { RouteComponentProps } from "@reach/router";
import { isLoggedIn } from "@gFirebase/authHelpers";

type Component = React.FC<RouteComponentProps>;
type Props = RouteComponentProps & {
  component: Component;
};

export default function PrivateRoute({
  location,
  component: Component,
  ...rest
}: Props): ReactElement | null {
  if (!isLoggedIn() && location?.pathname !== `/app/login`) {
    navigate(`/app/login`);
    return null;
  }

  return <Component {...rest} />;
}
