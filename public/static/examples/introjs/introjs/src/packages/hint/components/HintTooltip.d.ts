import { TooltipProps } from "../../tooltip/tooltip";
import { HintItem } from "../hintItem";
export type HintTooltipProps = Omit<TooltipProps, "hintMode" | "element" | "position"> & {
    hintItem: HintItem;
    closeButtonEnabled: boolean;
    closeButtonOnClick: (hintItem: HintItem) => void;
    closeButtonLabel: string;
    closeButtonClassName: string;
};
export declare const HintTooltip: ({ hintItem, closeButtonEnabled, closeButtonOnClick, closeButtonLabel, closeButtonClassName, ...props }: HintTooltipProps) => HTMLDivElement;
