// @method: GET
// @params: { page?: number, tab?: string, limit?: number, mdrender?: boolean }
export const ALL_TOPICS = 'https://cnodejs.org/api/v1/topics';

// @method: GET
// @params: { topic_id: string, mdrender?: boolean }
export const GET_TOPIC = 'https://cnodejs.org/api/v1/topic/:topic_id';

// @method: POST
// @params: { accesstoken: string }
export const GET_USER_ACOUNT = 'https://cnodejs.org/api/v1/accesstoken';

// @method: POST
// @params: { accesstoken: string, topic_id : string }
export const COLLECT_TOPIC = 'https://cnodejs.org/api/v1/topic_collect/collect';

// @method: POST
// @params: { accesstoken: string, topic_id : string }
export const CANCEL_COLLECT_TOPIC = 'https://cnodejs.org/api/v1/topic_collect/de_collect';

// @method: POST
// @params: { accesstoken: string, title : string, tab: string, content: string }
export const NEW_TOPIC = 'https://cnodejs.org/api/v1/topics ';

// @method: POST
// @params: { accesstoken: string, topic_id: string, title : string, tab: string, content: string }
export const UPDATE_TOPIC = 'https://cnodejs.org/api/v1/topics/update';

// @method: POST
// @params: { accesstoken: string, content: string, reply_id?: string }
export const NEW_TOPIC_REPLY = 'https://cnodejs.org/api/v1/topic/:topic_id/replies ';

// @method: POST
// @params: { accesstoken: string }
export const UPVOTE_TOPIC_REPLY = 'https://cnodejs.org/api/v1/reply/:reply_id/ups ';

// @method: GET
// @params: null
export const GET_USERNAME = 'https://cnodejs.org/api/v1/user/:loginname';

