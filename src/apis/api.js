import { instance } from './axiosInstance';

export async function getMessages(recipientId) {
  try {
    const response = await instance.get(`6-6/recipients/${recipientId}/messages/?limit=100`);
    return response.data.results;
  } catch (e) {
    console.error(`error : ${e}`);
  }
}

export async function deleteMessage(messageId) {
  try {
    const response = await instance.delete(`6-6/messages/${messageId}/`);
  } catch (e) {
    console.error(`error : ${e}`);
  }
}

export async function deleteRecipient(recipientId) {
  try {
    const response = await instance.delete(`6-6/recipients/${recipientId}/`);
  } catch (e) {
    console.error(`error : ${e}`);
  }
}

export async function getRecipient(recipientId) {
  try {
    const response = await instance.get(`6-6/recipients/${recipientId}/`);
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

// 메시지 카운트 하즈아~
export async function getMessageCount(id) {
  try {
    const response = await instance.get(`6-6/recipients/${id}/messages/?limit=100`);
    return response.data.results.length;
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

// export async function patchBackgroundInfo(recipientid, backgroundData) {
//   try {
//     const response = await instance.patch(`6-6/recipients/${recipientid}`, backgroundData);
//     return response.data;
//   } catch (error) {
//     console.error(`error : ${error}`);
//   }
// }

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

//------------------이모지 서버 데이터 보내고 가져오기--------------------------------
export async function addReaction(recipientId, emoji, type) {
  try {
    const response = await instance.post(`6-6/recipients/${recipientId}/reactions/`, {
      emoji,
      type,
    });
    return response.data;
  } catch (error) {
    console.error(`error : ${error}`);
  }
}

export async function getReactions(recipientId, limit = 8, offset = 0) {
  try {
    const response = await instance.get(
      `6-6/recipients/${recipientId}/reactions/?limit=${limit}&offset=${offset}`,
    );
    return response.data;
  } catch (error) {
    console.error(`error : ${error}`);
  }
}
