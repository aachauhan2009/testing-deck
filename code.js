import React from "react";
import { CodeSurfer } from "code-surfer"
import { nightOwl } from "@code-surfer/themes"

export default function Code({ children, ...props }) {
    return <CodeSurfer {...props} theme={nightOwl}>{children}</CodeSurfer>
}