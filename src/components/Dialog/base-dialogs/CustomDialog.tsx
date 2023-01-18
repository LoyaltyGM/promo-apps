import * as React from "react";

import { Dialog } from "ariakit/dialog";
import classNames from "classnames";
import { HeaderDialog } from "./HeaderDialog";
import { ICustomDialogProps } from "interfaces";

/**
 * Custom dialog template with own design style
 *
 * @param dialog - element dialog
 * @param className - change style of dialog
 * @param children - content of dialog
 * @param isClose - close dialog on click outside or press escape
 * @param header - show header of dialog
 *
 * @returns JSX.Element - dialog
 **/

export const CustomDialog = ({ dialog, className, children, isClose = true, header = true }: ICustomDialogProps) => {
    return (
        <Dialog
            hideOnInteractOutside={isClose}
            hideOnEscape={isClose}
            state={dialog}
            className={classNames("dialog", className)}
        >
            {header && <HeaderDialog title="" dialog={dialog} />}
            <div className="h-full w-full my-4">
                <div className="pt-4 px-6">{children}</div>
            </div>
        </Dialog>
    );
};
