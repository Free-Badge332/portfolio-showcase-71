import model from "@/assets/room/room.glb.asset.json";
import titleFont from "@/assets/room/room-font-title.json.asset.json";
import subtitleFont from "@/assets/room/room-font-subtitle.json.asset.json";
import screenVideo from "@/assets/room/room-screen.mp4.asset.json";
import bookInner from "@/assets/room/room-book.jpg.asset.json";
import logo from "@/assets/room/room-logo.png.asset.json";
import adminAndMobile from "@/assets/room/room-adminandmobile.jpg.asset.json";
import proshop from "@/assets/room/room-proshop.png.asset.json";
import myTeachers from "@/assets/room/room-project-myteachers.gif.asset.json";
import wholesale from "@/assets/room/room-project-wholesale.jpg.asset.json";
import chatApp from "@/assets/room/room-chatApp.jpg.asset.json";
import audio from "@/assets/room/room-audio.png.asset.json";

export const roomAssets = {
  model: model.url,
  titleFont: titleFont.url,
  subtitleFont: subtitleFont.url,
  screenVideo: screenVideo.url,
  bookInner: bookInner.url,
  logo: logo.url,
};

export type RoomProject = { image: string; url: string; mobileUrl?: string };

export const roomProjects: RoomProject[] = [
  { image: adminAndMobile.url, url: "https://aregenkibet.web.app", mobileUrl: "https://adminpanel-bx43q6fid-ezadin-badrus-projects.vercel.app/" },
  { image: proshop.url, url: "https://github.com/ezadin2/proshop-demo.git" },
  { image: myTeachers.url, url: "https://abuanwar072.github.io/Flutter-Responsive-Admin-Panel-or-Dashboard/" },
  { image: wholesale.url, url: "https://github.com/ezadin2/Flight-Booking-App-Flutter.git" },
  { image: chatApp.url, url: "https://github.com/ezadin2/nextjs-setup" },
  { image: audio.url, url: "https://github.com/ezadin2/Audio-player.git" },
];
