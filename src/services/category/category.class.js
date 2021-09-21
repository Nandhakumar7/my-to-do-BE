const { Service } = require('feathers-mongoose');

exports.Category = class Category extends Service {
  
    async find() {
        return await super.find({query: {$populate: ['tasks']}})
    }

    async patch(id, data) {
        await super.patch(id, {$push: {tasks: data}})
    }
};
