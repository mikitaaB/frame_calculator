import { ChangeEvent, FC, useState } from "react";
import { ListDataType } from "../Calc/Calc";
import s from "./listSelect.module.scss";

type ListSelectType = {
	listData: ListDataType[],
	setSelectedListItem: (item: string) => void
}

export const ListSelect: FC<ListSelectType> = ({ listData, setSelectedListItem }) => {
	const [selectedList, setSelectedList] = useState<string>("");
	const onChangeListSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		const curListItem = e.target.value;
		setSelectedList(curListItem);
		setSelectedListItem(curListItem);
	}

	return (
		<label className={s["list-select-container"]}>
			Лист:
			<select
				className={s["select-list"]}
				name="listSelect"
				value={selectedList}
				onChange={onChangeListSelect}>
				{
					listData.map(el => (
						<option value={el.keyValue} key={el.keyValue}>
							{el.title}
						</option>
					))
				}
			</select>
		</label>
	)
}