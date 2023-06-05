export const homePageQuery = `
*[_type == "homePage"][0] {
  about {
    bio,
    image {
      asset -> {
        _id,
        url
      }
    }
  },
  shopUrl,
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
