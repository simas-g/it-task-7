import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router";
import PresentationPage from "./pages/PresentationPage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  { path: "/presentation/:id", element: <PresentationPage /> },
];

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client} className="min-vh-100">
    <BrowserRouter>
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element}></Route>
        ))}
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
