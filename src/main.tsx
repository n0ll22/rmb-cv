import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./Translation/en/global.json";
import global_hu from "./Translation/hu/global.json";

i18next.init({
    interpolation: { escapeValue: true },
    lng: "en",
    resources: {
        en: {
            global: global_en,
        },
        hu: {
            global: global_hu,
        },
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </StrictMode>
);
