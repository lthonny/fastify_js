const getTasksOpts = {
    schema: {

        // querystring: {
        //     id: { type: 'string' }
        // },
        // body: {
        //     type: 'object',
        //     required: ['name'],
        //     properties: {
        //         name: { type: 'string' },
        //         type: { type: 'number' }
        //     }
        // },

        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: {type: 'number'},
                        title: {type: 'string'}
                        // description: { type: 'string' },
                        // state: { type: 'boolean' }
                    }
                }
            }
        }
    }
}

const getTaskOpts = {
    schema: {

        // querystring: {
        //     id: { type: 'string' }
        // },
        // body: {
        //     type: 'object',
        //     required: ['name'],
        //     properties: {
        //         name: { type: 'string' },
        //         type: { type: 'number' }
        //     }
        // },

        response: {
            200: {
                type: 'object',
                properties: {
                    //     id: { type: 'number' },
                    title: {type: 'string'}
                    //     // description: { type: 'string' },
                    //     // state: { type: 'boolean' }
                }
            }
        }
    }
}

const tasks = [
    {id: 1, title: 'Item 1', description: 'Item description', state: true},
    {id: 2, title: 'Item 2', description: 'Item description', state: false},
    {id: 3, title: 'Item 3', description: 'Item description', state: true}
];

function tasksRoutes(fastify, options, done) {

    fastify.get('/tasks', getTasksOpts, (request, reply) => {
        reply.send(tasks);
    });

    fastify.get('/tasks/:id', getTaskOpts, (request, reply) => {
        const {id} = request.params;

        const task = tasks.find((t) => t.id === Number(id));

        reply.send(task);
    });

    done();
}

module.exports = tasksRoutes;