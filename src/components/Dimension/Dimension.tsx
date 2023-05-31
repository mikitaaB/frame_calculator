import { ChangeEvent, FC, useState } from "react";
import s from "./dimension.module.scss";
import { DimensionPropsType } from "../../types";

export const Dimension: FC<DimensionPropsType> = props => {
	const {
		dimensionConfig,
		setSelectedWidth,
		setSelectedLength,
		setIsErrorOccured,
	} = props;
	const [length, setLength] = useState<number>(dimensionConfig.length.min);
	const [width, setWidth] = useState<number>(dimensionConfig.width.min);
	const [isLengthError, setIsLengthError] = useState<boolean>(false);
	const [isWidthError, setIsWidthError] = useState<boolean>(false);

	const isValidInputValue = (
		value: number,
		min: number,
		max: number
	): boolean => {
		return value < min || value > max || Number.isNaN(value);
	};

	const onHandleChangeWidth = (e: ChangeEvent<HTMLInputElement>) => {
		const curWidth: number = +e.target.value;
		const isErrorWidth = isValidInputValue(
			curWidth,
			dimensionConfig.width.min,
			dimensionConfig.width.max
		);
		setIsErrorOccured(isErrorWidth);
		setIsWidthError(isErrorWidth);
		setWidth(curWidth);
		setSelectedLength(curWidth);
	};
	const onHandleChangeLength = (e: ChangeEvent<HTMLInputElement>) => {
		const curLength: number = +e.target.value;
		const isErrorLength = isValidInputValue(
			curLength,
			dimensionConfig.length.min,
			dimensionConfig.length.max
		);
		setIsErrorOccured(isErrorLength);
		setIsLengthError(isErrorLength);
		setLength(curLength);
		setSelectedWidth(curLength);
	};

	return (
		<div className={s["dimension-container"]}>
			<div className={s["dimension-container-item"]}>
				<span>Длина:</span>
				<input
					type="number"
					value={length}
					onChange={onHandleChangeLength}
					className={
						isLengthError
							? s["dimension-container-item__input_error"]
							: s["dimension-container-item__input"]
					}
					max={dimensionConfig.length.max}
					min={dimensionConfig.length.min}
					step={dimensionConfig.length.step}
				/>
			</div>
			<div className={s["dimension-container-item"]}>
				<span>Ширина:</span>
				<input
					type="number"
					value={width}
					onChange={onHandleChangeWidth}
					className={
						isWidthError
							? s["dimension-container-item__input_error"]
							: s["dimension-container-item__input"]
					}
					max={dimensionConfig.width.max}
					min={dimensionConfig.width.min}
					step={dimensionConfig.width.step}
				/>
			</div>
		</div>
	);
};
