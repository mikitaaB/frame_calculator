import { ResultDataType, TableRowItemType } from "../../../types";
import s from "./resultTable.module.scss";

const TableCell = ({ children }: { children: React.ReactNode }) => (
	<td className={s.table__column}>{children}</td>
);

const TableRow = ({
	name,
	unit,
	count,
	price,
}: {
	name: string;
	unit: string;
	count: number;
	price: number;
}) => (
	<tr className={s.table__row}>
		<TableCell>{name}</TableCell>
		<TableCell>{unit}</TableCell>
		<TableCell>{count}</TableCell>
		<TableCell>{price}</TableCell>
	</tr>
);

export const ResultTable = ({ data }: { data: ResultDataType }) => {
	const tableRowItemType: TableRowItemType[] = ["list", "pipe", "fix"];
	return (
		<table className={s.table}>
			<thead>
				<tr className={s.table__row}>
					<th className={s.table__column}>Наименование</th>
					<th className={s.table__column}>ед.</th>
					<th className={s.table__column}>кол-во</th>
					<th className={s.table__column}>сумма</th>
				</tr>
			</thead>
			<tbody>
				{tableRowItemType.map(item => (
					<TableRow
						key={item}
						name={data[item].name}
						unit={data[item].unit}
						count={data[item].count}
						price={data[item].price}
					/>
				))}
			</tbody>
		</table>
	);
};
