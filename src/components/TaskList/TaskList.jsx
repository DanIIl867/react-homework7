import React, { Component } from 'react';
import 'components/TaskList/TaskList.css';

export class TaskList extends Component {
	static tasks = [
		{ id: 1, text: 'Завдання 1' },
		{ id: 2, text: 'Завдання 2' },
		{ id: 3, text: 'Завдання 3' },
	];

	handleDeleteTask = (id) => {
		TaskList.tasks = TaskList.tasks.filter(task => task.id !== id);
		this.forceUpdate();
	};

	render() {
		return (
			<div className="task-list">
				<h2>Список завдань</h2>
				<ul>
					{TaskList.tasks.map(task => (
						<li key={task.id}>
							{task.text}
							<button onClick={() => this.handleDeleteTask(task.id)}>
								Видалити
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default TaskList;

