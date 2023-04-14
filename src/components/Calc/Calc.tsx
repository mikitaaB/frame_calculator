import { FC, useEffect, useState } from "react";
import { RadioInputsBlock } from "../RadioInputsBlock/RadioInputsBlock";
import { ListSelect } from "../ListSelect/ListSelect";
import { Dimension } from "../Dimension/Dimension";
import { frameRu, frameStr, lengthStr, listStr, materialRu, materialStr, pipeRu, pipeStr, sizeStr, widthStr } from "../../utils/constants";
import { CalculateButton } from "../CalculateButton/CalculateButton";
import data from "../../data/data.json";
import config from "../../data/config.json";
import s from "./calc.module.scss";
import { ResultDataType } from "../../App";

export type MaterialType = {
	type: string,
	key: string,
	name: string
};
export type ListDataType = {
	title: string,
	keyValue: string
}
export type DimensionType = {
	type: string,
	key: string,
	name: string,
	min: number,
	max: number,
	step: number
}
export type FrameType = {
	type: string,
	key: string,
	name: string,
	step: number
}
export interface PipeConfigInterface {
	type: string,
	name: string,
	unit: string,
	width: number,
	price: number
}
export interface PipeInterface extends PipeConfigInterface {
	key: string
}
type CalcPropsType = {
	setResultData: (data: ResultDataType) => void,
	setIsCalcBtnClick: (isClick: boolean) => void
}

export const Calc: FC<CalcPropsType> = ({ setResultData, setIsCalcBtnClick }) => {
	const materialsData: MaterialType[] = config.filter(el => el.type === materialStr);
	const widthConfig = config.find(el => el.type === sizeStr && el.key === widthStr) as DimensionType;
	const lengthConfig = config.find(el => el.type === sizeStr && el.key === lengthStr) as DimensionType;
	const frameConfig = config.filter(el => el.type === frameStr) as FrameType[];
	const pipeConfigData = data.filter(el => el.type === pipeStr) as PipeConfigInterface[];
	const pipeData: PipeInterface[] = pipeConfigData.map(el => ({ ...el, key: `${el.type}-${el.name}` }));

	const [material, setMaterial] = useState<string>(materialsData[0].key);
	const [listData, setListData] = useState<ListDataType[]>([]);
	const [listItem, setListItem] = useState<string>("");
	const [length, setLength] = useState<number>(lengthConfig.min);
	const [width, setWidth] = useState<number>(widthConfig.min);
	const [pipe, setPipe] = useState<string>(pipeData[0].key);
	const [frame, setFrame] = useState<string>(frameConfig[0].key);
	const [isError, setIsError] = useState<boolean>(false);

	const dimensionConfig = {
		length: lengthConfig,
		width: widthConfig
	}

	const setSelectedMaterial = (material: string) => setMaterial(material);
	const setSelectedListItem = (listItem: string) => setListItem(listItem);
	const setSelectedLength = (length: number) => setLength(length);
	const setSelectedWidth = (width: number) => setWidth(width);
	const setSelectedPipe = (pipe: string) => setPipe(pipe);
	const setSelectedFrame = (frame: string) => setFrame(frame);
	const setIsErrorOccured = (isError: boolean) => setIsError(isError);

	useEffect(() => {
		const filteredListData = data.filter(el => el.type === listStr).filter(el => el.material === material)
			.map((el, index) => {
				return {
					title: el.name,
					keyValue: `list-${index}`
				}
			});
		setListData(filteredListData);
		setListItem(filteredListData[0].keyValue);
	}, [material]);

	return (
		<div className={s.calc}>
			<RadioInputsBlock
				label={materialRu}
				curValue={material}
				data={materialsData}
				setSelectedValue={setSelectedMaterial} />
			<ListSelect
				listData={listData}
				setSelectedListItem={setSelectedListItem} />
			<Dimension
				dimensionConfig={dimensionConfig}
				setSelectedWidth={setSelectedWidth}
				setSelectedLength={setSelectedLength}
				setIsErrorOccured={setIsErrorOccured} />
			<RadioInputsBlock
				label={frameRu}
				curValue={frame}
				data={frameConfig}
				setSelectedValue={setSelectedFrame} />
			<RadioInputsBlock
				label={pipeRu}
				curValue={pipe}
				data={pipeData}
				setSelectedValue={setSelectedPipe} />
			<CalculateButton
				setResultData={setResultData}
				setIsCalcBtnClick={setIsCalcBtnClick}
				isError={isError}
				width={width}
				length={length}
				listItem={listItem}
				material={material}
				pipeKey={pipe}
				frameKey={frame} />
		</div>
	)
}