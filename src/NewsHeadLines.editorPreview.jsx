import React , { createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

export function preview({ apiKey }) {
    return <HelloWorldSample apiKey={apiKey} />;
}

export function getPreviewCss() {
    return require("./ui/NewsHeadLines.css");
}
