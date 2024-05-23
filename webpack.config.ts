import { Configuration } from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";
import WebpackPwaManifest from "webpack-pwa-manifest";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface Environment {
    mode: "development" | "production";
    public_url: string;
    port: number;
}

function createConfig(env: Environment): Configuration {
    let isDev: boolean = env.mode === "development";

    return {
        mode: env.mode,
        entry: "./src/app/index.tsx",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[name].[contenthash].js",
        },
        devServer: {
            static: {
                directory: env.public_url,
            },
            port: env.port,
            historyApiFallback: true
        },
        devtool: "inline-source-map",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: "/node_modules/",
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: `${env.public_url}/images/[hash][ext]`,
                    },
                },
                {
                    test: /\.css$/i,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                    ],
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            alias: {
                "@images": path.resolve(__dirname, "public/images"),
                "@shared": path.resolve(__dirname, "src/shared"),
                "@widgets": path.resolve(__dirname, "src/widgets"),
                "@entities": path.resolve(__dirname, "src/entities"),
                "@features": path.resolve(__dirname, "src/features"),
                "@pages": path.resolve(__dirname, "src/pages"),
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, env.public_url, "index.html"),
                favicon: path.resolve(
                    __dirname,
                    env.public_url,
                    "icons/favicon.ico",
                ),
                inject: "head",
            }),
            new MiniCssExtractPlugin(),
            new WebpackPwaManifest({
                publicPath: "./",
                name: "React App Sample",
                short_name: "React App",
                start_url: "/",
                display: "standalone",
                theme_color: "#000000",
                background_color: "#ffffff",
                ios: true,
                icons: [
                    {
                        src: path.resolve(
                            __dirname,
                            env.public_url,
                            "icons/favicon.ico",
                        ),
                        sizes: [16, 24, 32, 64],
                        type: "image/x-icon",
                        destination: path.join(env.public_url, "icons"),
                    },
                    {
                        src: path.resolve(
                            __dirname,
                            env.public_url,
                            "icons/logo192.png",
                        ),
                        size: "192x192",
                        type: "image/png",
                        destination: path.join(env.public_url, "icons"),
                        ios: true,
                    },
                    {
                        src: path.resolve(
                            __dirname,
                            env.public_url,
                            "icons/logo512.png",
                        ),
                        size: "512x512",
                        type: "image/png",
                        destination: path.join(env.public_url, "icons"),
                    },
                ],
            }),
        ],
    };
}

export default createConfig(process.env as unknown as Environment);
