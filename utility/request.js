const API_KEY = '6028e97f650e21c9394a543a0abc0867'

console.log(API_KEY)
export default {
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/weel?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:'Top Rated',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        title:'Action',
        url:`/movie/top_rated?api_key=${API_KEY}&with_genres=20`
    },
    fetchComedyMovies:{
        title:'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies:{
        title:'Horror',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies:{
        title:'Romantic',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery:{
        title:'Mystery',
        url:`/trending/all/weel?api_key=${API_KEY}&with_genres=9648`
    },
    fetchScifiMovies:{
        title:'Sci-Fi',
        url:`/trending/all/weel?api_key=${API_KEY}&with_genres=870`
    },
    fetchWesternMovies:{
        title:'Western',
        url:`/trending/all/weel?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimationMovie:{
        title:'Animation',
        url:`/trending/all/weel?api_key=${API_KEY}&with_genres=16`
    },
    fetchTvMovies:{
        title:'TV Movie',
        url:`/trending/all/weel?api_key=${API_KEY}&with_genres=10770`
    }
}