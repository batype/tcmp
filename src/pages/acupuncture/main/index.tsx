import React, { useState } from 'react';
import './index.less';
import moment from 'moment';
import { solar2lunar } from './shichen';
import { useEffect } from 'react';
import { Col, Row } from 'antd';
import HeaderImg from '@/asset/img/C66A69B8-9796-4B2C-9ACF-4CBEEE21CA67.png';
import lgbf1 from '../img/lgbf1.png';
import lgbfp1 from '../img/lgbfp1.png';
import IMG_09_1 from '../img/09_1.gif';
import IMG_09_2 from '../img/09_2.gif';
import { RefreshData, BaGua, drawTurntable } from './bagua';
import { formatTime } from './data';

class SolarState {
  LGBF = '' as string;
  LGBFP = '' as string;
  ShiChen = '' as string;
  Term = null;
  clunarDate = '' as string;
  gzDate = '' as string;
  indexLGBF = 1 as number;
  isLeap = false as boolean;
}

export default function AcupuncturePage() {
  const [time, settime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
  const [timeSolar, setTimeSolar] = useState<SolarState>();
  const getTime = () => {
    let time = solar2lunar();
    setTimeSolar(time);
  };

  useEffect(() => {
    setInterval(() => {
      getTime();
      settime(moment().format('YYYY-MM-DD HH:mm:ss'));
    }, 1000);
    drawTurntable(formatTime(0, 'hh:mm:ss'));
    BaGua();
    RefreshData();
  }, []);

  return (
    <div className="song-acupuncture-div">
      <div className="song-acupuncture-top">
        <Row>
          <Col span={12} className="song-acupuncture-left-header">
            <div id="nowTime">{time}</div>
            <div>{timeSolar?.clunarDate}</div>
            <div>{timeSolar?.gzDate}</div>
            <div>{timeSolar?.ShiChen}</div>
          </Col>
          <Col span={12} style={{ padding: '10px' }}>
            <img style={{ width: '100%' }} src={HeaderImg} />
          </Col>
        </Row>
      </div>

      <div id="center">
        <canvas id="turntableCanvas" width="400" height="416"></canvas>
        <canvas
          id="bagua"
          className="bagua"
          width="400"
          height="416"
          style={{ top: '199.4px' }}
        ></canvas>
      </div>
      <div id="footer">
        主穴：<span id="dataLGBF">临泣</span>
        配穴：<span id="dataLGBFP">外关</span>
        <div>
          <img id="lgBFimg1" className="dataimg" src={lgbf1} />
          <img id="lgBFimg2" className="dataimg" src={lgbfp1} />
        </div>
        <div id="datatext">
          足少阴肾经 酉时（17点至19点）—肾经旺。酉时肾藏精，纳华元气清；
          <br />
          “肾藏生殖之精和五脏六腑之精。肾为先天之根。”人体经过申时泻火排毒，肾在酉时进入贮藏精华的阶段。此时不适宜太强的运动量，也不适宜大量喝水。
          <br />
          虚症：耳鸣、健忘、尿频、腿酸、性欲减退、便秘、元气不足、易疲劳、骨质疏松，天寒手脚冰冷、脚气等。
          <br />
          实症：耳鸣、月经不调、口干舌燥、血压异常、小便量少、色深、浑浊、性欲减退、神经衰弱、足发热发汗、生殖器病变等。
        </div>
        <div>
          <img id="dataimg1" className="dataimg" src={IMG_09_1} />
          <img id="dataimg2" className="dataimg" src={IMG_09_2} />
        </div>
      </div>
    </div>
  );
}
