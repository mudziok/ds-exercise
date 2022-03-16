import { FC } from "react";
import styles from "./styles.module.scss";

export const ActionButtonSizes = {
    big: styles.big,
    medium: styles.medium,
    small: styles.small,
} as const;

type ActionButtonSize = typeof ActionButtonSizes[keyof typeof ActionButtonSizes];

interface ActionButtonProps {
    onClick?: () => void,
    disabled?: boolean,
    size?: ActionButtonSize,
}

export const ActionButton:FC<ActionButtonProps> = ({children, onClick = () => {}, disabled = false, size = ActionButtonSizes.medium}) => {
    return (
        <button
            className={`${styles.button} ${size}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}