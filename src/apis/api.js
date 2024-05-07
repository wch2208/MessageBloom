import { instance } from './axiosInstance';

export async function getMessages(id) {
  try {
    const response = await instance.get(`6-6/recipients/${id}/messages/`);
    return response.data.results;
  } catch (e) {
    console.error(`error : ${e}`);
  }
}

export async function deleteMessage(id) {
  try {
    const response = await instance.delete(`6-6/messages/${id}/`);
    console.log(`delete successfully!`);
  } catch (e) {
    console.error(`error : ${e}`);
  }
}

export async function getRecipient(id) {
  try {
    const response = await instance.get(`6-6/recipients/${id}/`);
    return response.data;
  } catch (e) {
    console.error(`error : ${e}`);
  }
}

// 편지 쓴 사람 몇명인지 체크할 때 사용하세요~
export async function getCommenterCount() {
  try {
    const response = await instance.get(`6-6/recipients/`);
    return response.data;
  } catch (e) {
    console.error(`error : ${e}`);
  }
}

export async function postRecipient(formData) {
  try {
    const response = await instance.post(`6-6/recipients/`, formData);
    return response.data;
  } catch (error) {
    console.error(`error : ${error}`);
  }
}

export async function postMessageToRecipient(formData, id) {
  try {
    const response = await instance.post(`6-6/recipients/${id}/messages/`, formData);
    return response.data;
  } catch (error) {
    console.error(`error : ${error}`);
  }
}

// 리스트 페이지네이션 용
export const getRecipients = async (limit, offset, order) => {
  const query = `sort=${order}&limit=${limit}&offset=${offset}`;
  try {
    const response = await instance.get(`6-6/recipients/?${query}`);
    return response.data.results;
  } catch (error) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
};
