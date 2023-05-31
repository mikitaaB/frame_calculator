import { FC, memo } from "react";
import data from "../../data/data.json";
import config from "../../data/config.json";
import s from "./calculateButton.module.scss";
import {
	fixStr,
	frameStr,
	listLength,
	listStr,
	pipeStr,
} from "../../constants";
import {
	CalculateButtonPropsType,
	FixType,
	ListType,
	PipeConfigInterface,
} from "../../types";

export const CalculateButton: FC<CalculateButtonPropsType> = memo(props => {
	const {
		setResultData,
		setIsCalcBtnClick,
		isError,
		width,
		length,
		listItem,
		material,
		pipeKey,
		frameKey,
	} = props;

	const onClickCaluclate = () => {
		const area = width * length;

		const listItemIndex: number = +listItem.slice(
			listItem.indexOf("-") + 1
		);
		const list = data.filter(
			el => el.type === listStr && el.material === material
		)[listItemIndex] as ListType;
		const listCount = list
			? Math.ceil(area / (listLength * list.width))
			: 0;
		const listsPrice = list ? listCount * list.price : 0;

		const frame = config
			.filter(el => el.type === frameStr)
			.find(el => el.key === frameKey);
		const pipe = data
			.filter(el => el.type === pipeStr)
			.find(
				el => pipeKey === `${el.type}-${el.name}`
			) as PipeConfigInterface;
		const pipeWidthM: number = pipe ? pipe.width / 1000 : 0;
		let pipeCount = 0;
		let pipePrice = 0;
		let cell = 0;
		if (frame && frame.step) {
			const perimeter = 2 * (width + length);
			const horizontalCountPipe = Math.ceil(length / frame.step) + 1;
			const vertitalCountPipe = Math.ceil(width / frame.step) + 1;
			const carcas = 2;
			pipeCount = Math.ceil(
				perimeter +
					(length - horizontalCountPipe * pipeWidthM) *
						(horizontalCountPipe - carcas) +
					(width - vertitalCountPipe * pipeWidthM) *
						(vertitalCountPipe - carcas)
			);
			pipePrice = pipeCount * pipe.price;
			cell = +(frame.step + pipeWidthM).toFixed(2);
		}

		const fix = config
			.filter(el => el.type === fixStr)
			.find(el => el.key === material) as FixType;
		const fixEl = data.filter(el => el.type === fixStr)[0];
		const fixCount = fix ? Math.ceil(area * fix.value) : 0;
		const fixPrice = fix ? fixEl.price * fixCount : 0;

		setIsCalcBtnClick(true);
		setResultData({
			area,
			cell,
			list: {
				listName: list.name,
				listUnit: list.unit,
				listCount,
				listsPrice,
			},
			pipe: {
				pipeName: pipe.name,
				pipeUnit: pipe.unit,
				pipeCount,
				pipePrice,
			},
			fix: {
				fixName: fix.name,
				fixUnit: fixEl.unit,
				fixCount,
				fixPrice,
			},
		});
	};

	return (
		<button
			className={s["calculate-button"]}
			disabled={isError}
			onClick={onClickCaluclate}
			type="button"
		>
			Вычислить
		</button>
	);
});
