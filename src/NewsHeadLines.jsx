import React ,{ createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/NewsHeadLines.css";

export function NewsHeadLines({ apiKey }) {
    return <HelloWorldSample apiKey={apiKey} />;
}
