# Task API

## Methods

| Prop               | Type       | Returns                                                                                  | Note                                                                   |
|--------------------|------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| `add_task`         | `function` | The ID of the added task.                                                                | Adds a new task to the task queue.                                     |
| `update_task`      | `function` | The ID of the updated task.                                                              | Updates an existing task in the task queue.                            |
| `remove_task`      | `function` | `void`                                                                                   | Removes a task from the task queue.                                    |
| `is_task_running`  | `function` | `true` if the task is in the queue, `false` otherwise.                                   | Checks if a task with the specified ID is currently in the task queue. |
| `remove_all_tasks` | `function` | `void`                                                                                   | Removes all tasks from the task queue.                                 |
| `get_task`         | `function` | An `object` representing the task, or `null` if no task with the specified ID was found. | Gets the task with the specified ID from the task queue.               |
| `get_all_tasks`    | `function` | An `object` containing all tasks in the queue, with task IDs as keys.                    | Gets all tasks currently in the task queue.                            |

### `add_task \ update_task` Params

| Prop    | Type               | Default | Note                                                                     |
|---------|--------------------|---------|--------------------------------------------------------------------------|
| task    | `function`         |         | A function or Promise that represents the task to be added to the queue. |
| options | [object](#Options) |         | An object containing the following options. See below options            |

### Options

| Prop        | Type       | Default  | Note                                                                   |
|-------------|------------|----------|------------------------------------------------------------------------|
| `delay`     | `number`   | `5000`ms | The delay in milliseconds between each execution of the task           |
| `onLoop`    | `boolean`  | `true`   | Whether the task should be executed repeatedly after the initial delay |
| `taskId`    | `string`   |          | A unique ID for the task / The ID of the task to be updated            |
| `onSuccess` | `function` |          | A function to be called when the task succeeds.                        |
| `onError`   | `function` |          | A function to be called when the task fails.                           |

### `remove_task` Params

| Prop   | Type     | Default | Note                              |
|--------|----------|---------|-----------------------------------|
| taskId | `string` |         | The ID of the task to be removed. |

### `is_task_running` Params

| Prop   | Type     | Default | Note                             |
|--------|----------|---------|----------------------------------|
| taskId | `string` |         | The ID of the task to check for. |

### `get_task` Params

| Prop   | Type     | Default | Note                            |
|--------|----------|---------|---------------------------------|
| taskId | `string` |         | The ID of the task to retrieve. |




