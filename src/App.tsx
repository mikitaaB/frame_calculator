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
			name: "",
			unit: "",
			count: 0,
			price: 0,
		},
		pipe: {
			name: "",
			unit: "",
			count: 0,
			price: 0,
		},
		fix: {
			name: "",
			unit: "",
			count: 0,
			price: 0,
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
			{isCalculateClick && <Result result={result} />}
		</div>
	);
};

export default App;
