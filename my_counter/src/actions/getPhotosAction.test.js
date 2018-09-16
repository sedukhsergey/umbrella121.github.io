import {getPhotos} from './getPhotosAction';

describe("async action", () => {
	it("get all photos", async () => {
		const dispatch = jest.fn();
		const getState = jest.fn();
		await getPhotos()(dispatch, getState);
		expect(dispatch).toBeCalledWith({type: "GET_PHOTOS_REQUEST"});
	});
});