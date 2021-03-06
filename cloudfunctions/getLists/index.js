// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
	env: 'meetyou-f68599',
    traceUser: true,
})
const db = cloud.database()
// 云函数入口函数
exports.main = async(event, context) => {
	const {
		OPENID,
		APPID,
		UNIONID,
	} = cloud.getWXContext()
	try{
    return await db.collection('Counters').where({
		open_id: OPENID
	}).get()
}catch(e){
	console.error(e)
}
}