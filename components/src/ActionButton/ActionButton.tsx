import { FC } from "react";
import styles from "./styles.module.scss";

export const ActionButtonSizes = {
    large: styles.big,
    medium: styles.medium,
    small: styles.small,
} as const;

export interface ActionButtonProps {
    label: string,
    onClick?: () => void,
    disabled?: boolean,
    size?: "small" | "medium" | "large",
}

export const ActionButton:FC<ActionButtonProps> = ({label, onClick = () => {}, disabled = false, size = "medium"}) => {
    if (label.length > 100) {
        return null;
    }

    return (
        <button
            className={`${styles.button} ${ActionButtonSizes[size]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    )
}