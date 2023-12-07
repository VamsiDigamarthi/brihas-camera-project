import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Multiple from "./components/Multliple/Multiple";
import SecondHeader from "./components/SecondHeader/SecondHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const values = [
  {
    id: "1",
    url: "http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",
    dist: "ADILABAD",
    subDist: "Adilabad",
    mode: "Online",
  },
  {
    id: "2",
    url: "http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",
    dist: "ADILABAD",
    subDist: "Adilabad",
    mode: "Online",
  },
  {
    id: "3",
    url: "http://cdn-fms.rbs.com.br/vod/hls_sample1_manifest.m3u8",
    dist: "ADILABAD",
    subDist: "Adilabad",
    mode: "Offline",
  },
  {
    id: "4",
    url: "http://nasatv-lh.akamaihd.net/i/NASA_101@319270/index_1000_av-p.m3u8?sd=10&rebase=on",
    dist: "ADILABAD",
    subDist: "Boath(ST)",
    mode: "Online",
  },
  {
    id: "5",
    url: "http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8",
    dist: "ADILABAD",
    subDist: "Boath(ST)",
    mode: "Online",
  },
  {
    id: "6",
    url: "http://walterebert.com/playground/video/hls/sintel-trailer.m3u8",
    dist: "KAMAREDDY",
    subDist: "Jukkal(SC)",
    mode: "Offline",
  },
  {
    id: "7",
    url: "http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8",
    dist: "KAMAREDDY",
    subDist: "Yellareddy",
    mode: "Online",
  },
  {
    id: "8",
    url: "https://devimages.apple.com.edgekey.net/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
    dist: "KAMAREDDY",
    subDist: "Jukkal(SC)",
    mode: "Offline",
  },
  {
    id: "9",
    url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    dist: "MEDAK",
    subDist: "Narsapur",
    mode: "Online",
  },
  {
    id: "10",
    url: "https://d1gnaphp93fop2.cloudfront.net/videos/multiresolution/rendition_new10.m3u8",
    dist: "MEDAK",
    subDist: "Narsapur",
    mode: "Online",
  },
  {
    id: "11",
    url: "https://res.cloudinary.com/dannykeane/video/upload/sp_full_hd/q_80:qmax_90,ac_none/v1/dk-memoji-dark.m3u8",
    dist: "MEDAK",
    subDist: "Medak",
    mode: "Offline",
  },
  {
    id: "12",
    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    dist: "MEDAK",
    subDist: "Medak",
    mode: "Offline",
  },
  {
    id: "13",
    url: "https://diceyk6a7voy4.cloudfront.net/e78752a1-2e83-43fa-85ae-3d508be29366/hls/fitfest-sample-1_Ott_Hls_Ts_Avc_Aac_16x9_1280x720p_30Hz_6.0Mbps_qvbr.m3u8",
    dist: "MEDAK",
    subDist: "Narsapur",
    mode: "Offline",
  },
  {
    id: "14",
    url: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    dist: "PEDDAPALLI",
    subDist: "Ramagundam",
    mode: "Online",
  },
  {
    id: "15",
    url: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
    dist: "PEDDAPALLI",
    subDist: "Ramagundam",
    mode: "Online",
  },
  {
    id: "16",
    url: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8",
    dist: "PEDDAPALLI",
    subDist: "Ramagundam",
    mode: "Offline",
  },
  {
    id: "17",
    url: "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",
    dist: "PEDDAPALLI",
    subDist: "Ramagundam",
    mode: "Offline",
  },
  {
    id: "18",
    url: "https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8",
    dist: "PEDDAPALLI",
    subDist: "Ramagundam",
    mode: "Offline",
  },
  {
    id: "19",
    url: "http://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_stereo_subs.m3u8",
    dist: "PEDDAPALLI",
    subDist: "Manthani",
    mode: "Online",
  },
  {
    id: "20",
    url: "http://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_multichannel_subs.m3u8",
    dist: "PEDDAPALLI",
    subDist: "Manthani",
    mode: "Offline",
  },
  {
    id: "21",
    url: "http://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_multi_language_subs.m3u8",
    dist: "PEDDAPALLI",
    subDist: "Manthani",
    mode: "Offline",
  },
  {
    id: "22",
    url: "http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest(format=m3u8-aapl)",
    dist: "PEDDAPALLI",
    subDist: "Manthani",
    mode: "Offline",
  },
  {
    id: "23",
    url: "http://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_multichannel_subs.m3u8",
    dist: "PEDDAPALLI",
    subDist: "Manthani",
    mode: "Online",
  },
  {
    id: "24",
    url: "http://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_multichannel_subs.m3u8",
    dist: "PEDDAPALLI",
    subDist: "Manthani",
    mode: "Online",
  },
];

function App() {
  let dist = "";
  let mode = "";
  let assem = "";

  const [finalFilterData, setFinalFilterData] = useState(values);

  const videoFilterFun = (data) => {
    // console.log(data);

    if (data.dis === "All") {
      dist = "";
    } else {
      dist = data.dis;
    }
    if (data.mode === "All") {
      mode = "";
    } else {
      mode = data.mode;
    }
    if (data.selectedAssemblyModeValue === "All") {
      assem = "";
    } else {
      assem = data.selectedAssemblyModeValue;
    }

    let d = values.filter((each) => {
      return (
        each.dist.includes(dist) &&
        each.subDist.includes(assem) &&
        each.mode.includes(mode)
      );
    });
    setFinalFilterData(d);
    // console.log(d);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <SecondHeader videoFilterFun={videoFilterFun} />
                <Main finalFilterData={finalFilterData} />
              </>
            }
          />
          <Route
            path="/multi"
            element={<Multiple finalFilterData={finalFilterData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
