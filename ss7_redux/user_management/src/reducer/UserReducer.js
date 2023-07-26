const initialValue = {
    list: []
}

export const list = (state = initialValue, action) => {
    switch (action.type) {
        case "GET-LIST-USER":
            // reducer mới được tạo ra từ state cũ + action, ,không làm ảnh hưởng đễn state cũ
            // reducer trả lại một state mới
            return { ...state, list: action.payload }
        case "DELETE-BY-ID":
            return { ...state, list: action.payload }
        default:
            return state;
    }
}