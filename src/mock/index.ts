import { MockMethod } from 'vite-plugin-mock';
const mock: Array<MockMethod> = [
    {
        url: '/api/user',
        method: 'get',
        response: () => {
            return {
                status: 200,
                success: true,
                data: {
                    'list|10': [
                        {
                            'id|+1': 1,
                            name: '@cname',
                            'age|18-60': 1,
                            'gender|1': ['男', '女'],
                        },
                    ],
                },
            };
        },
    },
];
export default mock;
