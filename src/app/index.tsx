import { IntlProvider } from "react-intl";
import { intlConfig } from "../i18n";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AuthContextProvider } from "@/data/authentication";

export const App = () => {
  return (
    <BrowserRouter>
      <IntlProvider {...intlConfig}>
        <AuthContextProvider>
          <AppRoutes />
        </AuthContextProvider>
      </IntlProvider>
    </BrowserRouter>
  );
};
