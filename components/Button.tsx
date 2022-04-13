import { MouseEventHandler } from 'react';
import classnames from 'classnames';

type Props = {
    type: "yellow" | "gray";
    text: "yellow" | "gray" | "white";
    children: any;
    click?: MouseEventHandler;
    link?: string;
}

const Button = ({ type, children, link = "#", click = () => {}, text }: Props) => {
    var textColor = "black";

    switch (text) {
        case "yellow": textColor = "text-primary-yellow"; break;
        case "gray": textColor = "text-primary-gray"; break;
        case "white": textColor = "text-white"; break;
    }

    return (
        <a href = {link} onClick = {click} className = {
            classnames([
                "px-8",
                "py-1",
                `bg-primary-${type}`,
                "text-xl",
                "button",
                textColor
            ])
        }>{ children }</a>
    )
}

export default Button