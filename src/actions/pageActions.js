export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCEES = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';
export const GET_YEARS_REQUEST = 'GET_YEARS_REQUEST';
export const GET_YEARS_SUCCESS = 'GET_YEARS_SUCCESS';

const getPhotoYear = item => new Date(item.date * 1000).getFullYear();

let allPhotos = [];
let loaded = false;

const loadAllPhotos = (callback, onError) => {
  const COUNT = 20;
  if (loaded) {
    callback(allPhotos);
    return;
  }

  const loadPhotos = offset =>
    VK.api(
      'photos.getAll',
      {
        count: COUNT,
        extended: 1,
        offset: offset,
        v: '5.73'
      },
      data => {
        if (data.error) {
          onError(data.error.error_msg);
          return;
        }
        if (data.response.items.length === 0) {
          loaded = true;
          callback(allPhotos);
        } else {
          allPhotos = allPhotos.concat(data.response.items);
          loadPhotos(offset + data.response.count);
        }
      }
    );
  loadPhotos(0);
};

export function getYears() {
  return dispatch => {
    dispatch({
      type: GET_YEARS_REQUEST
    });
    loadAllPhotos(
      data => {
        const yearsObj = data.map(getPhotoYear).reduce((acc, next) => {
          if (!acc[next]) {
            acc[next] = 1;
          } else {
            acc[next]++;
          }
          return acc;
        }, {});
        const years = [];
        for (var i in yearsObj) {
          years.push({
            value: i,
            count: yearsObj[i]
          });
        }

        console.log(years);
        dispatch({
          type: GET_YEARS_SUCCESS,
          payload: years
        });
      },
      errorMsg => {
        dispatch({
          type: GET_PHOTOS_FAIL,
          error: true,
          payload: { message: errorMsg }
        });
      }
    );
  };
}

export function getPhotos(year) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    });

    loadAllPhotos(data => {
      const items = data.filter(
        item => getPhotoYear(item).toString() === year.toString()
      );

      items.sort((a, b) => {
        return b.likes.count - a.likes.count;
      });
      console.log(items);

      dispatch({
        type: GET_PHOTOS_SUCCEES,
        payload: items.map(item => {
          return {
            src: item.photo_604,
            likes: item.likes.count
          };
        })
      });
    });
  };
}
