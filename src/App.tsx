import { useState } from "react";
import { ResultDataType } from "./types";
import s from "./app.module.scss";
import { Calc } from "./components/Calc/Calc";
import { Result } from "./components/Result/Result";

const App = () => {
	const resData = {
		area: 0,
		cell: 0,
		list: {
			listName: "",
			listUnit: "",
			listCount: 0,
			listsPrice: 0,
		},
		pipe: {
			pipeName: "",
			pipeUnit: "",
			pipeCount: 0,
			pipePrice: 0,
		},
		fix: {
			fixName: "",
			fixUnit: "",
			fixCount: 0,
			fixPrice: 0,
		},
	};
	const [result, setResult] = useState<ResultDataType>(resData);
	const [isCalculateClick, setIsCalculateClick] = useState<boolean>(false);

	const setResultData = (data: ResultDataType) => setResult(data);
	const setIsCalcBtnClick = (isCalc: boolean) => setIsCalculateClick(isCalc);

	return (
		<div className={s.app}>
			<Calc
				setResultData={setResultData}
				setIsCalcBtnClick={setIsCalcBtnClick}
			/>
			<Result result={result} isCalculateClick={isCalculateClick} />
		</div>
	);
};

export default App;
