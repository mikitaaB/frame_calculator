import { FC } from "react";
import { ResultTable } from "./ResultTable/ResultTable";
import s from "./result.module.scss";
import { ResultPropsType } from "../../types";

export const Result: FC<ResultPropsType> = ({ result }) => {
	const totalSum = result.list.price + result.pipe.price + result.fix.price;

	return (
		<div className={s.result}>
			<div className={s.result__info}>
				<p>
					Площадь изделия: {result.area} m<sup>2</sup>
				</p>
				<p>
					Расчетный размер ячейки: {result.cell}x{result.cell}м
				</p>
			</div>
			<ResultTable data={result} />
			<p className="result__total-sum"> Итого: {totalSum}</p>
		</div>
	);
};
