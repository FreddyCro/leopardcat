<template>
  <div id="app">
    <Indicator></Indicator>
    <HeadBar
      projectHref="https://udn.com/upf/newmedia/2019_data/leopardcat/topic4/"
      :outLinkList="outLinkList"
    ></HeadBar>
    <Content
      backgroundColor="#f9f9f9"
    >
      <Cover
        :coverImageMob="require('./assets/cover/mob_cover4.jpg')"
        :coverImageWeb="require('./assets/cover/web_cover4.jpg')"
        :titleSvg="require('./assets/cover/title4.svg')"
        href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic4/"
      >
        <div slot="title">
          <h2>設動物生態廊道<br>給石虎一條安全回家的路</h2>
        </div>
        <div slot="text">
          <p>到日本旅遊，台灣人看到「鹿出沒，注意」或是「熊出沒，注意」的標幟都興奮拍照，更感佩日本對動物生態的用心。然而回到台灣，石虎路殺意外頻傳，即使動保團體認真呼籲、救治，都抵擋不了台灣人的漠視。</p>
        </div>
      </Cover>
    </Content>
    <Content>
      <p>如何讓石虎平安回家，而不是留下血痕斑斑在國道上，專家有4大建議：</p>
      <p><br></p>
      <Suggestion>
        <div slot="title">
          救救石虎4大招
        </div>
        <div slot="list">
          <ol>
            <li>動物生態廊道</li>
            <li>石虎出沒！增加警告標誌</li>
            <li>架設動物防護網</li>
            <li>夜間放慢車速</li>
          </ol>
        </div>
      </Suggestion>
      <p><br></p>
      <h3>國道生態廊道建功<br>石虎趴趴走</h3>
      <p><br></p>
      <p>高公局6年前把<strong>國道3號通霄跨越橋的三分之一橋面，鋪設100公尺長綠帶，改造成高速公路第一條動物生態廊道，到去年已拍攝到15次石虎影像</strong>，還有白鼻心、麝香貓、鼬獾等21個物種，紀錄筆數超過650次。</p>
      <p><br></p>
      <p>中區養護工程分局副分局長賴榮俊說，高公局先前在跨越橋架設紅外線攝影機監測生態，拍到石虎在橋頭徘徊，不敢跨過橋樑，才仿效國外，以「讓道」方式在跨越橋上打造一條生態廊道，近年來拍到野生動物通過畫面愈來愈多。</p>
      <p><br></p>
      <p>台61線西濱快速公路白沙屯到通霄交流道路段，去年完工通車前，公路總局在啟新國中旁的路段，也特別比照國道完成兼具動物友善通道的跨越橋。</p>
      <p><br></p>
      <ColumnOne
        :src="require('./assets/img/pic4_mob.jpg')"
        :srcWeb="require('./assets/img/pic4_web.jpg')"
        description="高公局在國3通霄跨越橋上打造動物生態廊道。"
        alt="高公局在國3通霄跨越橋上打造動物生態廊道"
        href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic4/"
      ></ColumnOne>
      <p><br></p>
      <h3>專家現勘<br>數量少、難辨識 警告標誌不及格</h3>
      <p><br></p>
      <p>苗栗縣苗29線後龍溪大橋至新港大橋段及苗140線三義至卓蘭段兩條新闢道路都成石虎路殺熱區，但專家現勘發現，兩條道路雖設有「當心動物減速慢行標誌」，但數量少、能見度低，「不及格，完全高估駕駛人」，相關的警示設施仍待加強。</p>
      <p><br></p>
      <p>國道公路警察局前大隊長陳英傑，退休後投身石虎保育志工。陳英傑說，苗29線從後龍溪大橋到新港大橋，全長僅3.6公里，就發生4起石虎路殺，而且集中在2公里處附近，石虎是苗栗的生態資產，縣府應加強改善。</p>
      <p><br></p>
      <p>陳英傑說，<strong>苗29線此路段雙向只有各一面「當心動物減速慢行」標誌，數量少不明顯，字體太小、圖案像黑貓</strong>，其中一面還被路樹遮蔽，加上行經車速快，辨識度極差，入夜後更難察覺，沒辦法發揮作用；苗140縣道也有相同問題。</p>
      <p><br></p>
      <p>他建議<strong>在道路兩側，設置門架式的警告標誌</strong>，提醒用路人將進入石虎出沒、路殺熱點路段；重要路段的<strong>護欄、安全島可塗上反光、醒目的塗料</strong>，甚至改變道路鋪面顏色，以各種手段來示警；<strong>夜間應採用自動閃爍的LED標誌</strong>，字體加大，凸顯石虎的圖案，與其他號誌區隔。</p>
      <p><br></p>
    </Content>
    <FullImage
      :imgSrcMob="require('./assets/img/mob4_2.jpg')"
      :imgSrcWeb="require('./assets/img/web4_2.jpg')"
      description="石虎保育志工陳英傑認為苗29線道路「當心動物減速慢行標誌」，數量少又不明顯，標誌字體小，圖案像隻黑貓，辨識度差。"
    >
    </FullImage>
    <p><br></p>
    <p><br></p>
    <FullImage
      :imgSrcMob="require('./assets/img/mob4_3.jpg')"
      :imgSrcWeb="require('./assets/img/web4_3.jpg')"
      description="石虎保育志工陳英傑建議可利用苗140線的門架式標誌，提醒用路人行經石虎路殺熱點，減速慢行，比當心動物警告標誌更具效果。"
    >
    </FullImage>
    <Content>
      <p>苗栗縣政府委託學者，改善苗29線路殺問題；石虎專家姜博仁在苗29線2公里處，南側路邊設置高2公尺防護網，阻擋石虎從丘陵直接穿越馬路到後龍溪畔，並引導透過道路下方的涵洞穿越。</p>
      <p><br></p>
      <p>姜博仁說，<strong>今年初已拍攝到石虎、白鼻心等利用涵洞，也拍到石虎被防護網擋路、最後轉頭離開的畫面</strong>，但涵洞與道路有6公尺落差，要在規劃友善木梯提高使用率；他也規劃設置反光標誌，當車輛靠近時，會反射車燈到兩側，野生動物看到燈光會自動迴避。</p>
    </Content>
    <FullImage
      :imgSrcMob="require('./assets/img/mob4_4.jpg')"
      :imgSrcWeb="require('./assets/img/web4_4.jpg')"
      description="苗29線道路石虎路殺事件頻傳，縣府年初完成第一條友善動物通道，運用路旁圍籬、地下排水箱涵等設施，盼石虎能安全往返後龍溪畔及棲地。記者胡蓬生／攝影"
    >
    </FullImage>
    <Content>
      <h3>設防護網成效有限<br>放慢車速最重要</h3>
      <p><br></p>
      <p>為降低石虎路殺，南投縣除在集集、中寮等地道路旁豎立警告標誌外，公路總局南投工務段也在台16線路殺熱點，架設動物防護網，避免石虎、白鼻心和流浪貓狗闖入，並設寬溝引導動物改走鄰近田寮橋底的通道，以減少路殺的可能性。</p>
      <p><br></p>
      <ColumnOne
        :src="require('./assets/img/mob4_5.jpg')"
        :srcWeb="require('./assets/img/web4_5.jpg')"
        description="為降低石虎路殺，南投縣在集集、中寮等地道路旁豎立警告標誌，提醒用路人放慢車速。"
        alt="道路旁豎立警告標誌，提醒用路人放慢車速"
        href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic4/"
      ></ColumnOne>
      <p><br></p>
      <ColumnOne
        :src="require('./assets/img/mob4_6.jpg')"
        :srcWeb="require('./assets/img/web4_6.jpg')"
        description="公路總局南投工務段與特生中心合作，在曾發生過石虎路殺的台16線設動物防護網。"
        alt="在曾發生過石虎路殺的台16線設動物防護網"
        href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic4/"
      ></ColumnOne>
      <p><br></p>
      <p>只不過，<strong>警告標誌、動物防護網或動物通道等保護成效仍相當有限</strong>。特生中心助理研究員林育秀說，一般平面道路因為要顧及民眾出入，還有不少岔路，因此不像國道幾乎是完全封閉的道路系統，因此防護效果就沒有在國道上那樣的好。</p>
      <p><br></p>
      <p>透過防護網將動物帶往專屬通道雖可行，<strong>只是動物跟人一樣，就算有天橋或地下道仍習慣或較喜愛走平面、闖馬路</strong>；而警告標誌雖具宣導和警示功能，但也得看民眾配合意願，<strong>「夜間能放慢車速」對駕駛和動物都是最好的。</strong></p>
    </Content>
    <Content>
      <Question href="https://www.surveycake.com/s/KpQKN" text="填寫閱讀體驗問卷"></Question>
      <p><br></p>
      <p><br></p>
      <Share href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic4/"></Share>
      <Logo></Logo>
      <p><br></p>
      <Editor>
        <div>採訪團隊：洪敬浤、胡蓬生、范榮達、黃瑞典、賴香珊、鄭朝陽</div>
        <div>影像：胡蓬生、黃瑞典、賴香珊</div>
        <div>主照：余建勳提供</div>
        <div>製作人：蔡佩蓉、洪欣慈</div>
        <div>視覺設計：張心慈</div>
        <div>網頁製作：楊若榆、謝化挺</div>
        <div>監製：林秀姿、潘如瑩、董谷音</div>
        <div>2019.03.28</div>
      </Editor>
      <p><br></p>
      <Relate
        href1="https://udn.com/upf/newmedia/2019_data/leopardcat/topic1/"
        :img1="require('./assets/relate/topic1_related.jpg')"
        text1="【誰殺了石虎之一】馬路變墳場 8年75隻石虎遭路殺"
        href2="https://udn.com/upf/newmedia/2019_data/leopardcat/topic2/"
        :img2="require('./assets/relate/topic2_related.jpg')"
        text2="【誰殺了石虎之二】毀棲地蓋公園 官僚式前瞻計畫殺石虎"
        href3="https://udn.com/upf/newmedia/2019_data/leopardcat/topic3/"
        :img3="require('./assets/relate/topic3_related_.jpg')"
        text3="【誰殺了石虎之三】開發案圍攻 「像插在石虎心臟的刀」"
        href4="https://opinion.udn.com/opinion/story/10673/3583270"
        :img4="require('./assets/relate/related_04.jpg')"
        text4="石虎又來偷吃雞，農業和保育如何平衡？"
      >
      </Relate>
      <p><br></p>
      <FBComment href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic4/"></FBComment>
    </Content>
    <BackTop></BackTop>
    <Footer></Footer>
  </div>
</template>

<script>
import BackTop from '@/components/BackTop.vue';
import ColumnOne from '@/components/ColumnOne.vue';
import Content from '@/components/Content.vue';
import Cover from '@/components/Cover.vue';
import Editor from '@/components/Editor.vue';
import FBComment from '@/components/FBComment.vue';
import Footer from '@/components/Footer.vue';
import FullImage from '@/components/FullImage.vue';
import HeadBar from '@/components/HeadBar.vue';
import Indicator from '@/components/Indicator.vue';
import Logo from '@/components/Logo.vue';
import Question from '@/components/Question.vue';
import Relate from '@/components/Relate.vue';
import Share from '@/components/Share.vue';
import Suggestion from '@/components/Suggestion.vue';

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
    Share,
    Suggestion,
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
  background-color: #ffffff;
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
<style>
  @import './assets/UdnFontSize.css';
</style>
