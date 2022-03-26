import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "../components/NavBar/NavBar";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Dock from "../components/Dock";
import { NextIntlProvider } from "next-intl";

function MyApp({ Component, pageProps, router }) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider attribute="class">
      <NextIntlProvider messages={pageProps.messages}>
        <div className="relative h-0">
          <Dock />
        </div>
        <div className="grid grid-cols-12 gap-6 px-5 my-4 lg:px-40 sm:px-20 md:px-24">
          {/* <div className="col-span-12 p-4 text-center lg:col-span-3 rounded-2xl">
            <Sidebar />
          </div> */}
          <div className="col-span-12 overflow-hidden rounded-2xl lg:col-span-12 md:col-span-12">
            {/* <NavBar />//TODO: Add NavBar position fixed  */}
            <div>
              <NavBar />
            </div>
            <QueryClientProvider client={queryClient} contextSharing={true}>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </QueryClientProvider>
          </div>
        </div>
      </NextIntlProvider>
    </ThemeProvider>
  );
}

export default MyApp;
