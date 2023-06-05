export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Header Image',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
    {
      name: 'shopUrl',
      type: 'url',
      title: 'Shop URL',
    },
    {
      socials: 'socials',
      name: 'socials',
      type: 'object',
      title: 'Socials',
      fields: [
        {
          name: 'facebook',
          type: 'string',
          title: 'Facebook',
        },
        {
          name: 'twitter',
          type: 'string',
          title: 'Twitter',
        },
        {
          name: 'instagram',
          type: 'string',
          title: 'Instagram',
        },
        {
          name: 'tiktok',
          type: 'string',
          title: 'TikTok',
        },
      ],
    },
    {
      name: 'bigVideos',
      type: 'url',
      title: 'Big Video',
    },
    {
      name: 'smallVideos',
      type: 'array',
      title: 'Small Videos',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
            },
          ],
        },
      ],
    },
    {
      name: 'albums',
      type: 'array',
      title: 'Albums',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Album cover',
            },
            {
              name: 'spotifyUrl',
              type: 'url',
              title: 'Spotify URL',
            },
            {
              name: 'appleMusicUrl',
              type: 'url',
              title: 'Apple Music URL',
            },
            {
              name: 'deezerUrl',
              type: 'url',
              title: 'Deezer URL',
            },
            {
              title: 'Image description',
              name: 'imageDescription',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'shows',
      type: 'array',
      title: 'Shows',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'city',
              type: 'string',
              title: 'City',
            },
            {
              name: 'venue',
              type: 'string',
              title: 'Venue',
            },
            {
              name: 'country',
              type: 'string',
              title: 'Country',
            },
            {
              name: 'externalUrl',
              type: 'url',
              title: 'External URL',
            },
          ],
        },
      ],
    },
    {
      name: 'about',
      type: 'object',
      title: 'About',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
        },
        {
          name: 'bio',
          type: 'array',
          title: 'Bio',
          of: [
            {
              type: 'block',
              styles: [{title: 'Normal', value: 'normal'}],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'URL',
                    fields: [
                      {
                        title: 'URL',
                        name: 'href',
                        type: 'url',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: 'terms',
      type: 'url',
      title: 'Terms',
    },
    {
      name: 'appleMusicUrl',
      type: 'url',
      title: 'Apple Music URL',
    },
    {
      name: 'spotifyUrl',
      type: 'url',
      title: 'Spotify URL',
    },
  ],
}
