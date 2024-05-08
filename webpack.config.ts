import {Configuration} from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server"

interface Environment {
    mode: "development" | "production"
}

const config = (env: Environment): Configuration => {
    return ({
            mode: env.mode,
            entry: "./src/app/index.tsx",
            output: {
                path: path.resolve(__dirname, "build"),
                filename: "[name][contenthash].js"
            },
            devServer: {
                static: {
                    directory: "public"
                }
            },
            devtool: "inline-source-map",
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        use: "ts-loader",
                        exclude: "/node_modules/"
                    },
                    {
                        test: /\.(png|svg|jpg|jpeg|gif)$/i,
                        type: 'asset/resource',
                    },
                    {
                        test: /\.css$/i,
                        use: ["style-loader", "css-loader"],
                    },
                ]
            },
            resolve: {
                extensions: ['.tsx', '.ts', '.js'],
                alias: {
                    "@images" : path.resolve(__dirname, "public/images"),
                    "@shared" : path.resolve(__dirname, "src/shared"),
                    "@widgets" : path.resolve(__dirname, "src/widgets"),
                    "@entities" : path.resolve(__dirname, "src/entities"),
                    "@pages" : path.resolve(__dirname, "src/pages"),
                }
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "public/index.html"
                })
            ],
        }
    )
}

export default config;