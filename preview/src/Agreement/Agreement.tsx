import { ActionButton } from "components";
import { FC } from "react";
import styles from "./styles.module.scss";

interface AgreementProps {
	onAgree: () => void,
	isSigned: boolean,
	buttonSize: "small" | "medium" | "large";
}

export const Agreement:FC<AgreementProps> = ({onAgree, isSigned, buttonSize}) => {
  return (
		<div className={styles.agreement}>
			<p className={styles.content}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam repellat dolor consequuntur voluptas, hic cumque molestiae excepturi earum. Enim ullam hic at? Praesentium hic eligendi magni quibusdam non quo ipsam.
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam repellat dolor consequuntur voluptas, hic cumque molestiae excepturi earum. Enim ullam hic at? Praesentium hic eligendi magni quibusdam non quo ipsam.
			</p>
			<ActionButton label="I agree" size={buttonSize} onClick={onAgree} disabled={isSigned}/>
		</div>
	);
}