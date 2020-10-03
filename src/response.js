export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - dog",
        totalResults: "3500000000",
        searchTerms: "dog",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "55708e5293e84cf6c",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - dog",
        totalResults: "3500000000",
        searchTerms: "dog",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "55708e5293e84cf6c",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.346948,
    formattedSearchTime: "0.35",
    totalResults: "3500000000",
    formattedTotalResults: "3,500,000,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Dog - Wikipedia",
      htmlTitle: "\u003cb\u003eDog\u003c/b\u003e - Wikipedia",
      link: "https://en.wikipedia.org/wiki/Dog",
      displayLink: "en.wikipedia.org",
      snippet:
        "The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-\nlike canids, and is the most widely abundant terrestrial carnivore. The dog and \nthe ...",
      htmlSnippet:
        "The \u003cb\u003edog\u003c/b\u003e is a domesticated carnivore of the family Canidae. It is part of the wolf-\u003cbr\u003e\nlike canids, and is the most widely abundant terrestrial carnivore. The \u003cb\u003edog\u003c/b\u003e and \u003cbr\u003e\nthe&nbsp;...",
      cacheId: "89sj26s1rYUJ",
      formattedUrl: "https://en.wikipedia.org/wiki/Dog",
      htmlFormattedUrl:
        "https://en.wikipedia.org/wiki/\u003cb\u003eDog\u003c/b\u003e",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZns2QXQdEmBQGbhEAXUeWkkY1PBP8GGyOiGZHDzNYipPNMwnethSzC-w",
            width: "240",
            height: "210",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Collage_of_Nine_Dogs.jpg/1200px-Collage_of_Nine_Dogs.jpg",
          },
        ],
        cse_image: [
          {
            src:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Collage_of_Nine_Dogs.jpg/1200px-Collage_of_Nine_Dogs.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "List of Dog Breeds | Petfinder",
      htmlTitle: "List of \u003cb\u003eDog\u003c/b\u003e Breeds | Petfinder",
      link: "https://www.petfinder.com/dog-breeds/",
      displayLink: "www.petfinder.com",
      snippet:
        "Browse our list of 219 dog breeds to find the perfect dog breed for you, and then \nfind adoptable dogs and dog shelters close to you.",
      htmlSnippet:
        "Browse our list of 219 \u003cb\u003edog\u003c/b\u003e breeds to find the perfect \u003cb\u003edog\u003c/b\u003e breed for you, and then \u003cbr\u003e\nfind adoptable \u003cb\u003edogs\u003c/b\u003e and \u003cb\u003edog\u003c/b\u003e shelters close to you.",
      cacheId: "7j5L-QcDix4J",
      formattedUrl: "https://www.petfinder.com/dog-breeds/",
      htmlFormattedUrl:
        "https://www.petfinder.com/\u003cb\u003edog\u003c/b\u003e-breeds/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiIC-FOJ9-hwWFqz_p42xmk2RI9LMgdqICfOvjClMattG_wOn-P8RsGus",
            width: "213",
            height: "237",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-sm.jpg?bust=1536935086",
            "theme-color": "#6504b5",
            "twitter:card": "summary",
            "twitter:title": "List of Dog Breeds | Petfinder",
            "og:type": "article",
            "og:site_name": "Petfinder",
            "og:title": "List of Dog Breeds | Petfinder",
            title: "Dog Breeds | Browse 219 dog breeds | Petfinder",
            "og:description":
              "See which breeds may be right for you, and find adoptable dogs nearby",
            "twitter:image":
              "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-sm.jpg?bust=1536935086",
            "fb:app_id": "1650864228532522",
            "twitter:site": "@petfinder",
            viewport: "width=device-width, initial-scale=1.0",
            "twitter:description":
              "See which breeds may be right for you, and find adoptable dogs nearby",
            "og:locale": "en_US",
            "og:url": "https://www.petfinder.com/dog-breeds/",
          },
        ],
        cse_image: [
          {
            src:
              "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-sm.jpg?bust=1536935086",
          },
        ],
        listitem: [
          {
            item: "Home",
            name: "Home",
            position: "1",
          },
          {
            name: "Dog Breeds",
            position: "2",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Dr. Dog | Official Site",
      htmlTitle: "Dr. \u003cb\u003eDog\u003c/b\u003e | Official Site",
      link: "https://www.drdogmusic.com/",
      displayLink: "www.drdogmusic.com",
      snippet:
        "Music, tour dates, videos and more from the band Dr. Dog. Critical Equation out \nnow.",
      htmlSnippet:
        "Music, tour dates, videos and more from the band Dr. \u003cb\u003eDog\u003c/b\u003e. Critical Equation out \u003cbr\u003e\nnow.",
      cacheId: "dHDoqhLVUkwJ",
      formattedUrl: "https://www.drdogmusic.com/",
      htmlFormattedUrl:
        "https://www.dr\u003cb\u003edog\u003c/b\u003emusic.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3IB6CB61ElGX4c43m2ikc4PhtX7HllK5FQFp3V630DPSDfs8JQBpHekk6",
            width: "259",
            height: "194",
          },
        ],
        metatags: [
          {
            "og:image":
              "http://static1.squarespace.com/static/5a5665100abd04ea815ea674/t/5cbe02b5e5e5f00b513c764e/1555956415605/Dr.+Dog+-+Profile+Photo_lowres.jpg?format=1500w",
            "og:type": "website",
            "og:image:width": "1500",
            "twitter:title": "Dr. Dog | Official Site",
            "twitter:card": "summary",
            "og:site_name": "Dr. Dog | Official Site",
            "twitter:url": "https://www.drdogmusic.com",
            "og:title": "Dr. Dog | Official Site",
            "og:image:height": "1125",
            "og:description":
              "Music, tour dates, videos and more from the band Dr. Dog. Critical Equation out now.",
            "twitter:image":
              "http://static1.squarespace.com/static/5a5665100abd04ea815ea674/t/5cbe02b5e5e5f00b513c764e/1555956415605/Dr.+Dog+-+Profile+Photo_lowres.jpg?format=1500w",
            viewport: "width=device-width, initial-scale=1",
            "twitter:description":
              "Music, tour dates, videos and more from the band Dr. Dog. Critical Equation out now.",
            "og:url": "https://www.drdogmusic.com",
          },
        ],
        cse_image: [
          {
            src:
              "http://static1.squarespace.com/static/5a5665100abd04ea815ea674/t/5cbe02b5e5e5f00b513c764e/1555956415605/Dr.+Dog+-+Profile+Photo_lowres.jpg?format=1500w",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Dat Dog",
      htmlTitle: "Dat \u003cb\u003eDog\u003c/b\u003e",
      link: "https://www.datdog.com/",
      displayLink: "www.datdog.com",
      snippet: "dat dog, hot dogs, new orleans, tuennerman.",
      htmlSnippet:
        "dat \u003cb\u003edog\u003c/b\u003e, hot \u003cb\u003edogs\u003c/b\u003e, new orleans, tuennerman.",
      cacheId: "Z6q7Wtg9YHMJ",
      formattedUrl: "https://www.datdog.com/",
      htmlFormattedUrl: "https://www.dat\u003cb\u003edog\u003c/b\u003e.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUea21Ci5_KjoQoBErxNKgHv-fOqH5rMB380KhP9UGeEOFfQWLAvfzRifL",
            width: "318",
            height: "159",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://images.getbento.com/Zsi58aUTAuJfESPYbgSM_datdog1.png?w=1200&fit=fill&auto=compress,format&h=600&bg=EDEDF1&pad=100",
            "og:type": "website",
            "twitter:card": "summary",
            "twitter:title": "Dat Dog",
            "og:site_name": "Dat Dog, Put A Smile On Your Face",
            "og:title": "Dat Dog",
            rating: "General",
            distribution: "Global",
            "og:description": "dat dog, hot dogs, new orleans, tuennerman",
            "twitter:creator": "@DatDogUS",
            "twitter:image":
              "https://images.getbento.com/Zsi58aUTAuJfESPYbgSM_datdog1.png?w=1200&fit=fill&auto=compress,format&h=600&bg=EDEDF1&pad=100",
            "twitter:site": "@DatDogUS",
            viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
            "twitter:description": "dat dog, hot dogs, new orleans, tuennerman",
            "og:url": "https://www.datdog.com/",
          },
        ],
        cse_image: [
          {
            src:
              "https://images.getbento.com/Zsi58aUTAuJfESPYbgSM_datdog1.png?w=1200&fit=fill&auto=compress,format&h=600&bg=EDEDF1&pad=100",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "The Best Dogs Of BBC Earth | Top 5 | BBC Earth - YouTube",
      htmlTitle:
        "The Best \u003cb\u003eDogs\u003c/b\u003e Of BBC Earth | Top 5 | BBC Earth - YouTube",
      link: "https://www.youtube.com/watch?v=MPV2METPeJU",
      displayLink: "www.youtube.com",
      snippet:
        "Sep 26, 2019 ... ... most precious moments from our beloved canine companions: from cute \npuppies opening their eyes for the first time, to loyal wild dogs and...",
      htmlSnippet:
        "Sep 26, 2019 \u003cb\u003e...\u003c/b\u003e ... most precious moments from our beloved canine companions: from cute \u003cbr\u003e\npuppies opening their eyes for the first time, to loyal wild \u003cb\u003edogs\u003c/b\u003e and...",
      formattedUrl: "https://www.youtube.com/watch?v=MPV2METPeJU",
      htmlFormattedUrl: "https://www.youtube.com/watch?v=MPV2METPeJU",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ0jvQS10fvMAiPYTPS8qDQQ6Xh_C3TPjPOWxXs8XJZfpQ814LpI-LEYq4",
            width: "300",
            height: "168",
          },
        ],
        imageobject: [
          {
            width: "1280",
            url: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
            height: "720",
          },
        ],
        person: [
          {
            name: "BBC Earth",
            url: "http://www.youtube.com/user/BBCEarth",
          },
        ],
        metatags: [
          {
            "og:image": "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
            "og:image:width": "1280",
            "twitter:card": "player",
            "og:site_name": "YouTube",
            "twitter:url": "https://www.youtube.com/watch?v=MPV2METPeJU",
            "al:android:package": "com.google.android.youtube",
            title: "The Best Dogs Of BBC Earth | Top 5 | BBC Earth",
            "al:ios:url":
              "vnd.youtube://www.youtube.com/watch?v=MPV2METPeJU&feature=applinks",
            "twitter:app:id:iphone": "544007664",
            "og:description":
              "We've collected the most precious moments from our beloved canine companions: from cute puppies opening their eyes for the first time, to loyal wild dogs and...",
            "al:ios:app_store_id": "544007664",
            "twitter:image":
              "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
            "twitter:site": "@youtube",
            "og:video:type": "text/html",
            "og:video:height": "720",
            "og:video:url": "https://www.youtube.com/embed/MPV2METPeJU",
            "og:type": "video.other",
            "twitter:title": "The Best Dogs Of BBC Earth | Top 5 | BBC Earth",
            "al:ios:app_name": "YouTube",
            "og:title": "The Best Dogs Of BBC Earth | Top 5 | BBC Earth",
            "og:image:height": "720",
            "twitter:app:id:ipad": "544007664",
            "al:web:url":
              "https://www.youtube.com/watch?v=MPV2METPeJU&feature=applinks",
            "og:video:secure_url": "https://www.youtube.com/embed/MPV2METPeJU",
            "og:video:tag": "bbc documentary",
            "og:video:width": "1280",
            "al:android:url":
              "vnd.youtube://www.youtube.com/watch?v=MPV2METPeJU&feature=applinks",
            "fb:app_id": "87741124305",
            "twitter:app:name:ipad": "YouTube",
            "twitter:description":
              "We've collected the most precious moments from our beloved canine companions: from cute puppies opening their eyes for the first time, to loyal wild dogs and...",
            "og:url": "https://www.youtube.com/watch?v=MPV2METPeJU",
            "al:android:app_name": "YouTube",
            "twitter:app:name:iphone": "YouTube",
          },
        ],
        videoobject: [
          {
            embedurl: "https://www.youtube.com/embed/MPV2METPeJU",
            playertype: "HTML5 Flash",
            isfamilyfriendly: "True",
            uploaddate: "2019-09-26",
            description:
              "We've collected the most precious moments from our beloved canine companions: from cute puppies opening their eyes for the first time, to loyal wild dogs and...",
            videoid: "MPV2METPeJU",
            url: "https://www.youtube.com/watch?v=MPV2METPeJU",
            duration: "PT13M12S",
            unlisted: "False",
            name: "The Best Dogs Of BBC Earth | Top 5 | BBC Earth",
            paid: "False",
            width: "1280",
            regionsallowed:
              "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
            genre: "Pets & Animals",
            interactioncount: "1265307",
            channelid: "UCwmZiChSryoWQCZMIQezgTg",
            datepublished: "2019-09-26",
            thumbnailurl:
              "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
            height: "720",
          },
        ],
        cse_image: [
          {
            src: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Dog Breeds - Types Of Dogs - American Kennel Club",
      htmlTitle:
        "\u003cb\u003eDog\u003c/b\u003e Breeds - Types Of \u003cb\u003eDogs\u003c/b\u003e - American Kennel Club",
      link: "https://www.akc.org/dog-breeds/",
      displayLink: "www.akc.org",
      snippet:
        "Sep 10, 2020 ... What's a dog breed? People have been breeding dogs since prehistoric times. \nThe earliest dog breeders used wolves to create domestic dogs.",
      htmlSnippet:
        "Sep 10, 2020 \u003cb\u003e...\u003c/b\u003e What&#39;s a \u003cb\u003edog\u003c/b\u003e breed? People have been breeding \u003cb\u003edogs\u003c/b\u003e since prehistoric times. \u003cbr\u003e\nThe earliest \u003cb\u003edog\u003c/b\u003e breeders used wolves to create domestic \u003cb\u003edogs\u003c/b\u003e.",
      cacheId: "5GViT37xTNoJ",
      formattedUrl: "https://www.akc.org/dog-breeds/",
      htmlFormattedUrl:
        "https://www.akc.org/\u003cb\u003edog\u003c/b\u003e-breeds/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePbJqOzDdAD4--uS0RX2-j5JoxmZUeV_6MIMLNXF46Lw80Yp80iKCi94",
            width: "275",
            height: "183",
          },
        ],
        document: [
          {
            akc_breed_popularity: "AKC Breed Popularity: Ranks 148 of 196",
            life_expectancy: "Life Expectancy: 12-15 years",
            weight: "Weight: 7-10 pounds",
            height: "Height: 9-11.5 inches",
            group: "Group: Toy Group",
          },
        ],
        metatags: [
          {
            "p:domain_verify": "48d4515b2a76c369a18a0f41a952afa0",
            "og:type": "object",
            "twitter:card": "summary_large_image",
            "twitter:title":
              "Dog Breeds - Types Of Dogs - American Kennel Club",
            "og:site_name": "American Kennel Club",
            "og:title": "Dog Breeds - Types Of Dogs - American Kennel Club",
            "msapplication-tileimage":
              "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12221731/cropped-favicon-512x512-270x270.png",
            "fb:pages": "93474569120",
            "article:tag": "Affenpinscher",
            "fb:app_id": "530726673730940",
            "twitter:site": "@akcdoglovers",
            viewport:
              "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
            "twitter:description":
              "Complete list of AKC recognized dog breeds. Includes personality, history, health, nutrition, grooming, pictures, videos and AKC breed standard.",
            "og:locale": "en_US",
            "fb:admins": "689743718",
            "og:url": "https://www.akc.org/dog-breeds/",
            slug: "dog-breeds",
          },
        ],
        cse_image: [
          {
            src:
              "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/26223654/Spanish-Water-Dog.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "These 10 Dogs Are Most Dangerous - YouTube",
      htmlTitle:
        "These 10 \u003cb\u003eDogs\u003c/b\u003e Are Most Dangerous - YouTube",
      link: "https://www.youtube.com/watch?v=kHHMWNjp2KQ",
      displayLink: "www.youtube.com",
      snippet:
        "Oct 15, 2019 ... Official There are some very dangerous animals on earth, but domesticated dogs \nare not. it's unfair to callously label a dog as dangerous.",
      htmlSnippet:
        "Oct 15, 2019 \u003cb\u003e...\u003c/b\u003e Official There are some very dangerous animals on earth, but domesticated \u003cb\u003edogs\u003c/b\u003e \u003cbr\u003e\nare not. it&#39;s unfair to callously label a \u003cb\u003edog\u003c/b\u003e as dangerous.",
      formattedUrl: "https://www.youtube.com/watch?v=kHHMWNjp2KQ",
      htmlFormattedUrl: "https://www.youtube.com/watch?v=kHHMWNjp2KQ",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkwdbCb_GnaI-zGbUtjktGol4ki53zwxZTSL-OvPNgLpK1wj073-pSJ0fD",
            width: "300",
            height: "168",
          },
        ],
        imageobject: [
          {
            width: "1280",
            url: "https://i.ytimg.com/vi/kHHMWNjp2KQ/maxresdefault.jpg",
            height: "720",
          },
        ],
        person: [
          {
            name: "ViralBe",
            url: "http://www.youtube.com/user/CopyMafia",
          },
        ],
        metatags: [
          {
            "og:image": "https://i.ytimg.com/vi/kHHMWNjp2KQ/maxresdefault.jpg",
            "og:image:width": "1280",
            "twitter:card": "player",
            "og:site_name": "YouTube",
            "twitter:url": "https://www.youtube.com/watch?v=kHHMWNjp2KQ",
            "al:android:package": "com.google.android.youtube",
            title: "These 10 Dogs Are Most Dangerous",
            "al:ios:url":
              "vnd.youtube://www.youtube.com/watch?v=kHHMWNjp2KQ&feature=applinks",
            "og:description":
              "🔥 Check out more awesome videos : https://www.youtube.com/user/CopyMafia?sub_confirmation=1 Facebook : ViralBe.Official Instagram : ViralBe.Official There ar...",
            "al:ios:app_store_id": "544007664",
            "twitter:image":
              "https://i.ytimg.com/vi/kHHMWNjp2KQ/maxresdefault.jpg",
            "twitter:site": "@youtube",
            "og:video:type": "text/html",
            "og:video:height": "720",
            "og:video:url": "https://www.youtube.com/embed/kHHMWNjp2KQ",
            "og:type": "video.other",
            "twitter:title": "These 10 Dogs Are Most Dangerous",
            "al:ios:app_name": "YouTube",
            "og:title": "These 10 Dogs Are Most Dangerous",
            "og:image:height": "720",
            "al:web:url":
              "https://www.youtube.com/watch?v=kHHMWNjp2KQ&feature=applinks",
            "og:video:secure_url": "https://www.youtube.com/embed/kHHMWNjp2KQ",
            "og:video:tag": "dogs",
            "og:video:width": "1280",
            "al:android:url":
              "vnd.youtube://www.youtube.com/watch?v=kHHMWNjp2KQ&feature=applinks",
            "fb:app_id": "87741124305",
            "twitter:description":
              "🔥 Check out more awesome videos : https://www.youtube.com/user/CopyMafia?sub_confirmation=1 Facebook : ViralBe.Official Instagram : ViralBe.Official There ar...",
            "og:url": "https://www.youtube.com/watch?v=kHHMWNjp2KQ",
            "al:android:app_name": "YouTube",
            "twitter:app:name:iphone": "YouTube",
          },
        ],
        videoobject: [
          {
            embedurl: "https://www.youtube.com/embed/kHHMWNjp2KQ",
            playertype: "HTML5 Flash",
            isfamilyfriendly: "True",
            uploaddate: "2019-10-15",
            description:
              "🔥 Check out more awesome videos : https://www.youtube.com/user/CopyMafia?sub_confirmation=1 Facebook : ViralBe.Official Instagram : ViralBe.Official There ar...",
            videoid: "kHHMWNjp2KQ",
            url: "https://www.youtube.com/watch?v=kHHMWNjp2KQ",
            duration: "PT6M16S",
            unlisted: "False",
            name: "These 10 Dogs Are Most Dangerous",
            paid: "False",
            width: "1280",
            regionsallowed:
              "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
            genre: "Pets & Animals",
            interactioncount: "8155465",
            channelid: "UCfGLwxYDLZOj_eJOcMboY_A",
            datepublished: "2019-10-15",
            thumbnailurl:
              "https://i.ytimg.com/vi/kHHMWNjp2KQ/maxresdefault.jpg",
            height: "720",
          },
        ],
        cse_image: [
          {
            src: "https://i.ytimg.com/vi/kHHMWNjp2KQ/maxresdefault.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Down Dog | Great Yoga Anywhere",
      htmlTitle: "Down \u003cb\u003eDog\u003c/b\u003e | Great Yoga Anywhere",
      link: "https://www.downdogapp.com/",
      displayLink: "www.downdogapp.com",
      snippet:
        "Down Dog provides a studio-like yoga experience in the comfort of your home.",
      htmlSnippet:
        "Down \u003cb\u003eDog\u003c/b\u003e provides a studio-like yoga experience in the comfort of your home.",
      cacheId: "QHjRUBeGoIwJ",
      formattedUrl: "https://www.downdogapp.com/",
      htmlFormattedUrl:
        "https://www.down\u003cb\u003edog\u003c/b\u003eapp.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQHIJn9wQAaMUyBoQfqnkjDKOQI8Msib_4WiBKyDZ3NNMVdjhuCzMHBNZE",
            width: "300",
            height: "168",
          },
        ],
        metatags: [
          {
            "og:image": "http://media.downdogapp.com/misc/og-image.jpg",
            "og:type": "product",
            "fb:app_id": "850844554977893",
            "twitter:card": "app",
            "og:site_name": "Down Dog | Great Yoga Anywhere",
            viewport: "width=device-width, initial-scale=1, minimum-scale=1",
            "og:title": "Down Dog | Great Yoga Anywhere",
            "fb:admins": "yourfriendben",
            "og:url": "https://www.downdogapp.com",
            "twitter:app:id:iphone": "983693694",
            "og:description":
              "Down Dog provides a studio-like yoga experience in the comfort of your home.",
            "twitter:app:id:android": "com.downdogapp",
          },
        ],
        cse_image: [
          {
            src: "http://media.downdogapp.com/misc/og-image.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "V-dog Vegan Dog Food | Healthy Dog Treats | Vegan Dog Chews",
      htmlTitle:
        "V-\u003cb\u003edog\u003c/b\u003e Vegan \u003cb\u003eDog\u003c/b\u003e Food | Healthy \u003cb\u003eDog\u003c/b\u003e Treats | Vegan \u003cb\u003eDog\u003c/b\u003e Chews",
      link: "https://v-dog.com/",
      displayLink: "v-dog.com",
      snippet:
        "V-dog makes 100% complete & balanced (AAFCO) vegan dog food with healthy \nsuperfoods and plant-powered protein.",
      htmlSnippet:
        "V-\u003cb\u003edog\u003c/b\u003e makes 100% complete &amp; balanced (AAFCO) vegan \u003cb\u003edog\u003c/b\u003e food with healthy \u003cbr\u003e\nsuperfoods and plant-powered protein.",
      cacheId: "y_sgO6lhJDMJ",
      formattedUrl: "https://v-dog.com/",
      htmlFormattedUrl: "https://v-\u003cb\u003edog\u003c/b\u003e.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2J2xsDHcG-q0j0I8b7xFKLp-HzlVweoBYiU8_c6OR9TOxVvM4z3PMYszB",
            width: "311",
            height: "162",
          },
        ],
        organization: [
          {
            logo:
              "https://cdn.shopify.com/s/files/1/0128/0882/files/1143862919832408.r9HG67UgimJlLK1fU9KK_height640_145x.png?v=1570621938",
            url: "https://v-dog.com/",
          },
          {
            logo:
              "https://cdn.shopify.com/s/files/1/0128/0882/files/1143862919832408.r9HG67UgimJlLK1fU9KK_height640_145x.png?v=1570621938",
            url: "https://v-dog.com/",
          },
          {
            logo:
              "https://cdn.shopify.com/s/files/1/0128/0882/files/logo_ce80dce4-822f-45ea-864f-f66810bb028c_1024x1024.png?v=1527280246",
            url: "https://v-dog.com/",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://cdn.shopify.com/s/files/1/0128/0882/files/logo_145x_2x_5771ba02-5fb9-4c6f-8712-25e39cdf4071.png?height=628&pad_color=fff&v=1519944129&width=1200",
            "og:type": "website",
            "theme-color": "#5a4646",
            "og:image:width": "1200",
            "og:site_name": "V-dog",
            "og:title":
              "V-dog Vegan Dog Food | Healthy Dog Treats | Vegan Dog Chews",
            "shopify-checkout-api-token": "81e1ca0adc02c388f579ff7f5289b39a",
            "og:image:height": "628",
            "og:description":
              "V-dog makes 100% complete & balanced (AAFCO) vegan dog food with healthy superfoods and plant-powered protein.",
            "og:image:secure_url":
              "https://cdn.shopify.com/s/files/1/0128/0882/files/logo_145x_2x_5771ba02-5fb9-4c6f-8712-25e39cdf4071.png?height=628&pad_color=fff&v=1519944129&width=1200",
            viewport: "width=device-width,initial-scale=1",
            "shopify-digital-wallet": "/1280882/digital_wallets/dialog",
            "og:url": "https://v-dog.com/",
          },
        ],
        cse_image: [
          {
            src:
              "https://cdn.shopify.com/s/files/1/0128/0882/files/logo_145x_2x_5771ba02-5fb9-4c6f-8712-25e39cdf4071.png?height=628&pad_color=fff&v=1519944129&width=1200",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Dog Health Center | Dog Care and Information from WebMD",
      htmlTitle:
        "\u003cb\u003eDog\u003c/b\u003e Health Center | \u003cb\u003eDog\u003c/b\u003e Care and Information from WebMD",
      link: "https://pets.webmd.com/dogs/default.htm",
      displayLink: "pets.webmd.com",
      snippet:
        "WebMD veterinary experts provide comprehensive information about dog health \ncare, offer nutrition and feeding tips, and help you identify illnesses in dogs.",
      htmlSnippet:
        "WebMD veterinary experts provide comprehensive information about \u003cb\u003edog\u003c/b\u003e health \u003cbr\u003e\ncare, offer nutrition and feeding tips, and help you identify illnesses in \u003cb\u003edogs\u003c/b\u003e.",
      cacheId: "MIx6TZC2qTIJ",
      formattedUrl: "https://pets.webmd.com/dogs/default.htm",
      htmlFormattedUrl:
        "https://pets.webmd.com/\u003cb\u003edogs\u003c/b\u003e/default.htm",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQl2YDG3KsEH8S4STzHnOzgDXxYFWIf7gBermk1PogGpEArMcrcpekkLGY",
            width: "200",
            height: "200",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/logos/webmd/web/webmd-logo-fb.jpg",
            "og:image:alt": "Logo for WebMD",
            "og:type": "article",
            "theme-color": "#F5BD0F",
            "og:site_name": "WebMD",
            "og:title": "Dogs",
            "fb:pages": "11736558481",
            "og:description":
              "Welcome to the new WebMD Dog Health Center. WebMD veterinary experts provide comprehensive information about dog health care, offer nutrition and feeding tips, and help you identify illnesses in dogs.",
            "article:author": "https://www.facebook.com/WebMD",
            "article:publisher": "https://www.facebook.com/WebMD",
            "fb:app_id": "385978254785998",
            viewport: "width=device-width, initial-scale=1",
            "og:locale": "en_US",
            s_1stimp: "1697",
            "og:url": "https://pets.webmd.com/dogs/default.htm",
          },
        ],
        cse_image: [
          {
            src:
              "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/logos/webmd/web/webmd-logo-fb.jpg",
          },
        ],
        sitenavigationelement: [
          {
            name: "ADD/ADHD",
            url: "ADD/ADHD",
          },
        ],
      },
    },
  ],
};
