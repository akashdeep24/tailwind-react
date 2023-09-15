import React  from "react";
import TaskHeader from "../components/TaskHeader";
import {boardData} from "../assets/boardData";
import Assignees from "../components/Assignees";
function Taskboard() {
	return (
		<div>
			<TaskHeader />
			<div className="hidden bg-gray-200 mx-auto w-full lg:grid grid-cols-12 font-semibold text-xs ">
				<div className="col-span-1 md:col-span-2 lg:col-span-6 h-8 py-2 mx-2">
					<p className="truncate">Name</p>
				</div>
				<div className="col-span-1 lg:col-span-2 h-8 py-2 mx-2">
					<p className="truncate">Assignee</p>
				</div>
				<div className="col-span-1 h-8 py-2 mx-2">
					<p>Due Date</p>
				</div>
				<div className="col-span-1 h-8 py-2 mx-2">
					<p>Status</p>
				</div>
				<div className="col-span-1 h-8 mx-2">
					<p>Tasks completed</p>
				</div>
				<div className="col-span-1 h-8 py-2 mx-2">
					<p>Start Date</p>
				</div>
			</div>
			{boardData.map((data) => {
				return (
					<div className="mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 text-xs border-2">
						<div className="col-span-1 md:col-span-2 lg:col-span-6 h-8 py-2 mx-2">
							<p className="text-xs truncate">{data.name}</p>
						</div>
						<div className="col-span-1 md:col-span-1 lg:col-span-2 h-8 py-2 mx-2">
                            <Assignees assigneeArray={data.assignee}/>
						</div>
						<div className="col-span-1  h-8 py-2 mx-2">
							<p>{data.due_date}</p>
						</div>
						<div className="col-span-1 h-8 py-2">
							<p>{data.status}</p>
						</div>
						<div className="col-span-1 h-8 py-2 mx-2">
							<p>{data.tasks_completed}/{data.total_tasks}</p>
						</div>
						<div className="col-span-1 h-8 py-2 mx-2">
                            <p>{data.start_date}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Taskboard;
