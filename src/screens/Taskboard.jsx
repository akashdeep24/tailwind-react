import React from "react";
import TaskHeader from "../components/TaskHeader";
import {boardData} from "../components/boardData";
function Taskboard() {
	return (
		<div>
			<TaskHeader />
			<div class="bg-gray-200 container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 font-semibold text-xs ">
				<div class="col-span-1 md:col-span lg:col-span-6 h-8 py-2 mx-2">
					<p className="truncate">Name</p>
				</div>
				<div class="col-span-1 lg:col-span-2 h-8 py-2 mx-2">
					<p className="truncate">Assignee</p>
				</div>
				<div class="col-span-1 h-8 py-2 mx-2">
					<p>Due Date</p>
				</div>
				<div class="col-span-1 h-8 py-2 mx-2">
					<p>Status</p>
				</div>
				<div clasdue_dates="col-span-1 h-8 py-2 mx-2">
					<p>Tasks completed</p>
				</div>
				<div class="col-span-1 h-8 py-2 mx-2">
					<p>Start Date</p>
				</div>
			</div>
			{boardData.map((data) => {
				return (
					<div class="container mx-auto grid grid-cols-2 lg:grid-cols-12 text-xs">
						<div class="col-span-1 lg:col-span-6 h-8 py-2 mx-2">
							<p className="text-xs truncate">{data.name}</p>
						</div>
						<div class="col-span-1 lg:col-span-2 h-8 py-2 mx-2">
                            <p className="flex flex-wrap">{data.assignee}</p>
						</div>
						<div class="col-span-1 h-8 py-2 mx-2">
							<p>{data.due_date}</p>
						</div>
						<div class="col-span-1 h-8 py-2">
							<p>{data.status}</p>
						</div>
						<div clasdue_dates="col-span-1 h-8 py-2 mx-2">
							<p>{data.tasks_completed}/{data.total_tasks}</p>
						</div>
						<div class="col-span-1 h-8 py-2 mx-2">
                            <p>{data.start_date}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Taskboard;
