import React from "react";
import leftarrow from "../assets/leftarrow.svg";
import Filter from "../assets/Filter.svg";
import zoomOut from "../assets/zoomOut.svg";
import Edit from "../assets/Edit.svg";
import Run from "../assets/Run.svg";
function TaskHeader() {
	return (
		<div className="sm:flex items-center justify-between">
			<div className="flex">
				<img src={leftarrow} className="pb-3 px-2 inline-block" />
				<p className="text-base font-bold">New UI/UX Task</p>
			</div>
			<div className="flex mx-2 sm:mx-8 justify-around">
				<button className="flex mx-4">
					<img
						src={Filter}
						className="pb-3 px-2 w-8 h-8 inline-block"
					/>
					<p className="text-sm font-light">Filter</p>
				</button>
				<button className="flex mx-4">
					<img
						src={zoomOut}
						className="pb-3 px-2 w-8 h-8 inline-block"
					/>
					<p className="hidden sm:block text-sm font-light">
						Search Name
					</p>
				</button>
				<button className="flex mx-4">
					<img
						src={Edit}
						className="px-2 pb-3 w-8 h-8 inline-block"
					/>
					<p className="text-sm">Edit</p>
				</button>
				<button className="flex mx-4">
					<img src={Run} className="px-2 pb-3 w-8 h-8 inline-block" />
					<p className="text-sm">Run</p>
				</button>
			</div>
		</div>
	);
}

export default TaskHeader;
