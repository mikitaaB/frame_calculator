import { ChangeEvent, FC, useState } from "react";
import s from "./listSelect.module.scss";
import { ListSelectType } from "../../types";

export const ListSelect: FC<ListSelectType> = ({
	listData,
	setSelectedListItem,
}) => {
	const [selectedList, setSelectedList] = useState<string>("");
	const onChangeListSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		const curListItem = e.target.value;
		setSelectedList(curListItem);
		setSelectedListItem(curListItem);
	};

	return (
		<label className={s["list-select-container"]} htmlFor="listSelect">
			Лист:
			<select
				className={s["select-list"]}
				name="listSelect"
				value={selectedList}
				onChange={onChangeListSelect}
			>
				{listData.map(el => (
					<option value={el.keyValue} key={el.keyValue}>
						{el.title}
					</option>
				))}
			</select>
		</label>
	);
};
