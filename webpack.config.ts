import { Configuration } from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";
import WebpackPwaManifest from "webpack-pwa-manifest";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import TerserPlugin from "terser-webpack-plugin";

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
            app: "./src/app/index.tsx",
        },
        output: {
            path: path.resolve(__dirname, "build"),
            filename: 'static/js/[name].[contenthash:8].js',
            chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
            publicPath: env.public_url,
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
                "@images": path.resolve(__dirname, "public/images"),
                "@shared": path.resolve(__dirname, "src/shared"),
                "@widgets": path.resolve(__dirname, "src/widgets"),
                "@entities": path.resolve(__dirname, "src/entities"),
                "@features": path.resolve(__dirname, "src/features"),
                "@pages": path.resolve(__dirname, "src/pages")
            }
        },
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
            new MiniCssExtractPlugin(),
            new BundleAnalyzerPlugin(),
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
                        destination: path.join(env.public_url, "icons")
                    },
                    {
                        src: path.resolve(
                            __dirname,
                            env.public_url,
                            "icons/logo192.png"
                        ),
                        size: "192x192",
                        type: "image/png",
                        destination: path.join(env.public_url, "icons"),
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
                        destination: path.join(env.public_url, "icons")
                    }
                ]
            })
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        name: "vendors",
                        test: /[\\/]node_modules[\\/]/,
                        chunks: "all"
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
                })
            ]
        }
    };
}

export default createConfig(process.env as unknown as Environment);
