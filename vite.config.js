import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
    base: "/",
    publicDir: "./public",
    plugins: [
        react(),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 20,
            },
            pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: "removeViewBox",
                    },
                    {
                        name: "removeEmptyAttrs",
                        active: false,
                    },
                ],
            },
        }),
    ],
    build: {
        outDir: "./dist",
    },
});
