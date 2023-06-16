export const homePageQuery = `
*[_type == "homePage"][0] {
  about {
    bio,
    title,
    image {
      asset -> {
        _id,
        url
      }
    }
  },
  shopUrl,
  videoTitle,
  albumsTitle,
  showsTitle,
  caption,
  socials,
  shows,
  bigVideos,
  smallVideos,
  spotifyUrl,
  terms,
    appleMusicUrl,
  videos[] {
    title,
    url,
    description,
    },
  image {
    asset -> {
      _id,
      url
    }
  },
  albums[] {
    spotifyUrl,
    appleMusicUrl,
    deezerUrl,
    image {
        asset -> {
            _id,
            url
           }
    },
    
  }
}`;
