const URL_ALL_MOVIES = "https://ghibliapi.herokuapp.com/films/";

export const getAll = async () => {
  try {
    const result = await fetch(URL_ALL_MOVIES);

    const data = result.json()
    return data;
  } catch (error) {
    console.log(error);
  }
};


