type ItemResType = {
	name: string;
	unit: string;
	count: number;
	price: number;
};

export type TableRowItemType = "list" | "pipe" | "fix";

export type ResultDataType = {
	area: number;
	cell: number;
} & Record<TableRowItemType, ItemResType>;

export type ResultPropsType = {
	result: ResultDataType;
};

export type MaterialType = {
	type: string;
	key: string;
	name: string;
};

export type ListDataType = {
	title: string;
	keyValue: string;
};

export type DimensionType = {
	type: string;
	key: string;
	name: string;
	min: number;
	max: number;
	step: number;
};

export type FrameType = {
	type: string;
	key: string;
	name: string;
	step: number;
};
export interface PipeConfigInterface {
	type: string;
	name: string;
	unit: string;
	width: number;
	price: number;
}
export interface PipeInterface extends PipeConfigInterface {
	key: string;
}

export type CalcPropsType = {
	setResultData: (data: ResultDataType) => void;
	setIsCalcBtnClick: (isClick: boolean) => void;
};

export type RadioInputsBlockPropsType = {
	label: string;
	curValue: string;
	data: MaterialType[] | FrameType[] | PipeInterface[];
	setSelectedValue: (val: string) => void;
};

export type ListSelectType = {
	listData: ListDataType[];
	setSelectedListItem: (item: string) => void;
};

export type CalculateButtonPropsType = {
	setResultData: (data: ResultDataType) => void;
	setIsCalcBtnClick: (isClick: boolean) => void;
	isError: boolean;
	width: number;
	length: number;
	listItem: string;
	material: string;
	pipeKey: string;
	frameKey: string;
};

export type ListType = {
	type: string;
	name: string;
	material: string;
	unit: string;
	width: number;
	price: number;
};

export type FixType = {
	type: string;
	key: string;
	name: string;
	value: number;
};

export type DimensionPropsType = {
	dimensionConfig: {
		length: DimensionType;
		width: DimensionType;
	};
	setSelectedWidth: (width: number) => void;
	setSelectedLength: (length: number) => void;
	setIsErrorOccured: (isError: boolean) => void;
};
