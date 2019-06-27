<template>
  <div id="app">
    <Indicator></Indicator>
    <HeadBar
      projectHref="https://udn.com/upf/newmedia/2019_data/leopardcat/topic1/"
      :outLinkList="outLinkList"
    ></HeadBar>
    <Content
      backgroundColor="#f9f9f9"
    >
      <Cover
        coverImageMob="./cover/mob_cover1.jpg"
        coverImageWeb="./cover/web_cover1.jpg"
        titleSvg="./cover/title1.svg"
        href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic1/"
      >
        <div slot="title">
          <h2>馬路變墳場<br>8年75隻石虎遭路殺</h2>
        </div>
        <div slot="text">
          <p>國內石虎路殺事件頻傳，近8年，死於全台道路上的石虎亡魂多達75隻，超過半數的石虎路殺都發生在苗栗縣。為何瀕臨絕種的保育類動物石虎會一再命喪輪下？我們如何還給石虎一條安全回家的路？</p>
        </div>
      </Cover>
    </Content>
    <ScrollingMapVideo
      mapId = "scrolling-map-1-1"
      videoSrcMob="./scrolling_map_1/open_mob_.mp4"
      videoSrcWeb="./scrolling_map_1/open_web_.mp4"
      textPosition="left"
      :useFadeFlag=true
      :videoSize="{
        mob: {
          'width': 768,
          'height': 1024,
        },
        web: {
          'height': 900,
          'width': 1440,
        }
      }"
    >
      <div slot=title style="position: absolute; right: 10px; bottom: 10px; color: #ffffff; opacity: 0.5">
        資料來源：Google Earth
      </div>
      <div slot="intro">
        石虎是台灣低海拔山區丘陵的野生動物，現今僅分布於苗栗、南投、台中與彰化八卦山一帶。
      </div>
    </ScrollingMapVideo>
    <ScrollingMapTw
      mapId = "scrolling-map-1-2"
      imgSrcMob="./scrolling_map_1/tw_map_3.jpg"
      imgSrcWeb="./scrolling_map_1/tw_map_3.jpg"
      textPosition="left"
      :useFadeFlag=true
    >
      <div slot=title style="position: absolute; right: 10px; bottom: 10px;">
        資料來源：重要石虎棲地保育評析
      </div>
      <div slot="intro">
        根據學者研究分析，石虎重要棲地僅2140平方公里。目前重要棲地範圍內，約有400至600多隻石虎。
        <ul style="padding-left: 20px; padding-top: 20px">
          <li style="color: red;">重要棲地（目前已知有石虎的區域）</li>
          <li style="color: purple;">潛在棲地（周遭可能還有石虎或可擴散利用的區域）</li>
          <li style="color: green;">其他石虎可能棲地</li>
        </ul>
      </div>
    </ScrollingMapTw>
    <ScrollingMapRoad
      mapId = "scrolling-map-1-3"
      imgSrcMob1="./scrolling_map_1/Kill_range_MAP_01.svg"
      imgSrcWeb1="./scrolling_map_1/Kill_range_MAP_01.svg"
      textPosition="left"
      :useFadeFlag=true
    >
      <div slot=title style="position: absolute; right: 10px; bottom: 10px;">
        資料來源：政府資料開放平台
      </div>
      <div slot="intro">
        苗栗是石虎重要棲地，但南北向被國道1號、國道3號、台61線貫穿，加上台1線、台13線與苗栗縣道，把棲地切割得支離破碎，增加路殺風險。
      </div>
    </ScrollingMapRoad>
    <ScrollingMapRoadLast
      mapId = "scrolling-map-1-4"
      imgSrcMob1="./scrolling_map_1/Kill_range_MAP_01.svg"
      imgSrcWeb1="./scrolling_map_1/Kill_range_MAP_01.svg"
      textPosition="left"
      :useFadeFlag=true
    >
      <div slot=title style="position: absolute; right: 10px; bottom: 10px;">
        資料來源：苗栗縣大尺度之路殺風險評估
      </div>
      <div slot="intro">
        2011年到2019年元月20日，全台共有75筆石虎路殺紀錄，其中苗栗縣有54筆。路殺熱區包含苗29線、苗128縣道、苗52線、以及苗140縣道。
      </div>
    </ScrollingMapRoadLast>
    <Content>
      <h3>路殺悲歌不斷<br>苗栗最多 南投、台中、彰化其次</h3>
      <p><br></p>
      <p>農委會1989年將石虎公告珍貴稀有保育類野生動物，2008年提升到瀕臨絕種等級，但石虎路殺悲歌卻沒有停過。</p>
      <p><br></p>
      <p>根據統計，<strong>從2011年到2019年元月20日，全台共有75筆石虎路殺紀錄，其中54筆都在苗栗縣境，高達72％；其次為南投14筆、台中5筆與彰化2筆</strong>。原因多與棲地破碎化，或遭擾動有關。</p>
      <p><br></p>
      <p>特生中心助理研究員林育秀說，石虎棲地被道路切割、破碎化，動物的活動範圍內出現道路，交通風險增加，死亡機率也提高；尤其<strong>路死的石虎年齡偏低，代表年輕個體要外出探索地盤的階段，因經驗不足而被撞死。</strong></p>
      <p><br></p>
      <ColumnOne
        src="./img/graphic_mob1_1_1.svg"
        srcWeb="./img/graphic1_1_.svg"
        description="全台石虎路殺歷年發生案例。資料來源／農委會特生中心"
        alt="全台石虎路殺歷年發生案例"
        href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic1/"
      ></ColumnOne>
      <p><br></p>
      <h3>路殺熱點直擊<br>苗29、苗140縣道成「石虎死亡公路」</h3>
      <p><br></p>
      <p>2019年元月9日凌晨苗栗後龍溪畔，一隻1歲多的年輕公石虎正穿越苗29縣道，昏暗的路燈下，呼嘯而過的車輛輾過了它，直到隔天清晨被發現。</p>
      <p><br></p>
      <p>研究學者解剖了這隻石虎，它的腸是空的，但胃飽滿，有不少螃蟹類的甲殼食物，還有些羽毛與骨頭，推測石虎在大快朵頤之後，想回到馬路對面的山坡地，卻橫死車輪之下。</p>
      <p><br></p>
      <p>石虎是夜行性動物，路殺發生的時間點幾乎都在深夜時分。記者凌晨1點，站在<strong>苗29縣道2公里處路段，這附近發生了4起路殺個案</strong>，儘管路旁有「當心動物減速慢行」的標誌，馬路上也畫著大大的「慢」字標誌，現場視線昏暗，幾乎難以察覺。</p>
      <p><br></p>
      <p><br></p>
      <p><br></p>
      <ColumnOne
        src="./img/mob1_5.jpg"
        srcWeb="./img/web1_5.jpg"
        description="苗29縣道路石虎路殺熱點，雖限速40公里，但夜間車流少車速快，常見車輛呼嘯而過。"
        alt="苗29縣道路石虎路殺熱點"
        href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic1/"
      ></ColumnOne>
      <p><br></p>
      <p>苗29縣道在2011年完工通車，屬於苗栗、後龍的重要聯絡道。記者現場觀察一個半小時，只有十多輛汽、機車呼嘯而過，夜間行車速度極快，估計超過速限40公里，直到車輛逼近時，才驚覺車燈一閃而過，不要說石虎，如果有人正穿越馬路，恐怕都難以應變。</p>
      <p><br></p>
      <p><br></p>
    </Content>
    <ScrollingMapp
      mapId = "scrolling-map-2-1"
      imgSrcMob="./img/mob1_7_1.jpg"
      imgSrcWeb="./img/new1.jpg"
      backgroundColor="#011936"
      textPosition="left"
      :useFadeFlag=true
    >
      <div slot=title style="position: absolute; right: 10px; bottom: 10px; color: #ffffff">
        資料來源：苗栗縣大尺度之路殺風險評估
      </div>
      <div slot="intro">
        有苗栗南橫公路之稱的苗140縣道，從2015年迄今有5起路殺案件。
      </div>
    </ScrollingMapp>
    <ScrollingMap
      mapId = "scrolling-map-2-2"
      imgSrcMob="./img/mob1_1.jpg"
      imgSrcWeb="./img/web1_1.jpg"
      backgroundColor="#011936"
      textPosition="left"
      :useFadeFlag=true
    >
      <div slot="intro">
        從三義到卓蘭大橋段通車後，2017年1月在高掛「石虎之鄉」招牌的卓蘭大橋旁（苗140縣道25公里處），發生石虎路殺案件，同年11月在23.5公里奉天宮附近，再度有石虎被撞死。
      </div>
    </ScrollingMap>
    <ScrollingMapBlur
      mapId = "scrolling-map-2-3"
      imgSrcMob="./img/mob1_2.jpg"
      imgSrcWeb="./img/web1_2.jpg"
      backgroundColor="#011936"
      textPosition="left"
      :useFadeFlag=true
    >
      <div slot="intro">
        苗140縣道從卓蘭往東到白布帆路段，2017年初在29公里處也有石虎路殺。記者深夜到現場，夜間車流少，但此處為彎道過後筆直的雙線道，車輛都呼嘯而過。
      </div>
    </ScrollingMapBlur>
    <Content>
      <h3>穿越道路覓食<br>跨不過就是死路一條</h3>
      <p><br></p>
      <p><strong>「就像百米跨欄賽，跨不過就是死路一條。」</strong>台灣石虎保育協會理事王豫煌說，不管是苗140或苗29縣道，路的一側是石虎棲息的山坡地，另一側則是覓食的河床溪流，以往道路未開闢前，石虎從山坡到溪床沒有阻礙，又寬又大的馬路開闢後，車流增加車速變快，石虎穿越時間拉長，遇到車子逼近時也反應不及。</p>
      <p><br></p>
      <p>王豫煌表示，類似的新闢道路除了增加路殺風險，後續帶動的土地開發、人車增加，也會迫使石虎棲地進一步遭到破壞，長期分析還可能阻礙石虎族群活動範圍，造成族群擴散與基因交流的不利影響。</p>
      <p><br></p>
    </Content>
    <FullImage
      imgSrcMob="./img/mob1_4.jpg"
      imgSrcWeb="./img/web1_4.jpg"
      description="苗29縣道穿越石虎棲息的山坡地和覓食的溪流，增加石虎路殺風險。"
    >
    </FullImage>
    <Content>
      <p>野聲環境生態顧問公司負責人姜博仁說，<strong>苗栗路殺熱點如苗140、苗29或苗52縣道，直接穿過溪流與淺山環境的過度地帶，增加野生動物親近溪流的風險；苗128縣道則穿越了三義到通霄的石虎棲地，同樣成為路殺熱區。</strong></p>
      <p><br></p>
      <p>姜博仁說，當年在開闢道路時，未善加評估對生態環境的衝擊，才會讓又直又寬的馬路穿過棲地，直接威脅到淺山的野生動物，讓瀕臨絕種的石虎更增添風險。</p>
      <p><br></p>
      <p><br></p>
    </Content>
    <ScrollingMapLast
      mapId = "scrolling-map-3-1"
      imgSrcMob="./img/mob1_3.jpg"
      imgSrcWeb="./img/web1_3.jpg"
      textPosition="center"
      introBackgroundColor="#fefefe"
      :useFullFlag=true
    >
      <div slot="intro">
        <h3>未來100年<br>台灣還看得到石虎嗎？</h3>
      </div>
    </ScrollingMapLast>
    <Content>
      <p>未來100年，台灣還看得到碩果僅存的野生貓科動物石虎嗎？根據學者模擬分析，<strong>台灣石虎的生存遭受極大威脅，在未來100年內，很有可能與同屬貓科的雲豹一樣，消失在台灣山林，走上滅絕之路。</strong></p>
      <p><br></p>
      <p>農委會特有生物中心委託嘉義大學森林暨自然資源學系助理教授劉建男，進行石虎族群存續力分析，現存石虎數量以400隻估算，若僅考慮自然死亡，未來100年石虎滅絕機率僅2%，若加計每年通報的路殺死亡數8到12隻，未來100年滅絕機率大幅提高到32.5%。</p>
      <p><br></p>
      <p><strong>「每年光是路殺造成的死亡數，已經顯著提升石虎滅絕危機」</strong>。劉建男說，儘管這只是首年研究的模擬成果，分析所需要的參數如出生率、死亡率、族群數量等，國內研究都還沒有，只能套用國外或相關物種的資料，分析出的滅絕機率數字僅供參考，卻是項嚴重的警訊。</p>
      <p><br></p>
      <p>劉建男強調，台灣石虎面臨的族群危機，不只有路殺，石虎攻擊雞舍遭毒害、獵捕死亡，每年保守估算20隻以上，加上無法計算的貓狗咬死或病毒傳染等，以及各項開發案鯨吞蠶食石虎棲地，讓重要棲地破碎化，台灣石虎族群的未來讓人憂慮。</p>
    </Content>
    <Content>
      <Question href="https://www.surveycake.com/s/KpQKN" text="填寫閱讀體驗問卷"></Question>
      <p><br></p>
      <p><br></p>
      <Share href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic1/"></Share>
      <Logo></Logo>
      <p><br></p>
      <Editor>
        <div>採訪團隊：洪敬浤、胡蓬生、范榮達、黃瑞典、賴香珊、鄭朝陽</div>
        <div>影像：黃仲裕、黃瑞典、報系資料照、特生中心提供</div>
        <div>製作人：蔡佩蓉</div>
        <div>視覺設計：張心慈</div>
        <div>網頁製作：楊若榆、謝化挺</div>
        <div>監製：林秀姿、潘如瑩、董谷音</div>
        <div>2019.03.28</div>
      </Editor>
      <p><br></p>
      <Relate
        href1="https://udn.com/upf/newmedia/2019_data/leopardcat/topic2"
        img1="./relate/topic2_related.jpg"
        text1="【誰殺了石虎之二】毀棲地蓋公園 官僚式前瞻計畫殺石虎"
        href2="https://udn.com/upf/newmedia/2019_data/leopardcat/topic3"
        img2="./relate/topic3_related_.jpg"
        text2="【誰殺了石虎之三】開發案圍攻 「像插在石虎心臟的刀」"
        href3="https://udn.com/upf/newmedia/2019_data/leopardcat/topic4"
        img3="./relate/topic4_related.jpg"
        text3="【誰殺了石虎之四】設動物生態廊道 給石虎一條安全回家的路"
        href4="https://udn.com/news/story/7470/2847467"
        img4="./relate/related_01.jpg"
        text4="25年首次 八卦山石虎現蹤…卻遭路殺"
      >
      </Relate>
      <p><br></p>
      <FBComment href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic1/"></FBComment>
    </Content>
    <BackTop></BackTop>
    <Footer></Footer>
  </div>
</template>

<script>
import BackTop from '@/components/BackTop.vue'
import ColumnOne from '@/components/ColumnOne.vue'
import Content from '@/components/Content.vue'
import Cover from '@/components/Cover.vue'
import Editor from '@/components/Editor.vue'
import FBComment from '@/components/FBComment.vue'
import Footer from '@/components/Footer.vue'
import FullImage from '@/components/FullImage.vue'
import HeadBar from '@/components/HeadBar.vue'
import Indicator from '@/components/Indicator.vue'
import Logo from '@/components/Logo.vue'
import Question from '@/components/Question.vue'
import Relate from '@/components/Relate.vue'
import ScrollingMap from '@/components/ScrollingMap.vue'
import ScrollingMapp from '@/components/ScrollingMapp.vue'
import ScrollingMapBlur from '@/components/ScrollingMapBlur.vue'
import ScrollingMapLast from '@/components/ScrollingMapLast.vue'
import ScrollingMapRoad from '@/components/ScrollingMapRoad.vue'
import ScrollingMapRoadLast from '@/components/ScrollingMapRoadLast.vue'
import ScrollingMapTw from '@/components/ScrollingMapTw.vue'
import ScrollingMapVideo from '@/components/ScrollingMapVideo.vue'
import Share from '@/components/Share.vue'

export default {
  name: 'app',
  components: {
    BackTop,
    ColumnOne,
    Content,
    Cover,
    Editor,
    FBComment,
    Footer,
    FullImage,
    HeadBar,
    Indicator,
    Logo,
    Question,
    Relate,
    ScrollingMap,
    ScrollingMapp,
    ScrollingMapBlur,
    ScrollingMapLast,
    ScrollingMapRoad,
    ScrollingMapRoadLast,
    ScrollingMapTw,
    ScrollingMapVideo,
    Share,
  },
  data() {
    return {
      outLinkList: [
        {
          name: '誰殺了石虎',
          link: 'https://udn.com/upf/newmedia/2019_data/leopardcat/',
        },
        {
          name: '路殺',
          link: 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic1/',
        },
        {
          name: '官僚殺',
          link: 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic2/',
        },
        {
          name: '開發案殺',
          link: 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic3/',
        },
        {
          name: '拯救石虎',
          link: 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic4/',
        },
      ],
    };
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  position: relative;
  text-align: justify;
}
h2 {
  font-weight: 800;
  font-size: 36px;
  @media screen and (min-width: 1024px) {
    font-size: 50px;
  }
}
h3 {
  font-weight: 800;
  line-height: 1.5;
}
</style>
