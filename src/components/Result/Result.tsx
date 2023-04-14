import { FC } from "react";
import { ResultDataType } from "../../App";
import s from "./result.module.scss";

type ResultPropsType = {
	result: ResultDataType,
	isCalculateClick: boolean
}

export const Result: FC<ResultPropsType> = ({ result, isCalculateClick }) => {
	const totalSum = result.list.listsPrice + result.pipe.pipePrice + result.fix.fixPrice

	return (
		<div className={s.result}>
			{
				isCalculateClick &&
				<>
					<div className={s.result__info}>
						<p>Площадь изделия: {result.area} m2</p>
						<p>Расчетный размер ячейки: {result.cell}x{result.cell}м</p>					</div>
					<table className={s.result__table}>
						<thead>
							<tr className={s.table__row}>
								<th className={s.table__column}>Наименование</th>
								<th className={s.table__column}>ед.</th>
								<th className={s.table__column}>кол-во</th>
								<th className={s.table__column}>сумма</th>
							</tr>
						</thead>
						<tbody>
							<tr className={s.table__row}>
								<td className={s.table__column}>{result.list.listName}</td>
								<td className={s.table__column}>{result.list.listUnit}</td>
								<td className={s.table__column}>{result.list.listCount}</td>
								<td className={s.table__column}>{result.list.listsPrice}</td>
							</tr>
							<tr className={s.table__row}>
								<td className={s.table__column}>{result.pipe.pipeName}</td>
								<td className={s.table__column}>{result.pipe.pipeUnit}</td>
								<td className={s.table__column}>{result.pipe.pipeCount}</td>
								<td className={s.table__column}>{result.pipe.pipePrice}</td>
							</tr>
							<tr className={s.table__row}>
								<td className={s.table__column}>{result.fix.fixName}</td>
								<td className={s.table__column}>{result.fix.fixUnit}</td>
								<td className={s.table__column}>{result.fix.fixCount}</td>
								<td className={s.table__column}>{result.fix.fixPrice}</td>
							</tr>
						</tbody>
					</table>
					<p className="result__total-sum"> Итого: {totalSum}</p>
				</>
			}
		</div>
	)
}