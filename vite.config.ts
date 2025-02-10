import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/med-ai-vo/", // Add this line - replace with your repo name
    plugins: [
        react()
    ]
});
