import inservice from '../commentApi/index'

export const getStudentList = () => {
    return inservice({
        url: '/api/system/getUserList',
        method: 'get',
    })
}