const images = {
  vs1:
    "https://raw.githubusercontent.com/ricsoft/ProjectImages/master/vancouversky/vancouversky01.png",
  vs2:
    "https://raw.githubusercontent.com/ricsoft/ProjectImages/master/vancouversky/vancouversky02.png",
  vs3:
    "https://raw.githubusercontent.com/ricsoft/ProjectImages/master/vancouversky/vancouversky03.png",
  vs4:
    "https://raw.githubusercontent.com/ricsoft/ProjectImages/master/vancouversky/vancouversky04.png",

  ot1:
    "https://raw.githubusercontent.com/ricsoft/ProjectImages/master/ontap/ontap01.jpg"
};

export const ProjectList = [
  {
    index: 0,
    name: "Vancouver Sky",
    description:
      "Vancouver daily and hourly weather forecast in a simplified layout. Created with React Native for use on Android.",
    icons: [
      {
        prefix: "fab",
        icon: "github",
        url: "https://github.com/ricsoft/vancouversky"
      },
      {
        prefix: "fab",
        icon: "google-play",
        url:
          "https://play.google.com/store/apps/details?id=ca.richardcheung.vancouversky"
      }
    ],
    pictures: [images.vs1, images.vs2, images.vs3, images.vs4]
  },
  {
    index: 1,
    name: "On Tap",
    description:
      "Beer on tap at various local breweries. Collected with Selenium and stored in DynamoDB.",
    icons: [
      {
        prefix: "fab",
        icon: "github",
        url: "https://github.com/ricsoft/webscraper"
      },
      {
        prefix: "fab",
        icon: "github",
        url: "https://github.com/ricsoft/ontap"
      },
      {
        prefix: "fas",
        icon: "globe",
        url: "https://ontap.z9.web.core.windows.net/"
      }
    ],
    pictures: [images.ot1]
  }
];
