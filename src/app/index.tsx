import { IntlProvider } from "react-intl";
import { intlConfig } from "../i18n";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AuthProvider } from "../data/authentication";
import { QueryClient, QueryClientProvider } from "react-query";

export const App = () => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <IntlProvider {...intlConfig}>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </IntlProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
