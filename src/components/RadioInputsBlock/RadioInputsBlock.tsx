import { ChangeEvent, FC, memo } from "react";
import s from "./radioInputsBlock.module.scss";
import { RadioInputsBlockPropsType } from "../../types";

export const RadioInputsBlock: FC<RadioInputsBlockPropsType> = memo(props => {
	const { label, curValue, data, setSelectedValue } = props;
	const onHandleMaterialInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(e.target.value);
	};

	return (
		<div className={s["input-radio-container"]}>
			<span>{`${label}:`}</span>
			<div className={s["input-radio-block"]}>
				{data.map((el, index) => (
					<label key={el.key} htmlFor={`radio-${index}`}>
						<input
							type="radio"
							value={el.key}
							checked={curValue === el.key}
							onChange={onHandleMaterialInput}
						/>
						<span>{el.name}</span>
					</label>
				))}
			</div>
		</div>
	);
});
