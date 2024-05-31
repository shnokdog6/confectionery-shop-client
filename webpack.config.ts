import { Configuration } from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";
import WebpackPwaManifest from "webpack-pwa-manifest";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

interface Environment {
    mode: "development" | "production";
    public_url: string;
    port: number;
}

function createConfig(env: Environment): Configuration {
    const isDev: boolean = env.mode === "development";

    return {
        mode: env.mode,
        entry: {
            app: "./src/app/index.tsx"
        },
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "static/js/[name].[contenthash:8].js",
            chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: "/node_modules/"
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: `static/media/[name].[hash][ext]`
                    }
                },
                {
                    test: /\.css$/i,
                    generator: {
                        filename: `static/css/[name].[hash][ext].css`
                    },
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            alias: {
                "@images": path.resolve(__dirname, "src/shared/assets/images"),
                "@shared": path.resolve(__dirname, "src/shared"),
                "@widgets": path.resolve(__dirname, "src/widgets"),
                "@entities": path.resolve(__dirname, "src/entities"),
                "@features": path.resolve(__dirname, "src/features"),
                "@pages": path.resolve(__dirname, "src/pages")
            }
        },
        devtool: false,
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, env.public_url, "index.html"),
                favicon: path.resolve(
                    __dirname,
                    env.public_url,
                    "icons/favicon.ico"
                ),
                inject: "head",
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true
                }
            }),
            new MiniCssExtractPlugin({
                filename: "static/css/[name].[contenthash:8].css"
            }),
            new WebpackPwaManifest({
                filename: "manifest.json",
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
                            "icons/favicon.ico"
                        ),
                        sizes: [16, 24, 32, 64],
                        type: "image/x-icon",
                        destination: path.join("static", "icons")
                    },
                    {
                        src: path.resolve(
                            __dirname,
                            env.public_url,
                            "icons/logo192.png"
                        ),
                        size: "192x192",
                        type: "image/png",
                        destination: path.join("static", "icons"),
                        ios: true
                    },
                    {
                        src: path.resolve(
                            __dirname,
                            env.public_url,
                            "icons/logo512.png"
                        ),
                        size: "512x512",
                        type: "image/png",
                        destination: path.join("static", "icons")
                    }
                ]
            })
        ],
        optimization: {
            runtimeChunk: "single",
            splitChunks: {
                chunks: "all",
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module: any) {
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/) ?? "package";
                            return `${packageName[1].replace("@", "")}`;
                        }
                    }
                }
            },
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        parse: {
                            ecma: 2018
                        },
                        compress: {
                            ecma: 5,
                            comparisons: false,
                            inline: 2
                        },
                        mangle: {
                            safari10: true
                        },
                        keep_classnames: isDev,
                        keep_fnames: isDev,
                        output: {
                            ecma: 5,
                            comments: false,
                            ascii_only: true
                        }
                    }
                }),
                new CssMinimizerPlugin()
            ]
        }
    };
}

export default createConfig(process.env as unknown as Environment);
