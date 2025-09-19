import { defineConfig } from "@chakra-ui/react";
import "@fontsource/inter";

const config = defineConfig ({
    theme: {
        fonts: {
            heading: "Inter, sans-serif",
            body: "Inter, sans-serif",
        },
    }
});

export default config;