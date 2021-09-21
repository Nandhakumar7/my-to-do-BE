const { Service } = require('feathers-mongoose');

exports.Tasks = class Tasks extends Service {
  
    setup(app) {
        this.app = app;
    }

    async create(data) {
        let taskObject = {
            taskName: data.taskName,
            isCompleted: data.isCompleted,
            isImportant: data.isImportant,
            steps: data.steps
        }
        let task = await super.create(taskObject);
        let objId = task._id;
        let result = await this.app.service('category').patch(data.category_id, objId);
        return result;
    }
};
