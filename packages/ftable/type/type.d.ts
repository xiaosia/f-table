
import { VNode } from "vue";

export const Columns: Array<ColumnsItem>;

export interface ColumnsItem {
	name: string;
	type?: string;
	width?: string | number;
	position?: string;
	render?: (arg0: { item: any; data: any; h: VNode }) => any;
}
